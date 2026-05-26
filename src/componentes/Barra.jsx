import { Link } from "react-router-dom";

function Barra() {
  return (
    <nav className="barra">
      <h2>Rick & Morty</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/comparar">Comparar personajes</Link>
      </div>
    </nav>
  );
}

export default Barra;