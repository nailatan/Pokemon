import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonType  from "../../components/Type/PokemonType";
import Ability from "../../components/Ability/Ability";
import { imageURL } from "../../utils/Helper";
import { getMoreInformationPokemon } from "../../utils/api";
import "./ScreenPokemonDetail.css";
import Loading from "../../components/Auxiliar/Loading";
import { IPokemon } from "../../types/Pokemon";
import { IType } from "../../types/Type";
import { IAbility } from "../../types/Ability";

type ScreenPokemonDetailParams = {
  pokemonId : string
}
const ScreenPokemonDetail = (props :string[]) :JSX.Element => {
  const [infoPokemon, setInfoPokemon] = useState<IPokemon |null>(null);
  let {pokemonId} = useParams<ScreenPokemonDetailParams>();


  useEffect(() : void  => {
    const getInfoPokemon = async ()  => {
      const info: IPokemon |null = await getMoreInformationPokemon(pokemonId || "");
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
          <img src={imageURL(pokemonId || "")} />
        </div>

        <div className="species">
          <div>{infoPokemon.category}</div>
          <div>{infoPokemon.description}</div>
        </div>

        <div className="infoGeneral">
          <div>
            <div>Experiencia </div>
            <div>Peso</div>
            <div>Altura</div>
          </div>
          <div>
            <div>
              <p>{infoPokemon.base_experience}</p>
            </div>
            <div>
              <p>{infoPokemon.height}</p>
            </div>
            <div>
              <p>{infoPokemon.weight}</p>
            </div>
          </div>
        </div>
        <div className="informacion">
          <div className="tarjeta">
            <div>Habilidades</div>
            <div>
              {infoPokemon.abilities.map((abilityAct : IAbility) => {
                return (
                  <Ability
                    name={abilityAct.name}
                    key={abilityAct.name}
                  ></Ability>
                );
              })}
            </div>
          </div>
          <div className="tarjeta">
            <div>Tipo</div>
            <div>
              {infoPokemon.types.map((typeAct : IType) => {
                return (
                  <PokemonType
                    name={typeAct.name}
                    key={typeAct.name}
                  ></PokemonType>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};
export default ScreenPokemonDetail;
