import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router';

const PokemonIndex = ({ pokemons, children }) => {
  let pokemonList = pokemons.map((pokemon) =>
      (<PokemonIndexItem key={pokemon.id} pokemon={pokemon} />));
  return (
    <section className="pokedex">
      <ul>
        { pokemonList }
      </ul>
      { children }
    </section>
  );
};

export default PokemonIndex;
