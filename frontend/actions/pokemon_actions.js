const POKEMON_CONSTANTS = {
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON"
};

const requestAllPokemon = () => ({
  type: POKEMON_CONSTANTS.REQUEST_ALL_POKEMON
});

const receiveAllPokemon = (pokemons) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  pokemons
});

export { POKEMON_CONSTANTS, requestAllPokemon, receiveAllPokemon };
