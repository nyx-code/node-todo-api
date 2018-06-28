var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
}

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI
}