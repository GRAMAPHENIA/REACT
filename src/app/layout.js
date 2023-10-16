import "./globals.css";
import { Inter } from "next/font/google";

import NavBar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React | Next",
  description: "Creado por gramaphenia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
