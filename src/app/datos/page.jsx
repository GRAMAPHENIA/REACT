"use client";

import React from "react";
import Data from "../../component/Data.jsx";
import UseEffect from "../../component/UseEffect.jsx";
import UseState from "../../component/UseState.jsx";

const page = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center px-10 max-w-[400px] sm:max-w-[720px]">
        <h1 className="my-10 text-4xl">EJEMPLOS</h1>
        <UseState/>
        <UseEffect />
        <br />
        <br />
        <Data />
      </div>
    </section>
  );
};

export default page;
