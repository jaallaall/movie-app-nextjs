"use client";

import { useState } from "react";
import Comments from "./Comments";
import Reviews from "./Reviews";
import { data } from "../Home/data";
import Card from "@/components/Card";
import Gallery from "./Gallery";

export default function SectionDiscover() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    { title: "دیدگاه ها", content: <Comments /> },
    { title: "بررسی ها", content: <Reviews /> },
    { title: "عکس ها", content: <Gallery /> },
  ];
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <h1>کشف کردن</h1>
        </div>
        <ul className="flex">
          {tabs.map((item, index) => (
            <li
              key={index}
              role="tab"
              className={`border-b-[3px] cursor-pointer py-3 me-4 ${
                index === activeTab ? "border-primary" : "border-transparent"
              }`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-base-content/5" />
      <div className="container">
        <div className="grid grid-cols-6 gap-x-4 md:gap-x-10 gap-y-4">
          <div
            role="tabpanel"
            className="pt-8 col-span-4 overflow-hidden min-h-72"
          >
            {tabs.map((item, index) => (
              <div
                key={index}
                className={`transition-[opacity,height,visible] duration-500 ease-in-out opacity-0 h-0 invisible ${
                  index === activeTab ? "!h-auto opacity-100 !visible" : ""
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
          <div className="col-span-2">
            <div className="mb-4 mt-6">
              <h2>ممکن است دوست داشته باشید.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.map((item) => {
                return <Card key={item.id} item={item} small />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
