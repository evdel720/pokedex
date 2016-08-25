
const fetchAllPokemon = (success) => {
  $.ajax({
    url: '/api/pokemon.json',
    type: 'GET',
    success: success
  });
};


export { fetchAllPokemon };
