const mongoose = require('mongoose');
const connectionConfiguration = require('./../config/connectionDatabase');

console.log('STRING CONNECTION DB ==>', connectionConfiguration.getUrl());

mongoose.connect(connectionConfiguration.getUrl(), { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;