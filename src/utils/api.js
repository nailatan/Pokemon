import axios from "axios";

export const getMoreInformationPokemon = async (pokemonId) => {
  try {
    const pokemonInfo = await axios.get(
      `http://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const { abilities, height, weight, base_experience, name, types } = {
      ...pokemonInfo.data,
    };
    const info = await getInformationSpecies(pokemonId);

    const pokemon = {
      name: name,
      abilities: abilities,
      height: height / 10 + " m",
      weight: weight / 10 + " kg",
      base_experience: base_experience,
      description: info["description"],
      category: info["category"],
      types: types,
    };

    return pokemon;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const getInformationSpecies = async (pokemonId) => {
  try {
    const pokemonInfo = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    let description = "";
    let category = "";

    pokemonInfo.data.flavor_text_entries.forEach(function (element) {
      if (element.language.name == "es") {
        description = element.flavor_text;
      }
    });

    pokemonInfo.data.genera.forEach(function (element) {
      if (element.language.name == "es") {
        category = element.genus;
      }
    });
    return { description, category };
  } catch (e) {
    console.error(e);
    return "";
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

export const getAllPokedex = async () => {
  const pokedex = await axios.get("https://pokeapi.co/api/v2/pokedex/");

  if (pokedex != null) {
    return pokedex.data.results;
  } else {
    return [];
  }
};

export default { getMoreInformationPokemon, getPokedex, getAllPokedex };
