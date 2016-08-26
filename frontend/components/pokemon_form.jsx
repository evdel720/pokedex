import React from 'react';
import { createNewPokemon } from '../actions/pokemon_actions';
import { withRouter } from 'react-router';

const PokemonForm = ({ store, router }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const {name, img, type, attack, defense, move1, move2 } = e.target;
    let newPokemon = {
      pokemon: {
        name: name.value,
        image_url: img.value,
        poke_type: type.value,
        attack: attack.value,
        defense: defense.value,
        moves: [move1.value, move2.value]
      }
    };
    name.value = "";
    img.value = "";
    type.value = "";
    attack.value = "";
    defense.value = "";
    move1.value = "";
    move2.value = "";
    store.dispatch(createNewPokemon(newPokemon));
    router.push(`/pokemon/${store.getState().pokemons.length + 1}`);
  };

  return (<section className="pokemon-detail">
      <form className="pokemon-form" onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="img" placeholder="Image Url"/>
        <select name="type">
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="electric">electric</option>
          <option value="fighting">fighting</option>
          <option value="fire">fire</option>
          <option value="flying">flying</option>
          <option value="ghost">ghost</option>
          <option value="grass">grass</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
        </select>
        <input type="number" name="attack" placeholder="Attack"/>
        <input type="number" name="defense" placeholder="Defense"/>
        <input type="text" name="move1" id="move_1" placeholder="Move 1"/>
        <input type="text" name="move2" id="move_2" placeholder="Move 2"/>
        <button>Create Pokemon</button>
      </form>
    </section>
  );
};

export default withRouter(PokemonForm);
