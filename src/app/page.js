"use client";

import Estado from "../component/UseState.jsx";
import Efecto from "../component/UseEffect.jsx";
import Data from "../component/Data";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section className="max-w-[400px]">
        <h1 className="text-6xl text-center">React</h1>

        <h1 className="pb-10 text-4xl text-center">
          <span>[</span>hooks<span>]</span>
        </h1>
        <Link href="/tasks" className=" py-2 px-4 mb-4">
          IR A TAREAS
        </Link>
        <br />
        <br />
        <Estado />
        <Efecto />
        <Data />
        <footer className="py-20 text-center">
          Sitio creado con <span className="span-footer">Next</span> &{" "}
          <span className="span-footer">React</span>.{" "}
        </footer>
      </section>
    </main>
  );
}
