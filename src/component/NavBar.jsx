import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar flex items-center justify-center">
      <Link href="/">Inicio</Link>
      <Link href="/datos">Teoria</Link>
      <Link href="/tareas">Aplicación</Link>
    </nav>
  );
};

export default NavBar;
