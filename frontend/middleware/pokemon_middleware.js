import { POKEMON_CONSTANTS, receiveAllPokemon, receiveSinglePokemon, receiveNewPokemon } from '../actions/pokemon_actions';
import {fetchAllPokemon, fetchSinglePokemon, createNewPokemon} from '../util/api_util';

const PokemonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      let fetchSuccess = (pokemons) => store.dispatch(receiveAllPokemon(pokemons));
      fetchAllPokemon(fetchSuccess);
      break;
    case POKEMON_CONSTANTS.REQUEST_SINGLE_POKEMON:
      let fetchSingleSuccess = (pokemon) => store.dispatch(receiveSinglePokemon(pokemon));
      fetchSinglePokemon(action.pokeId, fetchSingleSuccess);
      break;
    case POKEMON_CONSTANTS.CREATE_NEW_POKEMON:
      let createSuccess = (pokemon) => store.dispatch(receiveNewPokemon(pokemon));
      createNewPokemon(action.newPokemon, createSuccess);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
