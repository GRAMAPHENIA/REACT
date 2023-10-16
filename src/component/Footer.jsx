import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 mb-10 text-center">
      Sitio creado con{" "}
      <a href="/" className="span-footer" title="ir a pagina de Next">
        Next
      </a>{" "}
      &{" "}
      <a href="/" className="span-footer" title="ir a pagina de React">
        React
      </a>
      .
    </footer>
  );
};

export default Footer;
