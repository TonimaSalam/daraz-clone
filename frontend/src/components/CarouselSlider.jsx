import React, { useState } from "react";
import { adds } from "../utilities/objects";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const CarouselSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const previousSlide = () => {
    if (currentImg === 0) setCurrentImg(adds.length - 1);
    else setCurrentImg(currentImg - 1);
  };

  const nextSlide = () => {
    if (currentImg === adds.length - 1) setCurrentImg(0);
    else setCurrentImg(currentImg + 1);
  };

  return (
    <div className="relative overflow-hidden h-full w-full rounded-lg">
      <div
        className="flex transition ease-out"
        // style={{
        //   transform: `translateX(-${currentImg * 100}%)`,
        // }}
      >
        {" "}
        <img src={adds[currentImg]} className="h-full w-full" />;
        {/* {adds.map((add) => {
          return <img src={add} className="h-full w-full" />;
        })} */}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex p-4">
        <button className="bg-white rounded-xl" onClick={previousSlide}>
          <img src={leftArrow} className="h-4 w-4"></img>
        </button>
        <button className="bg-white rounded-xl" onClick={nextSlide}>
          <img src={rightArrow} className="h-4 w-4"></img>
        </button>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full gap-2 pb-4">
        {adds.map((add, i) => {
          return (
            <div
              key={i}
              className={`h-4 w-4 rounded-xl ${
                i == currentImg ? "bg-white" : "bg-slate-500"
              }`}
              onClick={() => setCurrentImg(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselSlider;
