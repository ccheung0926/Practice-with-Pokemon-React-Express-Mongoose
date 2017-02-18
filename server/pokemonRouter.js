var pokemonRouter = require('express').Router();
var request = require('request');

var webpackServerUrl = 'http://localhost:3001/';

// Proxy all requests through to the webpack server
pokemonRouter.get('/*', function(req, res) {
  request(webpackServerUrl.concat(req.baseUrl, req.url))
  .pipe(res);
});


module.exports = pokemonRouter;

// Create route handlers for each of the six methods in pokemonController
// pokemonRouter.route('/')

// pokemonRouter.route('/:number')

// module.exports = pokemonRouter;
