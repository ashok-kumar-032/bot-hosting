import React from "react";
import Producthero from "../components/product/Producthero";
import Feature from "../components/product/Feature";
import ModPAck from "../components/product/ModPAck";
import { modpack } from "../components/common/Helper";
import { featuredata } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";
import Footer from "../components/product/Footer";
import Testimonials from "../components/common/Testimonials";
import { Clientdata } from "../components/common/Helper";
import Our from "../components/home/Our";
import Newsletter from "../components/home/Newsletter";
const Product = () => {
  return (
    <div className="page_back">
      <Producthero />
      <Feature feature={featuredata} />
      <ModPAck modpack={modpack} />
      <Hosting />
      <Our img_none="d-none" />
      <Testimonials clients={Clientdata} />
      <div className="bg_footerimg padding_top pb-5">
        <Newsletter product_dnone="d-md-none"/>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
