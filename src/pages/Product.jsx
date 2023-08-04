import React from "react";
import Producthero from "../components/product/Producthero";
import ChooseUs from "../components/product/ChooseUs";
import { Choose } from "../components/common/Helper";
import Feature from "../components/product/Feature";
import { feature } from "../components/common/Helper";
const Product = () => {
  return (
    <div>
      <Producthero />
      <Feature feature={feature} />
      <ChooseUs ChooseUs={Choose} />
    </div>
  );
};

export default Product;
