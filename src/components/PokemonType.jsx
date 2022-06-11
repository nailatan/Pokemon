import react from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import "../index.css";

const colour = {
  grass: ["#9bcc50", "white"],
  poison: ["#b97fc9", "white"],
  fire: ["#fd7d24", "white"],
  flying: ["#3dc7ef", "black"],
  water: ["#4592c4", "white"],
  bug: ["#729f3f", "white"],
  normal: ["#a4acaf", "white"],
  ground: ["#ab9842", "white"],
  fairy: ["#fdb9e9", "white"],
  electric: ["#eed535", "black"],
  steel: ["#9eb7b8", "white"],
  ice: ["#51c4e7", "black"],
  psychic: ["#f366b9", "white"],
  fighting: ["#d56723", "white"],
  roc: ["#a38c21", "white"],
  dragon: ["#f16e57", "white"],
  ghost: ["#7b62a3", "white"],
};

const getColour = (pokemonType) => {};

const PokemonType = ({ name }) => {
  let backgroundColour = "#aaacde";
  let colourLetter = "#edfed6";
  if (colour[name] != undefined) {
    backgroundColour = colour[name][0];
    colourLetter = colour[name][1];
  }
  return (
    <div
      style={{
        background: backgroundColour,
        color: colourLetter,
        width: "4rem",
        textAlign: "center",
        verticalAlign: "center",
        margin: "0.2rem",
        borderRadius: "20px",
      }}
    >
      {name}
    </div>
  );
};

export default PokemonType;
