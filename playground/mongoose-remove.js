const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const { Users } = require('./../server/model/user');

var userId = '5b1a47b7c7ca8919a0d3020311';

// Todo.remove({}).then((result)=>{
//     console.log(result);
    
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b2913b89ab2de66b0ab1218').then((res)=>{
    console.log(res);
    
});