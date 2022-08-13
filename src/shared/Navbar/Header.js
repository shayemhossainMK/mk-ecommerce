import React from "react";

const Header = () => {
  return (
    <div className="md:py-1">
      <div className="flex items-center justify-center gap-3 font-semibold text-sm">
        <p>Download App</p>
        <p className="border-l-2 border-gray-300 pl-2">Customer Care</p>
        <p className="border-l-2 border-gray-300 pl-2">Affiliate Program</p>
        <p className="border-l-2 border-gray-300 pl-2">Language: en</p>
      </div>
    </div>
  );
};

export default Header;
