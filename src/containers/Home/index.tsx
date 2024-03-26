"use client";

import dynamic from "next/dynamic";
import SectionExpected from "./SectionExpected";

const SectionHome = dynamic(() => import("./SectionHome"));
const SectionNewItems = dynamic(() => import("./SectionNewItems"));
const SectionPrice = dynamic(() => import("./SectionPrice"));

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh_-_70px)] bg-cover bg-no-repeat bg-center relative">
        <div className="container">
          <SectionHome />
        </div>
      </section>
      <section>
        <div className="container">
          <SectionNewItems />
        </div>
      </section>
      <section className="border-t border-base-content/5">
        <div className="container">
          <SectionExpected />
        </div>
      </section>
      <section className="border-t border-base-content/5">
        <div className="container">
          <SectionPrice />
        </div>
      </section>
    </>
  );
}
