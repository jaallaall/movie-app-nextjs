"use client";

import dynamic from "next/dynamic";

const SectionDetails = dynamic(() => import("./SectionDetails"));
const SectionDiscover = dynamic(() => import("./SectionDiscover"));

export default function Details() {
  return (
    <>
      <section className="min-h-[calc(100vh_-_70px)] bg-[url('/static/section/details.jpg')] bg-cover bg-no-repeat bg-center relative">
        <div className="container">
          <SectionDetails />
        </div>
      </section>
      <section>
        <SectionDiscover />
      </section>
    </>
  );
}
