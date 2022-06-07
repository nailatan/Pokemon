import react from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import PokemonType from "./PokemonType";
import "../../css/CardPokemon.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const CardPokemon = ({ entry_number, pokemon_species }) => {
  const [typePokemon, setTypePokemon] = useState([]);
  const pokemonIndex =
    pokemon_species.url.split("/")[pokemon_species.url.split("/").length - 2];

  const loca = useLocation();
  const navigate = useNavigate();

  useEffect((prev) => {
    const getPokemon = async () => {
      try {
        const pokemonInfo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
        );
        if (pokemonInfo != null) {
          setTypePokemon(pokemonInfo.data.types);
        } else {
          setTypePokemon([]);
        }
      } catch (e) {
        setTypePokemon([]);
      }
    };
    getPokemon();
  }, []);

  const handleClick = () => {
    navigate(`/Pokemon/${pokemonIndex}`, { replace: false });
  };
  return (
    <li key={entry_number}>
      <div className="card" onClick={handleClick}>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokemonIndex +
            ".png"
          }
        />
        <div className="numPokedex">Num {pokemonIndex} </div>
        <div className="title">{pokemon_species.name}</div>
        <div className="pokemonType">
          {typePokemon.map((typeAct) => {
            return (
              <PokemonType
                type={typeAct.type.name}
                key={typeAct.type.name}
              ></PokemonType>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default CardPokemon;
