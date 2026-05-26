import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/api";

import Loading from "../componentes/Loading";
import Error from "../componentes/Error";

function DetallesEpisodios() {
  const { id } = useParams();

  const [episodio, setEpisodio] = useState(null);

  const [personajes, setPersonajes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerEpisodio = async () => {
      try {
        const response = await api.get(`/episode/${id}`);

        setEpisodio(response.data);

        const personajesData = await Promise.all(
          response.data.characters.map((p) =>
            api.get(p)
          )
        );

        setPersonajes(
          personajesData.map((p) => p.data)
        );

      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    obtenerEpisodio();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <Error />;

 return (
  <div className="detalle">
    <h1>{episodio.name}</h1>

    <p>
      <strong>Código:</strong> {episodio.episode}
    </p>

    <p>
      <strong>Fecha:</strong> {episodio.air_date}
    </p>

    <h2>Personajes</h2>

    <div className="contenedor">
      {personajes.map((p) => (
        <div className="tarjeta" key={p.id}>
          <img src={p.image} alt={p.name} />

          <h3>{p.name}</h3>

          <p>{p.status}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default DetallesEpisodios;