const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((res) => {
    console.log('Todo Saved', res);
}, (e) => {
    console.log('Unable to save todo');
});

var newTodo1 = new Todo({
    text: 'Record Youtube Videos',
    completed: true,
    completedAt: 12
}, {
        text: 'task2',
        completed: false,
    })

newTodo1.save().then((res) => {
    console.log('Todo Saved successfuly');
    console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
    console.log('Unable to save data', err);
});