import ScreenPokedex from "./screen/Pokedex/ScreenPokedex";
import ScreenPokemonDetail from "./screen/Pokemon/ScreenPokemonDetail";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route strict exact path="/" element={<ScreenPokedex />} />
        <Route path="/Pokemon/:pokemonId" element={<ScreenPokemonDetail />} />
        <Route
          path="/Pokemon2"
          render={(props) => <ScreenPokemonDetail {...props} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
