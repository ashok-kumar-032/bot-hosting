import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Helper from "./components/common/Helper";
import Mynav from "./components/Mynav";

function App() {
  return (
    <div className="App">
      <Home />
      <Product />
      <Helper />
      <Mynav />
    </div>
  );
}

export default App;
