import React from "react";
import bannerImg from "../../../img/bannerImg.png";

const HomeBanner = () => {
  return (
    <div className="md:px-28 md:py-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="shadow-md p-5 rounded-2xl">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime, aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere, quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </h1>
        </div>
        <div className="col-span-2">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
