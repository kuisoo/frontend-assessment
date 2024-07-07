import React from "react";
import "/style/exerciseOne.css";
import Card from "./components/Card";
import { CardItems } from "../../utility/ExerciseOne";

const ExerciseOne = () => {
  return (
    <div className="page">
      {/* Banner */}
      <div className="banner">
        <div className="banner__container">
          <div className="w-full text-center leading-[5]">
            <span className="text-7xl font-bold">Hello Developer!</span>
          </div>
          <div className="w-full text-center leading-loose">
            <span className="text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
      </div>
      {/* Items */}
      <div className="card-container">
        {CardItems.map((item, index) => {
          return <Card key={index} imgSrc={item.src} description={item.text} />;
        })}
      </div>
    </div>
  );
};

export default ExerciseOne;
