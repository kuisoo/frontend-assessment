"use client";
import React, { useState } from "react";
import data from "../../data.json";
import FloatingButton from "../@ExerciseOne/components/FloatingButton";

const ExerciseTwo = () => {
  const [openSection, setOpenSection] = useState(1);
  const [openTab, setOpenTab] = useState(1);

  const handleSectionOnClick = (section: number) => {
    setOpenTab(section);
    if (openSection == section) {
      setOpenSection(undefined);
    } else setOpenSection(section);
  };
  return (
    <div className="relative grid justify-items-center sm:overflow-x-hidden">
      <FloatingButton />
      <div className="w-screen lg:w-9/12 lg:p-8 lg:grid lg:grid-cols-4">
        {data.map((section, index) => {
          const isOpen = openSection == index + 1;
          const isTabOpen = openTab == index + 1;
          return (
            <div key={index}>
              <button
                className={`h-max px-6 py-2 font-bold flex justify-between items-center w-full text-4xl lg:text-2xl border border-t-0 bg-slate-300 lg:border lg:rounded-t-xl ${
                  isTabOpen
                    ? "border-b-slate-500 border-slate-500 lg:bg-slate-500"
                    : "border-b-slate-500 hover:bg-slate-400"
                } ${isOpen && "bg-slate-500"}`}
                onClick={() => handleSectionOnClick(index + 1)}
              >
                <div className="">{section?.title}</div>
                <div
                  className={`lg:hidden ${isOpen ? "-rotate-90" : "rotate-90"}`}
                >
                  {">"}
                </div>
              </button>
              {openSection == index + 1 && (
                <div className="h-max border-2 border-slate-500 py-4 px-8 bg-slate-200 flex justify-center items-center lg:hidden">
                  <div
                    className="w-2/3"
                    dangerouslySetInnerHTML={{ __html: section?.content }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
        <div className="hidden border h-max w-full col-span-4 border-t-0 lg:flex justify-center items-center py-8 border-slate-500 bg-slate-200 rounded-b-xl">
          <div
            className="w-2/3 p-4"
            dangerouslySetInnerHTML={{ __html: data[openTab - 1]?.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseTwo;
