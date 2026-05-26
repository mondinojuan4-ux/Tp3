import { Link } from "react-router-dom";

function Episodios({ episodio }) {
  return (
    <div className="episodio">
      <h3>{episodio.name}</h3>

      <p>{episodio.episode}</p>

      <Link to={`/episodio/${episodio.id}`}>
        Ver episodio
      </Link>
    </div>
  );
}

export default Episodios;