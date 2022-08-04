import React from "react";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  return (
    <div className="md:px-28 md:mt-5 md:mb-10">
      <h1 className="font-bold">Picked for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md: mt-5">
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
        <ProductsContainer></ProductsContainer>
        <ProductsContainer></ProductsContainer>
        <ProductsContainer></ProductsContainer>
      </div>
      <div className="mt-10">
        <h5 className="text-center shadow-lg w-48 text-neutral font-semibold mx-auto p-2 rounded-full">
          Load More
        </h5>
      </div>
    </div>
  );
};

export default Products;
