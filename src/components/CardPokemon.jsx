import react from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import PokemonType from "./PokemonType";
import "../../css/CardPokemon.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const CardPokemon = ({ pokemonNum, pokemonName }) => {
  const [typePokemon, setTypePokemon] = useState([]);
  const loca = useLocation();
  const navigate = useNavigate();

  useEffect((prev) => {
    const getPokemon = async () => {
      try {
        const pokemonInfo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`
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
    navigate(`/Pokemon/${pokemonNum}`, { replace: false });
  };
  return (
    <li key={pokemonNum}>
      <div className="card" onClick={handleClick}>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokemonNum +
            ".png"
          }
        />
        <div className="numPokedex">Num {pokemonNum} </div>
        <div className="title">{pokemonName}</div>
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
