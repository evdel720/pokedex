import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon_index_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestAllPokemon, requestSinglePokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonForm from './pokemon_form';


const Root = ({store}) => {
  const requestSinglePokemonOnEnter = (nextState) => {
    store.dispatch(requestSinglePokemon(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={store.dispatch(requestAllPokemon())}>
          <IndexRoute component={() => <PokemonForm store={store}/>}/>
          <Route path="/pokemon/:id"
            component={PokemonDetailContainer} onEnter={requestSinglePokemonOnEnter} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
