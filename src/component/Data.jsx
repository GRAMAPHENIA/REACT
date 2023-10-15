import React from "react";
import userData from "../data/data.json";

const Data = () => {
  return (
    <>
      <h1 className="text-center text-6xl mt-10">json</h1>
      <h2 className="text-center text-4xl pb-10">
        <span>[</span> Array <span>]</span>
      </h2>
      <ul>
        {userData.map((data, id) => (
          <li className="mb-10" key={id}>
            <strong>Nombre:</strong> {data.nombre}
            <br />
            <strong>País:</strong> {data.pais}
            <br />
            <strong>Email:</strong> {data.email}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Data;
