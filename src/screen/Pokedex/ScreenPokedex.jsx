import React from "react";
import { useState, useEffect } from "react";
import SelectPokedex from "../../components/Select/PokedexSelect";
import CardPokemon from "../../components/Card/CardPokemon";
import "./ScreenPokedex.css";
import { getPokedex } from "../../utils/api";

const Pokedex = (params) => {
  const [selPokedex, setSelPokedex] = useState("");
  const [pokemonList, setPokemonList] = useState(null);

  const changeActivePokedex = (value) => {
    setSelPokedex(value);
  };

  useEffect(() => {
    if (selPokedex === "") setSelPokedex("national"); //Seleccionamos la primera por defecto
  }, []);

  useEffect(
    (prev) => {
      const getDataPokedex = async () => {
        const pokedex = await getPokedex(selPokedex);
        if (pokedex != null) {
          setPokemonList(pokedex);
        } else {
          setPokemonList([]);
        }
      };
      getDataPokedex();
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
        <ul className="pokedex">
          {pokemonList.map((pokemon) => {
            const pokemonNum =
              pokemon.pokemon_species.url.split("/")[
                pokemon.pokemon_species.url.split("/").length - 2
              ];
            return (
              <CardPokemon
                pokemonNum={pokemonNum}
                pokemonName={pokemon.pokemon_species.name}
                key={pokemon.entry_number}
              />
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
