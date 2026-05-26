import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/api";

import Loading from "../componentes/Loading";
import Error from "../componentes/Error";
import Episodios from "../componentes/Episodios";

function DetallesPersonajes() {
  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        const response = await api.get(`/character/${id}`);

        setPersonaje(response.data);

        const episodiosData = await Promise.all(
          response.data.episode.map((ep) =>
            api.get(ep)
          )
        );

        setEpisodios(
          episodiosData.map((ep) => ep.data)
        );

      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    obtenerDetalle();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
  <div className="detalle">
    <h1>{personaje.name}</h1>

    <img
      src={personaje.image}
      alt={personaje.name}
    />

    <p>
      <strong>Estado:</strong> {personaje.status}
    </p>

    <p>
      <strong>Especie:</strong> {personaje.species}
    </p>

    <p>
      <strong>Género:</strong> {personaje.gender}
    </p>

    <h2>Episodios</h2>

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

export default DetallesPersonajes;