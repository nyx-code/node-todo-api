// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect(`mongodb://localhost:27017/`, (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');



    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to Insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Shailesh',
    //     age: 18,
    //     location: 'Hadapsar,Pune-28'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to connect Mongo because,', err);
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    // });

    client.close();
});