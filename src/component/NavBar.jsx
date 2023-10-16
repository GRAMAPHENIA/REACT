import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="my-10 text-3xl space-x-4 flex items-center justify-center">
       <Link
      href="/"
      className="underline decoration-amber-100 underline-offset-4"
    >
      Inicio
    </Link>
    <Link
      href="/datos"
      className="underline decoration-amber-100 underline-offset-4"
    >
      Teoria
    </Link>
    <Link
      href="/tasks"
      className="underline decoration-amber-100 underline-offset-4"
    >
      Aplicación
    </Link>
  </nav>
  )
}

export default NavBar