// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect(`mongodb://localhost:27017/`, (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b19393127e095bbdbc80c15")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     });

    db.collection('Users').findOneAndUpdate({
        name: "Jane"
    }, {
            $set: {
                name: "Shailesh"
            },
            $inc: {
                age: +1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(JSON.stringify(res.value, undefined, 2));

        });
    // client.close();
});