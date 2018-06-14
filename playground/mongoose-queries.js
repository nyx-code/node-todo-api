const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const { Users } = require('./../server/model/user');

var userId = '5b1a47b7c7ca8919a0d3020311';


// var id = '5b221bcfc84ec2461c92bd2d11';

// if (!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

Users.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));