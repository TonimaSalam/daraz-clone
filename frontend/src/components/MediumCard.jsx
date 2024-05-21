import React from "react";

const MediumCard = ({product}) => {
  return (
    <div className="w-48 hover:shadow-xl hover:border-4 bg-white">
      <img className="h-44 w-full" src={product.image}></img>
      <div className="p-2">
        <div>{product.productTitle}</div>
        <div>{product.discountPrice}tk</div>
        <div>{product.price}tk-{product.price-product.discountPrice}tk</div>
      </div>
    </div>
  );
};

export default MediumCard;
