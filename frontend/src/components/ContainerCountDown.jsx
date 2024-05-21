import React from "react";

const ContainerCountDown = () => {
  return (
    <div className="h-1/6 p-4 w-full shadow-md flex relative gap-16 content-center">
      <div className="h-full text-orange-600 content-center">On Sale Now</div>
      <div className="flex gap-4">
        <div className="content-center">Ending In</div>
        <div className="bg-orange-500 text-white content-center text-center h-8 w-10">
          12
        </div>
        <div className="bg-orange-500 text-white content-center text-center h-8 w-10">
          00
        </div>
        <div className="bg-orange-500 text-white content-center text-center h-8 w-10">
          00
        </div>
      </div>
      <div className=" h-8 p-2 content-center text-center border-[1px] border-orange-500 text-orange-500 absolute right-4">
        SHOP MORE
      </div>
    </div>
  );
};

export default ContainerCountDown;
