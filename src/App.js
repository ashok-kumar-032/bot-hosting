import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Helper from "./components/common/Helper";
import Mynav from "./components/Mynav";
import Ddhf from "./components/home/Ddhf";
import Zxc from "./components/product/Zxc";

function App() {
  return (
    <div className="App">
      <Home />
      <Product />
      <Helper />
      <Mynav />
      <Ddhf />
      <Zxc />
    </div>
  );
}

export default App;
