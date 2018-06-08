const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((res) => {
//     console.log('Todo Saved', res);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var newTodo1 = new Todo({
//     text: "      Eat Lunch         "
// })

// newTodo1.save().then((res) => {
//     console.log('Todo Saved successfuly');
//     console.log(JSON.stringify(res, undefined, 2));
// }, (err) => {
//     console.log('Unable to save data', err);
// });

var Users = mongoose.model('Users', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
});

var newUser = new Users({
    email: 'kadamshailesh007@gmail.com'
});

newUser.save().then((res) => {
    console.log('New User created succfully');
    console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
    console.log('Unable to create new user because', err);
});