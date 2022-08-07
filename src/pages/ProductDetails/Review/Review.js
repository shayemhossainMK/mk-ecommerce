import React from "react";
import blueStar from "../../../img/blue-star.png";
import whiteStar from "../../../img/white-star.png";

const Review = () => {
  return (
    <div>
      <div className="mt-5">
        <p className="text-gray-400">User Ratings</p>

        <div className="flex gap-10">
          <div className="">
            <div className="grid grid-cols-4 gap-5 items-center mt-2">
              <div className="flex gap-2 items-center">
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
              </div>
              <p className="text-xs">Only 5 Stars</p>
              <div className="flex gap-3 items-center col-span-2">
                <progress
                  class="progress progress-primary w-56"
                  value="86"
                  max="100"
                ></progress>
                <p>125</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 items-center mt-2">
              <div className="flex gap-2 items-center">
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={whiteStar} alt="" />
              </div>
              <p className="text-xs">More than 4 Stars</p>
              <div className="flex gap-3 items-center col-span-2">
                <progress
                  class="progress progress-primary w-56"
                  value="25"
                  max="100"
                ></progress>
                <p>25</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5 items-center mt-2">
              <div className="flex gap-2 items-center">
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
              </div>
              <p className="text-xs">More than 3 Stars</p>
              <div className="flex gap-3 items-center col-span-2">
                <progress
                  class="progress progress-primary w-56"
                  value="03"
                  max="100"
                ></progress>
                <p>03</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5 items-center mt-2">
              <div className="flex gap-2 items-center">
                <img src={blueStar} alt="" />
                <img src={blueStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
              </div>
              <p className="text-xs">More than 2 Stars</p>
              <div className="flex gap-3 items-center col-span-2">
                <progress
                  class="progress progress-primary w-56"
                  value="05"
                  max="100"
                ></progress>
                <p>05</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 items-center mt-2">
              <div className="flex gap-2 items-center">
                <img src={blueStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
                <img src={whiteStar} alt="" />
              </div>
              <p className="text-xs">More than 1 Stars</p>
              <div className="flex gap-3 items-center col-span-2">
                <progress
                  class="progress progress-primary w-56"
                  value="12"
                  max="100"
                ></progress>
                <p>12</p>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto md:mt-10">
            <h2 className="text-2xl font-semibold">195 Reviews</h2>
            <h1 className="text-4xl font-bold">
              <span className="text-primary">4.5/</span>5.0
            </h1>
          </div>
        </div>

        <hr className="my-3" />
      </div>
    </div>
  );
};

export default Review;
