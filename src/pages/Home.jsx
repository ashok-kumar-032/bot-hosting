import React from "react";
import Hero from "../components/home/Hero";
import { pricing_data } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";
import Pricing from "../components/home/Pricing";
import ChooseUs from "../components/product/ChooseUs";
import { Choose } from "../components/common/Helper";
import Testimonials from "../components/common/Testimonials";
import Our from "../components/home/Our";

const Home = () => {
  return (
    <div className="page_back">
      <Hero />
      <Pricing Price={pricing_data} />
      <Hosting />
      <ChooseUs ChooseUs={Choose} />
      <Our />
      <Testimonials />
    </div>
  );
};

export default Home;
