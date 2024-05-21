import React from "react";

const SubCategoryMenu =
  () =>
  ({ category }) => {
    return (
      <div className="absolute left-1/4 bg-white rounded-lg shadow-xl p-4">
        {category.subcategories.map((subcategory, index) => (
          <div key={index} className="cursor-pointer hover:bg-slate-100">
            {subcategory}
          </div>
        ))}
      </div>
    );
  };

export default SubCategoryMenu;
