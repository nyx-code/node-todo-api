var env = process.env.NODE_ENV || 'development';
var MONGODB_URI_LOCAL;

if (env === 'development') {
    process.env.PORT = 3000;
    MONGODB_URI_LOCAL = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test'){
    process.env.PORT = 3000;
    MONGODB_URI_LOCAL = 'mongodb://localhost:27017/TodoAppTest';
}

module.exports.MONGODB_URI_LOCAL;