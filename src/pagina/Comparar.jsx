import { useState } from "react";

import api from "../api/api";

function Comparar() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");

  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  const comparar = async () => {
    const res1 = await api.get(`/character/${id1}`);
    const res2 = await api.get(`/character/${id2}`);

    setP1(res1.data);
    setP2(res2.data);
  };

  return (
    <div>
      <h1>Comparar personajes</h1>

      <input
        type="number"
        placeholder="ID 1"
        onChange={(e) => setId1(e.target.value)}
      />

      <input
        type="number"
        placeholder="ID 2"
        onChange={(e) => setId2(e.target.value)}
      />

      <button onClick={comparar}>
        Comparar
      </button>

      <div className="comparador">
        {p1 && (
          <div>
            <img src={p1.image} alt={p1.name} />
            <h3>{p1.name}</h3>
            <p>{p1.status}</p>
            <p>{p1.species}</p>
          </div>
        )}

        {p2 && (
          <div>
            <img src={p2.image} alt={p2.name} />
            <h3>{p2.name}</h3>
            <p>{p2.status}</p>
            <p>{p2.species}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comparar;