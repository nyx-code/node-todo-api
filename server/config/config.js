var env = process.env.NODE_ENV || 'development';

var MONGODB_URI;

if (env === 'development') {
    process.env.PORT = 3000;
    MONGODB_URI = 'mongodb://todoapp:pass123@ds161610.mlab.com:61610/dbtodoapp';
} else if(env === 'test'){
    process.env.PORT = 3000;
    MONGODB_URI= 'mongodb://todoapp:pass123@ds121371.mlab.com:21371/dbtesttodo';
}

module.exports = {MONGODB_URI};