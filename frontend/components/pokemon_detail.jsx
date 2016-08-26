import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  if (pokemon) {
    return (
      <section className="pokemon-detail">
        <ul>
          <img src={pokemon.image_url } alt={pokemon.name}/>
            <li><h2>{pokemon.name}</h2></li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {pokemon.moves.join(", ")}</li>
        </ul>
      </section>
    );
  } else {
    return <section></section>;
  }
};

export default PokemonDetail;
