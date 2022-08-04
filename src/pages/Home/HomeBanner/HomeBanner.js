import React from "react";
import bannerImg from "../../../img/bannerImg.png";
import downArrow from "../../../img/downarrow.png";
const HomeBanner = () => {
  return (
    <div className="md:px-28 md:py-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="shadow-md p-5 rounded-2xl">
          <div>
            <div className="flex items-center bg-slate-200 rounded-full p-2 w-40 font-semibold">
              <img className="h-3 w-4" src={downArrow} alt="" />
              <p className="ml-2 text-neutral">All Catagories</p>
            </div>
            <div className="flex items-center gap-2 my-3 shadow-md p-2 rounded-full">
              <input
                type="radio"
                name="radio-3"
                class="radio radio-primary"
                checked
              />
              <p>Mega Campaign</p>
            </div>
            <div className="flex items-center gap-2 my-4 shadow-md p-2 rounded-full">
              <input
                type="radio"
                name="radio-3"
                class="radio radio-primary"
                checked
              />
              <p>Mega Campaign</p>
            </div>
            <div className="flex items-center gap-2 my-4 shadow-md p-2 rounded-full">
              <input
                type="radio"
                name="radio-3"
                class="radio radio-primary"
                checked
              />
              <p>Mega Campaign</p>
            </div>
            <div className="flex items-center gap-2 mt-4 shadow-md p-2 rounded-full">
              <input
                type="radio"
                name="radio-3"
                class="radio radio-primary"
                checked
              />
              <p>Mega Campaign</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
