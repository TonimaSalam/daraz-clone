import React from "react";
import MediumCard from "./MediumCard";
import {saleProducts} from "../utilities/objects";

const SaleProducts = () => {
  const renderProducts = () => {
    const Products = [];

    for (let i = 0; i != 6; i++) {
      Products.push(renderCard(i,saleProducts[i]));
      console.log(saleProducts[i]);
    }
    return Products;
  };
  const renderCard = (i, product) => {
    return <MediumCard key={i} product = {product}></MediumCard>;
  };
  return <div className="w-full pb-2 gap-2 flex">{renderProducts()}</div>;
};

export default SaleProducts;
