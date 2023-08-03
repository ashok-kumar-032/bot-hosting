import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Feature from "./components/product/Feature";
import { feature } from "./components/common/Helper";
import ModPAck from "./components/product/ModPAck";
import Game from "./components/common/Game";
function App() {
  return (
    <>
      <Feature feature={feature} />
      <ModPAck />
      <Game />
    </>
  );
}

export default App;
