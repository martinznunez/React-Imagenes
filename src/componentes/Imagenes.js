import React from "react";

const Imagenes = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text"> {likes} Me Gusta </p>
          <p className="card-text"> {views} Visitas </p>
        </div>
        <div className="card-footer">
          <a href={largeImageURL} target="new">
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagenes;
