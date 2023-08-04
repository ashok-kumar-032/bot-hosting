import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Feature from "./components/product/Feature";
import { feature } from "./components/common/Helper";
import ModPAck from "./components/product/ModPAck";
import Hosting from "./components/common/Hosting";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Feature feature={feature} />
      <ModPAck />
      <Hosting />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;
