import * as ACTIONS from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON:
      let newState = merge({}, state);
      newState.pokemons = action.pokemons;
      return newState;
    case ACTIONS.POKEMON_CONSTANTS.RECEIVE_SINGLE_POKEMON:
      let singleNew = merge({}, state);
      singleNew.pokemon = action.pokemon;
      return singleNew;
    case ACTIONS.POKEMON_CONSTANTS.RECEIVE_NEW_POKEMON:
      let addNew = merge({}, state);
      addNew.pokemons.push(action.newPokemon);
      return addNew;
    default:
      return state;
  }
};

export default PokemonReducer;
