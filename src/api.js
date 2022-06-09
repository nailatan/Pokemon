import axios from "axios";

export const getPokemon = async (pokemonId) => {
  try {
    const pokemonInfo = await axios.get(
      "https://pokeapi.co/api/v2/pokemon-species/1"
    );
    const { evolution_chain } = { ...pokemonInfo };
    return pokemonInfo;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getPokedex = async (name) => {
  const pokedex = await axios.get(`https://pokeapi.co/api/v2/pokedex/${name}`);

  if (pokedex != null) {
    return pokedex.data.pokemon_entries;
  } else {
    return [];
  }
};

export default { getPokemon, getPokedex };
