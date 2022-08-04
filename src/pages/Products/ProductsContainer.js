import React from "react";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productImg from "../../img/productImg.png";
import love from "../../img/love.png";

const ProductsContainer = () => {
  return (
    <div className="shadow-md p-2 rounded-2xl bg-gray-200 hover:scale-105 duration-300">
      <div className="relative">
        <div className="flex items-center gap-2 absolute top-3 right-3">
          <img src={love} alt="" />
          <FontAwesomeIcon
            className="text-white text-lg"
            icon={faCartPlus}
          ></FontAwesomeIcon>
        </div>
        <img src={productImg} alt="" />
        <p className="text-sm font-semibold mt-1">
          Premium cotton teal panjabi with embroidered collar
        </p>
        <div className="flex gap-4 items-center mt-1">
          <h3 className="text-neutral font-semibold">BDT 5,698</h3>
          <h3 className="line-through text-sm">BDT 9,000</h3>
        </div>
        <p className="text-xs mt-1">25% cashback on bKash Payment</p>
        <div className="text-xs flex items-center gap-3 mt-1 mb-2">
          <div className="text-neutral flex items-center gap-1">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <p>(56)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
