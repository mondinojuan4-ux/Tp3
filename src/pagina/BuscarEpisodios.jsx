import { useState } from "react";

import api from "../api/api";

import Episodios from "../componentes/Episodios";

import Loading from "../componentes/Loading";
import Error from "../componentes/Error";

function BuscarEpisodios() {
  const [busqueda, setBusqueda] = useState("");

  const [episodios, setEpisodios] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const buscar = async () => {
    if (busqueda.trim() === "") return;

    try {
      setLoading(true);

      let response;
      try {response = await api.get(`/episode/?name=${busqueda}`);} 
      catch {response = await api.get(`/episode/?episode=${busqueda}`);}

      setEpisodios(response.data.results);

      setError(false);

    } catch (err) {
      setError(true);

      setEpisodios([]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detalle">
      <h1>Buscar Episodios</h1>

      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Nombre del episodio"
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

        <button onClick={buscar}>
          Buscar
        </button>
      </div>

      {loading && <Loading />}

      {error && ( <Error /> )}

      <div className="contenedor">
        {episodios.map((ep) => (
          <Episodios
            key={ep.id}
            episodio={ep}
          />
        ))}
      </div>
    </div>
  );
}

export default BuscarEpisodios;