"use client";

import React from "react";
import Tasks from "src/component/Tasks.jsx";

const page = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-10">
      <header>Header</header>
      <aside>Aside</aside>
      <section className="flex justify-center">
        <Tasks />
      </section>
      <footer>Footer</footer>
    </section>
  );
};

export default page;
