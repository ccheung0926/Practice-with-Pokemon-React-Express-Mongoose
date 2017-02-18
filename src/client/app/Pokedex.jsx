import React from 'react';
import axios from 'axios';
export default class Pokedex extends React.Component{
    constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      pokemons: []
    }
    this.apiUrl = '/api/pokedex'
  }
  //  Lifecycle method
  componentDidMount() {
    axios.get(this.apiUrl)
    .then((res) => {
      var pokemons = res.data.pokemon;
      this.setState({pokemons: pokemons});
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }

    render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <ol>
        {this.state.pokemons.map(pokemon =>
          <li key={pokemon._id}>{pokemon.name}</li>
        )}
        </ol>
      </div>
    );
  }
}