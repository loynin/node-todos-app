require('./config/config.js');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js')
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');
const {ObjectID} = require('mongodb');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send(`The ${id} is not a valid ID`);
    } 
    Todo.findById(id).then((todo) => {
        if (todo) {
            res.status(200).send({todo});
        } else {
            res.status(404).send();
        }
    }).catch( () => {
        res.status(404).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo){
            res.status(200).send({todo});
        } else {
            res.status(404).send();
        }
    }).catch((e) => {
        res.status(404).send();
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    })
})

//POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email','password']);
    const user = new User(body);

    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    })
    .catch((e) =>{
        res.status(400).send(e);
    });
});


app.listen(port, () => {
    console.log(`Started the server on port ${port}`);
});

module.exports = {app};