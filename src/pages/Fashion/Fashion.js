import React from "react";
import AllFashion from "./AllFashion/AllFashion";
import FashionBanner from "./FashionBanner/FashionBanner";

const Fashion = () => {
  return (
    <div className="md:px-28">
      <FashionBanner></FashionBanner>
      <AllFashion></AllFashion>
    </div>
  );
};

export default Fashion;
