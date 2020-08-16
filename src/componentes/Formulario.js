import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termmino, setTermino] = useState("");

  const [error, setError] = useState(false);

  const ObtenerValueInput = (e) => {
    setTermino(e.target.value);
  };

  const ValidarFormulario = (e) => {
    e.preventDefault();

    if (termmino.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    setBusqueda(termmino);

    // setTermino("");
  };

  return (
    <form>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            onChange={ObtenerValueInput}
            type="text"
            className="form-control from-control-lg"
            placeholder="Bucar una imagen, ejemploL futbol o paisajes"
            // value={termmino}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
            onClick={ValidarFormulario}
          />
        </div>
      </div>
      {error ? <Error mensaje="Debe ingresar una busqueda" /> : null}
    </form>
  );
};

export default Formulario;
