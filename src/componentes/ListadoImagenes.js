import React from "react";
import Imagenes from "./Imagenes";

const ListadoImagenes = ({ guardarImagenes }) => {
  return (
    <div className="col12 p-5 row">
      {guardarImagenes.map((imagen) => (
        <Imagenes key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
