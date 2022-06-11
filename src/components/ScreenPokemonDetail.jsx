import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonType from "./PokemonType";
import Ability from "./Ability";
import { imageURL } from "../Helper";

import { getMoreInformationPokemon } from "../api";
import "../../css/ScreenPokemonDetail.css";

const ScreenPokemonDetail = (props) => {
  const [infoPokemon, setInfoPokemon] = useState(null);
  let { pokemonId } = useParams();

  useEffect((prev) => {
    const getInfoPokemon = async () => {
      const info = await getMoreInformationPokemon(pokemonId);
      setInfoPokemon(info);
    };

    getInfoPokemon();
  }, []);

  if (infoPokemon != null) {
    return (
      <div className="pokemon">
        <div className="header">
          <img src="../../images/pokemon.svg"></img>
          <p>Num. {pokemonId}</p>
          <p>{infoPokemon.name}</p>
        </div>
        <div className="carrusel">
          <img src={imageURL(pokemonId)} />
        </div>
        <div className="descripcion">{infoPokemon.description}s</div>
        <div className="infoGeneral">
          <div>
            <p>Experiencia </p>
            <p>{infoPokemon.base_experience}</p>
          </div>
          <div>
            <p>Peso</p>
            <p>{infoPokemon.height}</p>
          </div>
          <div>
            <p>Altura</p>
            <p>{infoPokemon.weight}</p>
          </div>
        </div>
        <div className="informacion">
          <div className="tarjeta">
            <div>Habilidades</div>
            <div>
              {infoPokemon.abilities.map((abilityAct) => {
                return (
                  <Ability
                    name={abilityAct.ability.name}
                    key={abilityAct.ability.name}
                  ></Ability>
                );
              })}
            </div>
          </div>
          <div className="tarjeta">
            <div>Tipo</div>
            <div>
              {infoPokemon.types.map((typeAct) => {
                return (
                  <PokemonType
                    name={typeAct.type.name}
                    key={typeAct.type.name}
                  ></PokemonType>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};
export default ScreenPokemonDetail;
