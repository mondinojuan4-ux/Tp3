function Pagination({ pagina, setPagina }) {
  return (
    <div className="paginacion">
      <button
        onClick={() => setPagina(pagina - 1)}
        disabled={pagina === 1}
      >
        Anterior
      </button>

      <span>Página {pagina}</span>

      <button onClick={() => setPagina(pagina + 1)}>
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;