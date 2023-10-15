import React, { useState, useEffect } from "react";
import userData from "../data/data.json";

function PageTitle() {
  const [title, setTitle] = useState("🪝Hook: useEffect ");

  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "React App";
    };
  }, [title]);

  const resetTitle = () => {
    setTitle("🪝Visible");
  };

  return (
    <>
      <section className="perfil-noticia">
        <h3>useEffect</h3>
        <button
          className="boton-dato-interesante"
          title="revelando"
          onClick={() => {
            if (title === "🪝Visible") {
              setTitle("🪝Oculto");
            } else {
              resetTitle();
            }
          }}
        >
          {title === "🪝Visible" ? "Ocultar" : "Mostrar"}
        </button>
      </section>{" "}
      <h1 className="dato-interesante" title="Dato de interes">
        {title}
      </h1>
    </>
  );
}

export default PageTitle;
