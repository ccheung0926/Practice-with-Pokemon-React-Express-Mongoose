var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var Pokemon = require('./db/index');

// Create the Express application:
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../src/client')));

// Attach middleware:
app.get('/api/pokedex', function(req, res){
  Pokemon.find().sort( { _id: 1 } ).then(function(data){
    // res.render("pokedex", {pokemon: data});
    res.send({pokemon: data});
  });
});
// for handling react browser history
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/client', 'index.html'));
})

// Import the pokemonRouter and assign it to the correct route:

module.exports = app;
