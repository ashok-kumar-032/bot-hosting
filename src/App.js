import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}
export default App;
