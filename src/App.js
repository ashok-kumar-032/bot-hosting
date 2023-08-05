import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Loading from "./components/home/Loading";
import BackToTop from "./components/home/BackToTop";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BackToTop />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;
