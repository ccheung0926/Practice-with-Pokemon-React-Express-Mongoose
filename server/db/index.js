var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pokemonJson = require('../../data/pokemon');
// BRING IN YOUR SCHEMAS & MODELS
var schema =  require('./schema');
// Build the connection string 'mongodb://localhost/{YOUR_DB_NAME}'
var mongoUri = 'mongodb://localhost/pokemon';
// promise for es6 style, doc: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;
// Create the database connection 
mongoose.connect(mongoUri);
// CONNECTION EVENTS
var db = mongoose.connection;
// When successfully connected
db.on('connected', function(){
  console.log('Mongoose default connection open to ' + mongoUri);
});
// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

module.exports = schema;