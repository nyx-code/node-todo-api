// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect(`mongodb://localhost:27017/`, (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({ text: "Eat Lunch" }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').deleteOne({ text: "Eat Lunch" }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteOne({ name: "Shailesh" }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({ name: "Shailesh" }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b18fd56776f7b2d284ba250') }).then((res) => {
        console.log(res.value);
    });

    // client.close();
});