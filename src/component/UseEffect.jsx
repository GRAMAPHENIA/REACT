import React, { useState, useEffect } from "react";
import userData from "../data/data.json";

function PageTitle() {
  const [title, setTitle] = useState("Ver 🪝"); // Estado para el título

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte
    document.title = title; // Establecer el título de la página

    // Función de limpieza para restaurar el título original al desmontar el componente
    return () => {
      document.title = "React App";
    };
  }, [title]); // El efecto se ejecutará cuando 'title' cambie

  const resetTitle = () => {
    setTitle("Algo particular");
  };

  return (
    <section className="perfil-noticia">
      
      <button
        className="boton-dato-interesante"
        title="revelando"
        onClick={() => {
          if (title === "Algo particular") {
            setTitle("Volver a ver🪝");
          } else {
            resetTitle();
          }
        }}
      >
        {title === "Algo particular"
          ? "Ocultar"
          : "Mostrar"}
      </button>
      <h1 className="dato-interesante" title="Dato de interes">
        {title}
      </h1>
    </section>
  );
}

export default PageTitle;
