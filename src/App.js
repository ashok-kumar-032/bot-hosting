import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Feature from "./components/product/Feature";
import {feature} from "./components/common/Helper"
import ModPAck from "./components/product/ModPAck";
function App() {
  return (
    <>
    <Feature feature={feature}/>
    <ModPAck/>
    </>
  );
}

export default App;
