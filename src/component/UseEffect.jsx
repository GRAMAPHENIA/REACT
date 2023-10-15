import React, { useState, useEffect } from "react";
import userData from "../data/data.json";

function PageTitle() {
  const [title, setTitle] = useState("🔒");

  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Titulo";
    };
  }, [title]);

  const resetTitle = () => {
    setTitle("🔒");
  };

  return (
    <>
      <section className="perfil-noticia">
        <h3>useEffect</h3>
        <h1 className="dato-interesante" title="Dato de interes">
          {title}
        </h1>
        <button
          className="boton-dato-interesante"
          title="abrir-cerrar"
          onClick={() => {
            if (title === "🔒") {
              setTitle("🔓");
            } else {
              resetTitle();
            }
          }}
        >
          {title === "🔒" ? "Abrir" : "Cerrar"}
        </button>
      </section>{" "}
    </>
  );
}

export default PageTitle;
