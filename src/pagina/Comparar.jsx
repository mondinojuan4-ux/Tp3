import { useState } from "react";

import api from "../api/api";

function Comparar() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");

  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  const comparar = async () => {
    if (id1 <= 0 || id2 <= 0) {
      alert("Los IDs deben ser mayores a 0");
      return;
    }

    try {
      const res1 = await api.get(`/character/${id1}`);

      const res2 = await api.get(`/character/${id2}`);

      setP1(res1.data);

      setP2(res2.data);

    } catch (error) {
      alert("Personaje no encontrado");
    }
  };

  return (
    <div className="detalle">
      <h1>Comparar personajes</h1>

      <div style={{ marginBottom: "30px" }}>
        <input
          type="number"
          min="1"
          placeholder="ID personaje 1"
          onChange={(e) => setId1(e.target.value)}
        />

        <input
          type="number"
          min="1"
          placeholder="ID personaje 2"
          onChange={(e) => setId2(e.target.value)}
        />

        <button onClick={comparar}>
          Comparar
        </button>
      </div>

      <div className="comparador">
        {p1 && (
          <div className="info-personaje">
            <img
              src={p1.image}
              alt={p1.name}
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            />

            <h2>{p1.name}</h2>

            <p>
              <strong>ID:</strong> {p1.id}
            </p>

            <p>
              <strong>Estado:</strong> {p1.status}
            </p>

            <p>
              <strong>Especie:</strong> {p1.species}
            </p>

            <p>
              <strong>Género:</strong> {p1.gender}
            </p>

            <p>
              <strong>Origen:</strong> {p1.origin.name}
            </p>

            <p>
              <strong>Ubicación:</strong>{" "}
              {p1.location.name}
            </p>

            <p>
              <strong>Episodios:</strong>{" "}
              {p1.episode.length}
            </p>
          </div>
        )}

        {p2 && (
          <div className="info-personaje">
            <img
              src={p2.image}
              alt={p2.name}
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            />

            <h2>{p2.name}</h2>

            <p>
              <strong>ID:</strong> {p2.id}
            </p>

            <p>
              <strong>Estado:</strong> {p2.status}
            </p>

            <p>
              <strong>Especie:</strong> {p2.species}
            </p>

            <p>
              <strong>Género:</strong> {p2.gender}
            </p>

            <p>
              <strong>Origen:</strong> {p2.origin.name}
            </p>

            <p>
              <strong>Ubicación:</strong>{" "}
              {p2.location.name}
            </p>

            <p>
              <strong>Episodios:</strong>{" "}
              {p2.episode.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comparar;