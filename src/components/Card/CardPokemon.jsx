import react from "react";
import "./CardPokemon.css";
import { useLocation, useNavigate } from "react-router-dom";
import { imageURL } from "../../utils/Helper";

const CardPokemon = ({ pokemonNum, pokemonName }) => {
  const loca = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Pokemon/${pokemonNum}`, { replace: false });
  };
  return (
    <li key={pokemonNum}>
      <div className="card" onClick={handleClick}>
        <img src={imageURL(pokemonNum)} />
        <div className="numPokedex">Num {pokemonNum} </div>
        <div className="title">{pokemonName}</div>
      </div>
    </li>
  );
};

export default CardPokemon;
