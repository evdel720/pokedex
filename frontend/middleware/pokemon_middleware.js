import { POKEMON_CONSTANTS, receiveAllPokemon } from '../actions/pokemon_actions';
import {fetchAllPokemon} from '../util/api_util';

const PokemonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      let fetchSuccess = (pokemons) => store.dispatch(receiveAllPokemon(pokemons));
      fetchAllPokemon(fetchSuccess);
      break;
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
