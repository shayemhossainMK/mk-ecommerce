import React from "react";
import photo1 from "../../img/product-details/photo1.png";
import photo2 from "../../img/product-details/photo2.png";
import photo3 from "../../img/product-details/photo3.png";
import photo4 from "../../img/product-details/photo4.png";
import photo5 from "../../img/product-details/photo5.png";
import "./ProductDetails.css";
import blueStar from "../../img/blue-star.png";
import whiteStar from "../../img/white-star.png";
import nagetiveIcon from "../../img/negativeIcon.png";
import positiveIcon from "../../img/positiveIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  return (
    <div className="md:px-28  md:my-10">
      <div className="shadow-xl rounded-2xl p-5 grid grid-cols-1  md:grid-cols-3 gap-9">
        <div>
          <img
            className="w-96 h-96 rounded-xl custom-shadow"
            src={photo1}
            alt=""
          />
          <div className="flex gap-7 mt-8 pb-5">
            <img
              className="custom-shadow rounded-xl w-16 h-16"
              src={photo2}
              alt=""
            />
            <img
              className="custom-shadow rounded-xl w-16 h-16"
              src={photo3}
              alt=""
            />
            <img
              className="custom-shadow rounded-xl w-16 h-16"
              src={photo4}
              alt=""
            />
            <img
              className="custom-shadow rounded-xl w-16 h-16"
              src={photo5}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl">
            Fabrilife Mens Premium Sports T-shirt - League
          </h2>
          <hr className="my-2" />
          <div className=" flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <img src={blueStar} alt="" />
              <img src={blueStar} alt="" />
              <img src={blueStar} alt="" />
              <img src={blueStar} alt="" />
              <img src={whiteStar} alt="" />
            </div>
            <p className="text-xs">201 User Ratings | 30 Questions Answered</p>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mt-2">BDT 500</h2>
          <div className="flex gap-4 text-sm">
            <p className="line-through text-gray-300">BDT 600</p>
            <p className="text-primary">17% off</p>
          </div>
          <div className="flex gap-4 mt-3 shadow-md rounded-2xl p-2 bg-primary">
            <div className="">
              <h1 className="w-24 h-20 bg-base-100 rounded-xl px-3 py-2 text-center text-2xl font-extrabold text-primary">
                40% <br />
                <span className="text-sm font-normal text-black">Discount</span>
              </h1>
            </div>
            <div>
              <h4 className="text-xl text-gray-200 font-white font-semibold">
                On Nagad <br /> Payment
              </h4>
              <p className="text-xs mt-2 text-gray-300 hover:underline hover:cursor-pointer">
                Click to Apply Now
              </p>
            </div>
          </div>

          <div className="flex gap-14 mt-3">
            <p className="text-sm">Quantity</p>
            <div className="flex gap-2 items-center">
              <img className="w-5 h-5" src={nagetiveIcon} alt="" />
              <p>01</p>
              <img className="w-5 h-5" src={positiveIcon} alt="" />
            </div>
          </div>
          <div className="mt-1">
            <h3 className="text-sm">Choose Color</h3>
            <div className="mt-1 flex gap-5">
              <div className="w-10 h-10 shadow-md rounded-md"></div>
              <div className="w-10 h-10 shadow-md rounded-md"></div>
              <div className="w-10 h-10 shadow-md rounded-md"></div>
              <div className="w-10 h-10 shadow-md rounded-md"></div>
            </div>
          </div>
          <div className="mt-1">
            <h3 className="text-sm">Choose Size</h3>
            <div className="mt-1 flex gap-5">
              <div className="w-10 h-10 shadow-md rounded-md flex justify-center items-center">
                <p className="text-primary font-semibold">M</p>
              </div>
              <div className="w-10 h-10 shadow-md rounded-md flex justify-center items-center">
                <p className="font-semibold">L</p>
              </div>
              <div className="w-10 h-10 shadow-md rounded-md flex justify-center items-center">
                <p className="font-semibold">XL</p>
              </div>
              <div className="w-10 h-10 shadow-md rounded-md flex justify-center items-center">
                <p className="font-semibold">XXL</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex gap-1 items-center bg-secondary rounded-full py-1 px-1.5 text-neutral text-xs">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              <small>Add to Cart</small>
            </div>
            <div className="flex gap-2 items-center bg-primary rounded-full py-1 px-1.5 text-white text-xs">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              <small>Buy Now</small>
            </div>
            <div className="flex gap-2 items-center bg-primary rounded-full py-1 px-1.5 text-white text-xs">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <small>Add to Favourite</small>
            </div>
            <div className="flex gap-2 items-center bg-primary rounded-full py-1 px-2 text-white text-xs">
              <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
              <small>Share</small>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
