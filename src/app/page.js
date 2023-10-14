"use client";

import Efecto from "../component/UseEffect.jsx";

import userData from "../data/data.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl">Use State</h1>

      <section>
        <div>
          <h1 className="text-2xl text-center">Lista de Usuarios</h1>

          <ul>
            {userData.map((data, id) => (
              <li className="p-10 m-10 " key={id}>
                <Efecto />
                <strong>Nombre:</strong> {data.nombre}
                <br />
                <strong>País:</strong> {data.pais}
                <br />
                <strong>Teléfono:</strong> {data.telefono}
                <br />
                <strong>Email:</strong> {data.email}
                <br />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
