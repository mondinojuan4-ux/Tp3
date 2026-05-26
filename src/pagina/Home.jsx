import { useEffect, useState } from "react";

import api from "../api/api";

import Tarjeta from "../componentes/Tarjeta";
import Loading from "../componentes/Loading";
import Error from "../componentes/Error";
import Pagination from "../componentes/Pagination";

function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [pagina, setPagina] = useState(1);

  const [estado, setEstado] = useState("");

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          `/character?page=${pagina}&status=${estado}`
        );

        setPersonajes(response.data.results);

        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    obtenerPersonajes();
  }, [pagina, estado]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <div>
      <h1>Personajes</h1>

      <select onChange={(e) => setEstado(e.target.value)}>
        <option value="">Todos</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
      </select>

      <div className="contenedor">
        {personajes.map((personaje) => (
          <Tarjeta
            key={personaje.id}
            personaje={personaje}
          />
        ))}
      </div>

      <Pagination
        pagina={pagina}
        setPagina={setPagina}
      />
    </div>
  );
}

export default Home;