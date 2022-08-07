import React from "react";

const ProductDes = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-5">
          Fabrilife Mens Premium Sports T-shirt - League
        </h1>
        <p>Features:</p>
        <ul className="list-disc px-7">
          <li>Finest quality Polyester</li>
          <li>Regular fit, Crew Neck Mid-weight, 145gsm.</li>
          <li>Sharp and long-lasting sublimation print</li>
          <li>Preshrunk to minimize shrinkage</li>
        </ul>
      </div>
      <hr className="my-3" />
      <div>
        <p className="text-xl">
          Specifications of Fabrilife Mens Premium Sports T-shirt - League
        </p>
        <div className="flex gap-28 mt-5">
          <div>
            <h4 className="font-semibold text-gray-400">Brand</h4>
            <p>Fabrilife</p>
            <p>Main Material Cotton</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-400">SKU</h4>
            <p>249456238_BD-1195797434</p>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <h5 className="font-semibold text-gray-400">What’s in the box </h5>
        <p>1X Fabrilife Mens Premium Sports</p>
        <p>T-shirt - League</p>
      </div>
    </div>
  );
};

export default ProductDes;
