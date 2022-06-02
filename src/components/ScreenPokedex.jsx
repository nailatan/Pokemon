import React from "react";
import { useState, useEffect } from "react";
import SelectPokedex from "./PokedexSelect";
import CardPokemon from "./CardPokemon";
import axios from "axios";
import "../index.css";

const Pokedex = (params) => {
  const [selPokedex, setSelPokedex] = useState("");
  const [pokemonList, setPokemonList] = useState(null);

  const changeActivePokedex = (value) => {
    setSelPokedex(value);
  };

  useEffect(
    (prev) => {
      const getPokedex = async () => {
        const pokedex = await axios.get(
          `https://pokeapi.co/api/v2/pokedex/${selPokedex}`
        );
        if (pokedex != null) {
          setPokemonList(pokedex.data.pokemon_entries);
          if (selPokedex === "") setSelPokedex(1); //Seleccionamos la primera por defecto
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
      <h1>Pokedex de {selPokedex}</h1>
      <SelectPokedex
        functionOnchange={changeActivePokedex}
        pokedex={selPokedex}
      />
      {pokemonList != null ? (
        <ul>
          {pokemonList.map((pokemon) => {
            return <CardPokemon {...pokemon} key={pokemon.entry_number} />;
          })}
        </ul>
      ) : (
        <div>No hay pokemons</div>
      )}
    </div>
  );
};

export default Pokedex;
