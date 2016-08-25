import { combineReducers } from 'redux';
import PokemonReducer from '../reducers/pokemon_reducer';

const RootReducer = combineReducers({
  pokemons: PokemonReducer
});

export default RootReducer;
