import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fashion from "./pages/Fashion/Fashion";
import Home from "./pages/Home/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
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
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
