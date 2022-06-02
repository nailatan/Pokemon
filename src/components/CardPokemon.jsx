import react from "react";
import "../index.css";

const CardPokemon = ({ entry_number, pokemon_species }) => {
  const pokemonIndex =
    pokemon_species.url.split("/")[pokemon_species.url.split("/").length - 2];
  return (
    <li key={entry_number}>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          pokemonIndex +
          ".png"
        }
      />
      <div className="numPokedex">Num {pokemonIndex} </div>
      <div className="title">{pokemon_species.name}</div>
    </li>
  );
};

export default CardPokemon;
