import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="shadow-md">
      <div className="flex bg-primary md:py-2 md:px-28 gap-3 text-gray-100 text-xs">
        <p className="">Top Deals Here</p>
        <p className="border-l-2 pl-2">Moving Campaign</p>
        <p className="border-l-2 pl-2">Push Messeges</p>
        <Link to="/fashion" className="border-l-2 pl-2">
          Fashion
        </Link>
        <Link to="/productdetails" className="border-l-2 pl-2">
          Products Details
        </Link>
      </div>
    </div>
  );
};

export default SubNavbar;
