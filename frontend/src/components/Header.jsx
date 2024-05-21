import React from "react";
import HeaderFirst from "./HeaderFirst";
import HeaderSecond from "./HeaderSecond";

const Header = () => {
  return (
    <div className="w-full bg-orange-600 sticky top-0 pl-20 pr-20 pb-2 z-50">
      <HeaderFirst></HeaderFirst>
      <HeaderSecond></HeaderSecond>
    </div>
  );
};

export default Header;
