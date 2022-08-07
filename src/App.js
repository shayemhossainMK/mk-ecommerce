import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fashion from "./pages/Fashion/Fashion";
import Home from "./pages/Home/Home/Home";
import ProductDes from "./pages/ProductDetails/ProductDes/ProductDes";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Review from "./pages/ProductDetails/Review/Review";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/fashion" element={<Fashion></Fashion>}></Route>
        <Route
          path="/productdetails"
          element={<ProductDetails></ProductDetails>}
        >
          <Route index element={<ProductDes></ProductDes>}></Route>
          <Route
            path="/productdetails/productdes"
            element={<ProductDes></ProductDes>}
          ></Route>
          <Route
            path="/productdetails/review"
            element={<Review></Review>}
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
