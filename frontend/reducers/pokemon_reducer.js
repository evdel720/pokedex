import * as ACTIONS from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON:
      return action.pokemons;
      // newState = merge({}, state);
      // newState.pokemons = action.pokemons;
      // return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
