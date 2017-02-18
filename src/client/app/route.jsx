import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import AppComponent from './AppComponent.jsx';
import PokemonComponent from './PokemonComponent.jsx';
import Pokedex from './Pokedex.jsx';

const app = document.getElementById('app');

render (
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={PokemonComponent}></IndexRoute>
      <Route path='pokedex' component={Pokedex}></Route>
    </Route>
  </Router>, app);