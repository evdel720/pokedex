
const fetchAllPokemon = (success) => {
  $.ajax({
    url: '/api/pokemon.json',
    type: 'GET',
    success: success
  });
};

const fetchSinglePokemon = (pokeId, success) => {
  $.ajax({
    url: `/api/pokemon/${pokeId}.json`,
    type: 'GET',
    success: success
  });
};

const createNewPokemon = (newPokemon, success) => {
  $.ajax({
    url: `/api/pokemon.json`,
    type: 'POST',
    data: newPokemon,
    success: success
  });
};


export { fetchAllPokemon, fetchSinglePokemon, createNewPokemon };
