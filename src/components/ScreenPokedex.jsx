import React from "react";
import { useState, useEffect } from "react";
import SelectPokedex from "./PokedexSelect";
import axios from "axios";

const Pokedex = (params) => {
  const [selPokedex, setSelPokedex] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const changeActivePokedex = (value) => {
    console.log("screen Change ${value}");
    setSelPokedex(value);
  };

  useEffect((prev) => {
    const getPokedex = async () => {
      const pokedex = await axios.get(
        `https://pokeapi.co/api/v2/pokedex/${selPokedex}`
      );
      if (pokedex != null) {
        setPokemonList(pokedex.data.pokemon_entries);
        setSelPokedex(1);
      } else {
        setPokemonList([]);
      }
    };
    getPokedex();
  }, []);

  useEffect(
    (prev) => {
      const getPokedex = async () => {
        console.log(`SCreem lista pokemon de ${selPokedex}`);
        const pokedex = await axios.get(
          `https://pokeapi.co/api/v2/pokedex/${selPokedex}`
        );
        if (pokedex != null) {
          setPokemonList(pokedex.data.pokemon_entries);
          //if (prev === undefined) setSelPokedex(1);
        } else {
          setPokemonList([]);
        }
      };
      getPokedex();
    },
    [selPokedex]
  );

  return (
    <div>
      <h1>Pokedex</h1>
      <SelectPokedex
        functionOnchange={changeActivePokedex}
        pokedex={selPokedex}
      />
      {pokemonList != null ? (
        <ul>
          {pokemonList.map((pokemon) => {
            return (
              <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
            );
          })}
        </ul>
      ) : (
        <div>No hay pokemons</div>
      )}
    </div>
  );
};

export default Pokedex;
