import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SelectPokedex = (props) => {
  const [pokedexValues, setPokedexValues] = useState([]);
  const onChangeSelect = props.functionOnchange;

  useEffect((prev) => {
    const getPokedex = async () => {
      const pokedex = await axios.get("https://pokeapi.co/api/v2/pokedex/");
      if (pokedex != null) {
        setPokedexValues(pokedex.data.results);
      } else {
        setPokedexValues([]);
      }
    };
    getPokedex();
  }, []);

  const selectPokedex = (event) => {
    onChangeSelect(event.target.value);
  };

  return (
    <form>
      <label>
        value
        <select value={props.pokedex} onChange={selectPokedex}>
          {pokedexValues.map((pokedex) => {
            return (
              <option key={pokedex.name} value={pokedex.name}>
                {pokedex.name}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

export default SelectPokedex;
