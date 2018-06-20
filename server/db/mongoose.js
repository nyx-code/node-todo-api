const mongoose = require('mongoose');

var {MONGODB_URI_LOCAL} = require('./../server');

const MONGODB_URI = 'mongodb://todoapp:pass123@ds161610.mlab.com:61610/dbtodoapp';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || MONGODB_URI_LOCAL);

module.exports = {
    mongoose
}