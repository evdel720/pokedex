import { createStore } from 'redux';
import PokemonReducer from '../reducers/pokemon_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = (preloadedState = {pokemons: [], pokemon: null}) => (
  createStore(
    PokemonReducer,
    preloadedState,
    MasterMiddleware)
);

export default configureStore;
