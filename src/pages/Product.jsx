import React from "react";
import Producthero from "../components/product/Producthero";
import Feature from "../components/product/Feature";
import ModPAck from "../components/product/ModPAck";
import { modpack } from "../components/common/Helper";
import { feature } from "../components/common/Helper";
const Product = () => {
  return (
    <div className="page_back">
      <Producthero />
      <Feature feature={feature} />
      <ModPAck modpack={modpack} />
    </div>
  );
};

export default Product;
