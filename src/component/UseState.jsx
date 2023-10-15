import React from "react";
import { useState } from "react";

const Estados = () => {
  const [estados, setEstados] = useState(0);

  return (
    <>
     <p className="border-2">{estados}</p> 
      <button
        className="boton-dato-interesante"
        onClick={() => setEstados(estados + 1)}
        title="incrementar valor"
      >
        +1
      </button>
    </>
  );
};

const UseState = () => {
  return (
    <>
      <section className="perfil-noticia">
        <h1>UseState</h1>
        <Estados />
      </section>
    </>
  );
};

export default UseState;
