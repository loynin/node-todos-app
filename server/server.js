const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js')
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');
const {ObjectID} = require('mongodb');

const app = express();

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

app.listen(3001, () => {
    console.log('Start the server on port 3000');
});

module.exports = {app};