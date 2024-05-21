import React from "react";
import NavMenu from "./NavMenu";
import { categoriesObj } from "../utilities/objects";

const CategoryNav = () => {
  return (
    <div className="bg-white rounded-lg mr-4 pt-4 pb-2 h-full w-3/12 shadow-xl">
      {categoriesObj.map((category, i) => {
        return (
          <NavMenu
            key={i}
            src={category.icon}
            menuText={category.text}
          ></NavMenu>
        );
      })}
    </div>
  );
};

export default CategoryNav;
