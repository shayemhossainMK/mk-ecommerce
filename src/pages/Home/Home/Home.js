import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Products from "../../Products/Products";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
