import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon } from '../actions/pokemon_actions';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/"
        component={PokemonIndexContainer}
        onEnter={store.dispatch(requestAllPokemon())}/>
    </Router>
  </Provider>
);

export default Root;
