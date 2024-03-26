"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import { ChevronLeft, ChevronRight } from "@/components/Icons";
import dynamic from "next/dynamic";
import { data } from "./data";

const Filter = dynamic(() => import("./Filter"));

export default function Catalog() {
  return (
    <>
      <section className="md:min-h-52 min-h-36 bg-[url('/static/section/section.jpg')] bg-center">
        <div className="container m-auto">
          <div className="mb-4 prose">
            <h1>کاتالوگ</h1>
          </div>
          <Breadcrumbs />
        </div>
      </section>
      <section className="pt-0">
        <div className="border-b border-base-content/5 py-4 relative z-20">
          <div className="container">
            <Filter />
          </div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-6 gap-3 md:pt-8 pt-3">
            {data.map((item) => {
              return <Card key={item.id} item={item} small />;
            })}
          </div>
          {data.length > 17 && (
            <div className="md:pt-12 pt-3 flex justify-center">
              <div className="join gap-4">
                <button className="btn h-11 w-11">
                  <ChevronRight />
                </button>
                <input
                  className="btn h-11 w-11"
                  type="radio"
                  name="options"
                  aria-label="1"
                  checked
                />
                <input
                  className="btn h-11 w-11"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="btn h-11 w-11"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="btn h-11 w-11"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
                <button className="btn h-11 w-11">
                  <ChevronLeft />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
