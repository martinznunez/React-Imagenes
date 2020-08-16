import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import ListadoImagenes from "./componentes/ListadoImagenes";
import Error from "./componentes/Error";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const [guardarImagenes, setGuardarImagenes] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [errorFetch, setErrorFetch] = useState(false);

  const [errorBusqueda, setErrorBusqueda] = useState(false);

  useEffect(() => {
    const ConsultarApi = async () => {
      if (busqueda === "") {
        return;
      }

      const imagenesPorPagina = 30;
      const Key = "apikey";
      const url = `https://pixabay.com/api/?key=${Key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        if (resultado.hits.length === 0) {
          setErrorBusqueda(true);
          setGuardarImagenes([]);

          return;
        }

        setErrorBusqueda(false);

        setGuardarImagenes(resultado.hits);

        const calcularPaginas = Math.ceil(
          resultado.totalHits / imagenesPorPagina
        );

        setTotalPaginas(calcularPaginas);
        const jumbotron = document.getElementById("jumbotron");

        jumbotron.scrollIntoView({ behavior: "smooth" });
        return;
      } catch (error) {
        setErrorFetch(true);
      }
    };

    ConsultarApi();
  }, [busqueda, paginaActual]);

  const PaginaAnterior = () => {
    const anterior = paginaActual - 1;

    if (anterior === 0) {
      return;
    }

    setPaginaActual(anterior);
  };

  const PaginaSiguiente = () => {
    const siguiente = paginaActual + 1;

    if (siguiente > totalPaginas) {
      return;
    }
    setPaginaActual(siguiente);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron" id="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          {errorFetch ? (
            <Error mensajeApi="Uh algo fallo,vuelva a intentarlo" />
          ) : null}
          <div className="jumbotron">
            <Formulario setBusqueda={setBusqueda} />
          </div>
        </div>
        {errorBusqueda ? <Error mensajeBusqueda="no hay resultados" /> : null}
        <ListadoImagenes guardarImagenes={guardarImagenes} />
      </div>

      {errorBusqueda ? null : (
        <div id="btn" className="lead text-center">
          {paginaActual === 1 ? null : (
            <button className="bbtn btn-info mr-1 " onClick={PaginaAnterior}>
              &laquo; Anterior
            </button>
          )}
          {paginaActual === totalPaginas ? null : (
            <button className="bbtn btn-info " onClick={PaginaSiguiente}>
              Siguiente &raquo;
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default App;
