//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error){
        return console.log('Error connecting to database');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // Delete many
        // db.collection('Todos').deleteMany({text: 'Sleeping Time'}).then((result) => {
        //     console.log(result);
        // })
    // Delete one
        // db.collection('Todos').deleteOne({text: 'number one'}).then((result) => {
        //     console.log(result);
        // })
    // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // })


    db.collection('Users').deleteMany({name: 'Steven'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bea565c1331d265e477a593")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    //client.close();
});