import React from 'react';

const PokemonIndex = ({ pokemons }) => {
  let pokemonList = pokemons.map((pokemon) =>
      (<li key={pokemon.id}>{ pokemon.name }</li>));
  return (
    <section className="pokedex">
      <ul>
        { pokemonList }
      </ul>
    </section>
  );
};

export default PokemonIndex;
