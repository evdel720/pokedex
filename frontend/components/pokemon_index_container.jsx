import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

export default connect(mapStateToProps, null)(PokemonIndex);
