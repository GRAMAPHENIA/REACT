"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex flex-col justify-center items-center max-w-[400px] h-[640px] sm:max-w-[720px]">
        <h1 className="text-6xl text-center">React</h1>
        <h1 className="pb-10 text-4xl text-center">
          <span>[</span>hooks<span>]</span>
        </h1>
      </section>
    </main>
  );
}
