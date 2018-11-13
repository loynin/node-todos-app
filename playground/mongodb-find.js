//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error){
        return console.log('Error connecting to database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bea565c1331d265e477a592')
    // }).toArray().then((docs) => {
    //     console.log('Todo');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to read the data', err);
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log('Todo' , count);
    }, (err) => {
        console.log('unable to read the data', err);
    })

    //client.close();
});