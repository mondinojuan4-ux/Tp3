import { Routes, Route } from "react-router-dom";

import Barra from "./componentes/Barra";

import Home from "./pagina/Home";
import DetallesPersonajes from "./pagina/DetallesPersonajes";
import DetallesEpisodios from "./pagina/DetallesEpisodios";
import Comparar from "./pagina/Comparar";

import "./App.css";

function App() {
  return (
    <>
      <Barra />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/personaje/:id"
          element={<DetallesPersonajes />}
        />

        <Route
          path="/episodio/:id"
          element={<DetallesEpisodios />}
        />

        <Route path="/comparar" element={<Comparar />} />
      </Routes>
    </>
  );
}

export default App;