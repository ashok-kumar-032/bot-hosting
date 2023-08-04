import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Feature from "./components/product/Feature";
import {feature} from "./components/common/Helper"
import {modpack} from "./components/common/Helper"
import ModPAck from "./components/product/ModPAck";
import ChooseUs from "./components/product/ChooseUs";
import {Choose} from "./components/common/Helper";
function App() {
  return (
    <>
    <Feature feature={feature}/>
    <ModPAck modpack={modpack}/>
    <ChooseUs ChooseUs={Choose}/>
    </>
  );
}

export default App;
