import React from "react";
import Slider from "react-slick";
import ProductsContainer from "../../Products/ProductsContainer";
import { Settings } from "./Settings";

const BestDeals = () => {
  return (
    <div className="md:px-28 ">
      <h2 className="text-xl font-semibold my-3">Deal of The Day</h2>
      <div className="bg-secondary rounded-2xl p-10">
        <div className="flex justify-between">
          <div className="flex gap-16 items-center">
            <h4 className="text-2xl ">Expires in</h4>
            <div className="flex gap-5 items-center">
              <div className="text-center">
                <p className="text-center bg-neutral rounded-md w-12 h-12 text-white flex items-center justify-center">
                  99
                </p>
                <p className="mt-1 text-sm">Month</p>
              </div>
              <div className="text-center">
                <p className="text-center bg-neutral rounded-md w-12 h-12 text-white flex items-center justify-center">
                  99
                </p>
                <p className="mt-1 text-sm">Day</p>
              </div>
              <div className="text-center">
                <p className="text-center bg-neutral rounded-md w-12 h-12 text-white flex items-center justify-center">
                  99
                </p>
                <p className="mt-1 text-sm">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-center bg-neutral rounded-md w-12 h-12 text-white flex items-center justify-center">
                  99
                </p>
                <p className="mt-1 text-sm">Minute</p>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-sm bg-white text-neutral px-8 hover:bg-white outline-none border-none">
              More
            </button>
          </div>
        </div>
        <hr className="mb-10 mt-5" />
        <div>
          <Slider {...Settings}>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
            <div className="px-2">
              <ProductsContainer></ProductsContainer>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
