import ScreenPokedex from "./components/ScreenPokedex";
import ScreenPokemonDetail from "./components/ScreenPokemonDetail";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route strict exact path="/" element={<ScreenPokedex />} />
        <Route path="/Pokemon" element={<ScreenPokemonDetail />} />
        <Route
          path="/Pokemon2"
          render={(props) => <ScreenPokemonDetail {...props} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
