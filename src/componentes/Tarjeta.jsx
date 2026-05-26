import { Link } from "react-router-dom";

function Tarjeta({ personaje }) {
  return (
    <div className="tarjeta">
      <img src={personaje.image} alt={personaje.name} />

      <h3>{personaje.name}</h3>

      <p>{personaje.status}</p>

      <Link to={`/personaje/${personaje.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default Tarjeta;