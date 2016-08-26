const POKEMON_CONSTANTS = {
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_SINGLE_POKEMON: "REQUEST_SINGLE_POKEMON",
  RECEIVE_SINGLE_POKEMON: "RECEIVE_SINGLE_POKEMON",
  CREATE_NEW_POKEMON: "CREATE_NEW_POKEMON",
  RECEIVE_NEW_POKEMON: "RECEIVE_NEW_POKEMON"
};

const createNewPokemon = (newPokemon) => ({
  type: POKEMON_CONSTANTS.CREATE_NEW_POKEMON,
  newPokemon
});

const receiveNewPokemon = (newPokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_NEW_POKEMON,
  newPokemon
});

const requestAllPokemon = () => ({
  type: POKEMON_CONSTANTS.REQUEST_ALL_POKEMON
});

const receiveAllPokemon = (pokemons) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  pokemons
});

const requestSinglePokemon = (pokeId) => ({
  type: POKEMON_CONSTANTS.REQUEST_SINGLE_POKEMON,
  pokeId
});

const receiveSinglePokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_SINGLE_POKEMON,
  pokemon
});

export { POKEMON_CONSTANTS, requestAllPokemon,
  receiveAllPokemon, requestSinglePokemon, receiveSinglePokemon,
  createNewPokemon, receiveNewPokemon };
