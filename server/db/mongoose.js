const mongoose = require('mongoose');
const {MONGODB_URI} = require('./../config/config');

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

module.exports = {
    mongoose
}