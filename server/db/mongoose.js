const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://todoapp:pass123@ds161610.mlab.com:61610/dbtodoapp';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}