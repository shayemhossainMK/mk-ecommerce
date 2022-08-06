import React from "react";
import photo1 from "../../../img/fashion-banner/photo1.png";
import photo2 from "../../../img/fashion-banner/photo2.png";
import photo3 from "../../../img/fashion-banner/photo3.png";
import photo4 from "../../../img/fashion-banner/photo4.png";
import photo5 from "../../../img/fashion-banner/photo5.png";

const FashionBanner = () => {
  return (
    <div className="my-10 bg-secondary p-5 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div>
          <img src={photo1} alt="" />
        </div>
        <div>
          <img src={photo2} alt="" />
        </div>
        <div>
          <img src={photo3} alt="" />
        </div>
        <div>
          <img src={photo4} alt="" />
        </div>
        <div>
          <img src={photo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
