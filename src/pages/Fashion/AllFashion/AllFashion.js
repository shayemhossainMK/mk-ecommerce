import React from "react";
import ProductsContainer from "../../Products/ProductsContainer";
import lineImg from "../../../img/lineImg.png";
import blueStar from "../../../img/blue-star.png";
import whiteStar from "../../../img/white-star.png";

const AllFashion = () => {
  return (
    <div className="mb-10">
      <div className="mb-5">
        <h1 className="text-xl font-semibold">All Fashion Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
        <div className="shadow-xl rounded-2xl col-span-3 h-[800px] p-5">
          <h4 className="text-lg">Filter</h4>
          <h4 className="text-lg mt-5">Price</h4>
          <div className="mt-2">
            <input
              type="range"
              min="0"
              max="100"
              class="range range-primary"
              step="25"
            />
            <div class="w-full flex justify-between text-xs px-2 -mt-7">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
          <div className="flex mt-5 items-center gap-3">
            <div>
              <h3>Min.</h3>
              <input
                type="text"
                class="input w-full max-w-xs input-sm input-bordered bg-gray-50"
              />
            </div>
            <div className="-mb-5">
              <img src={lineImg} alt="" />
            </div>
            <div>
              <h3>Max.</h3>
              <input
                type="text"
                class="input w-full max-w-xs input-sm input-bordered bg-gray-50"
              />
            </div>
          </div>
          <div>
            <h3 className="mt-4 font-semibold">Brands</h3>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Fabrilife</p>
                </div>
                <div className="flex gap-3 items-center my-5">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Esctacy</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Easy</p>
                </div>
                <div className="flex gap-3 items-center my-5">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Catseye</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Zara</p>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Fabrilife</p>
                </div>
                <div className="flex gap-3 items-center my-5">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Esctacy</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Easy</p>
                </div>
                <div className="flex gap-3 items-center my-5">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Catseye</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div class="form-control">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                  </div>
                  <p>Zara</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-4 font-semibold">Location</h3>
            <div className="mt-2">
              <div className="flex gap-3 items-center">
                <div class="form-control">
                  <input type="checkbox" class="checkbox checkbox-sm" />
                </div>
                <p>Bangladesh</p>
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <div class="form-control">
                  <input type="checkbox" class="checkbox checkbox-sm" />
                </div>
                <p>Others</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-4 font-semibold">Rating</h3>
            <div className="mt-2">
              <div className=" flex gap-10 items-center">
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                </div>
                <p className="text-sm">Only 5 Stars</p>
              </div>
              <div className=" flex gap-10 items-center my-2">
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p className="text-sm">More than 4 Stars</p>
              </div>
              <div className=" flex gap-10 items-center">
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p className="text-sm">More than 3 Stars</p>
              </div>
              <div className=" flex gap-10 items-center my-2">
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={blueStar} alt="" />
                  <img src={blueStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p className="text-sm">More than 2 Stars</p>
              </div>
              <div className=" flex gap-10 items-center my-2">
                <div className="flex gap-2 items-center">
                  <img className="w-4 h-4" src={blueStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p className="text-sm">More than 1 Stars</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="flex mb-7 gap-7 items-center">
            <p>Sort by:</p>
            <h3 className="bg-accent py-1 px-3 text-white  rounded-full shadow-lg text-sm">
              Most Popular
            </h3>
            <h3 className="shadow-lg py-1 px-3 rounded-full text-sm">
              Highest Rated
            </h3>
            <h3 className="shadow-lg py-1 px-3 rounded-full text-sm">
              Best Match
            </h3>
            <h3 className="shadow-lg py-1 px-3 rounded-full text-sm">
              Price: Low to High
            </h3>
            <h3 className="shadow-lg py-1 px-3 rounded-full text-sm">
              Price: High to Low
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
            <ProductsContainer></ProductsContainer>
          </div>
          <p className=" shadow-xl rounded-full w-48 text-center mx-auto mt-16 py-2 text-primary font-bold">
            Load More
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllFashion;
