var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pokemonJson = require('../../data/pokemon');
var pokemonsSchema = Schema({
  _id: Number,
  name: String,
  image: String,
  types: {
    type1: String,
    type2: String
  }
});

var Pokemon  = mongoose.model('Pokemon', pokemonsSchema);
for(var i = 0; i < pokemonJson.length; i++){
  var obj = new Pokemon({
    _id: pokemonJson[i].number,
    name: pokemonJson[i].name,
    image: pokemonJson.imageUrl,
  }, {collection: 'Pokemon'});
  if(pokemonJson[i].types.length > 1){
    obj.types.type1 = pokemonJson[i].types[0];
    obj.types.type2 = pokemonJson[i].types[1];
  }
  else{
    obj.types.type1 = pokemonJson[i].types[0];
    obj.types.type2 = null;
  }
  obj.save();
}
module.exports = Pokemon;