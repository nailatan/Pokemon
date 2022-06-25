import axios from "axios";
import {IAbility} from "../types/Ability";
import {IType} from "../types/Type";
import {IPokemon} from "../types/Pokemon";
import {ISpecie} from "../types/Specie";

export const getMoreInformationPokemon = async (pokemonId : string) : Promise<IPokemon |null> =>  {
  try {
    const pokemonInfo = await axios.get(
      `http://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const { abilities, height, weight, base_experience, name, types }  : {abilities: any[], height: number, weight: number, base_experience: number, name: string, types: any[]}= {
      ...pokemonInfo.data,
    };
    const info = await getInformationSpecies(pokemonId);

    const abilitiesArray : IAbility[] = abilities.map ((act) => {return {name: act.ability.name}});
    const typesArray : IType[] = types.map ((act) => {return {name: act.type.name}});

    const pokemon : IPokemon = {
      name: name,
      abilities: abilitiesArray,
      height: height / 10,
      weight: weight / 10,
      base_experience: base_experience,
      description: info !=null ? info["description"] : "",
      category: info !=null ? info["category"] : "",
      types: typesArray,
    };

    return pokemon;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getInformationSpecies = async (pokemonId : string) : Promise<ISpecie | null> => {
  try {
    const pokemonInfo = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    let description : string = "";
    let category : string = "";

    pokemonInfo.data.flavor_text_entries.forEach(function (element : any) {
      if (element.language.name == "es") {
        description = element.flavor_text;
      }
    });

    pokemonInfo.data.genera.forEach(function (element : any) {
      if (element.language.name == "es") {
        category = element.genus;
      }
    });
    return { description, category };
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getPokedex = async (name : string) => {
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
