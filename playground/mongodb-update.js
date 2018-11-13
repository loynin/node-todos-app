//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error){
        return console.log('Error connecting to database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bea45848b753661d0228024')
    },{
        $set:{
            completed: false
        }
    }, {
        returnOrigial: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
    //client.close();
});