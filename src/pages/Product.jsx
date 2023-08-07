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
const Product = () => {
  return (
    <div className="page_back">
      <Producthero />
      <Feature feature={featuredata} />
      <ModPAck modpack={modpack} />
      <Hosting />
      <Our img_none="d-none" />
      <div className="bg_footerimg">
        <div className="about_top">
          <Testimonials clients={Clientdata}/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Product;
