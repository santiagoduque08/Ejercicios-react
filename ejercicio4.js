import React from 'react';

const GaleriaImagenes = () => {
  const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    // Agrega más imágenes aquí
  ];

  return (
    <div className="galeria">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className="imagen-galeria"
        />
      ))}
    </div>
  );
};

export default GaleriaImagenes;
