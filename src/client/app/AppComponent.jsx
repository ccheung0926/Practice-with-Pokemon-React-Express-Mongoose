import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class AppComponent extends React.Component {
  navigate(){
    this.props.router.push("/")
  }
  render () {
    return (
      <div>
        <h1>Pokemon Generation 1</h1>
        {this.props.children}
        <p><Link to="/">home</Link></p>
        <p><Link to='pokedex'>see all Pokemons</Link></p>
      </div>
    );
  }
}