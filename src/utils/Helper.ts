export const imageURL = (pokemonNum : string): string => {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    pokemonNum +
    ".png"
  );
};
