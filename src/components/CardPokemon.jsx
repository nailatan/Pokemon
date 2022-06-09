import react from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import PokemonType from "./PokemonType";
import "../../css/CardPokemon.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getPokemonData } from "../api";

const CardPokemon = ({ pokemonNum, pokemonName }) => {
  const [typePokemon, setTypePokemon] = useState([]);
  const loca = useLocation();
  const navigate = useNavigate();

  useEffect((prev) => {
    const getPokemon = async () => {
      try {
        const pokemonInfo = await getPokemonData(pokemonNum);
        if (pokemonInfo != null) {
          setTypePokemon(pokemonInfo);
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
        <img src={imageURL(pokemonNum)} />
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

const imageURL = (pokemonNum) => {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    pokemonNum +
    ".png"
  );
};
export default CardPokemon;
