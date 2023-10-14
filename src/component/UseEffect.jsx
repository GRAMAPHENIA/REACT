import React, { useState, useEffect } from 'react';

function PageTitle() {
  const [title, setTitle] = useState('Algo particular de Este libro'); // Estado para el título

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte
    document.title = title; // Establecer el título de la página

    // Función de limpieza para restaurar el título original al desmontar el componente
    return () => {
      document.title = 'React App';
    };
  }, [title]); // El efecto se ejecutará cuando 'title' cambie

  return (
    <div>
      <h1 className="dato-interesante">{title}</h1>
      <button className="boton-dato-interesante" onClick={() => setTitle('Noticia interesante hacerca de la obra')}>Descubre</button>
    </div>
  );
}

export default PageTitle;
