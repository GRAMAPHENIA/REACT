"use client";

import Estado from "../component/UseState.jsx";
import Efecto from "../component/UseEffect.jsx";
import Data from "../component/Data"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1 className="text-6xl">Intereses</h1>

      <section>
        <div className="">
          <h1 className="pb-10 text-4xl text-center">
            <span>[</span>Hooks<span>]</span>
          </h1>
          <Estado />
          <Efecto />
          <Data/>
        </div>
      </section>
    </main>
  );
}
