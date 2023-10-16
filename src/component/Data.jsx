import React from "react";
import userData from "../data/data.json";

const Data = () => {
  return (
    <>
      <h1 className="text-center text-6xl mt-10">ADICIONAL</h1>
      <h2 className="text-center text-4xl pb-10">
        <span>[</span> detalles <span>]</span>
      </h2>
      <ul className="">
        {userData.map((data, id) => (
          <li className="mb-10" key={id}>
            <strong>Nombre:</strong> {data.nombre}
            <br />
            <br />
            <strong>Descripción:</strong> {data.descripcion}
            <br />
            <br />
            <strong>Aplicación:</strong> {data.aplicacion}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Data;
