import React from "react";
import Hero from "../components/home/Hero";
import { pricing_data } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";
import Pricing from "../components/home/Pricing";
import ChooseUs from "../components/product/ChooseUs";
import { Choose } from "../components/common/Helper";
import Testimonials from "../components/common/Testimonials";
import Our from "../components/home/Our";
import Footer from "../components/product/Footer";

import { Clientdata } from "../components/common/Helper";
import Newsletter from "../components/home/Newsletter";
const Home = () => {
  return (
    <div className="page_back">
      <Hero />
      <Pricing Price={pricing_data} />
      <Hosting />
      <ChooseUs ChooseUs={Choose} />
      <Our />
      <div className="bg_footerimg">
        <Testimonials clients={Clientdata} />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
