import React from "react";

const Error = ({ mensaje, mensajeApi, mensajeBusqueda }) => {
  return (
    <div>
      <p className="my-3 p-4 text-center alert alert-primary">
        {mensaje} {mensajeBusqueda} {mensajeApi}
      </p>
    </div>
  );
};

export default Error;
