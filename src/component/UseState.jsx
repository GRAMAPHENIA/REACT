import React from "react";
import { useState } from "react";

const Estados = () => {
  const [estados, setEstados] = useState(0);

  return (
    <button
      className="boton-dato-interesante"
      onClick={() => setEstados(estados + 1)}
    >
      {estados} estados
    </button>
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
