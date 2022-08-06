import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Products from "../../Products/Products";
import BestDeals from "../BestDeals/BestDeals";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <BestDeals></BestDeals>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
