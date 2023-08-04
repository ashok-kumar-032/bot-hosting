import React from "react";
import Hero from "../components/home/Hero";
import ModPAck from "../components/product/ModPAck";
import { modpack, pricing_data } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";
import Pricing from "../components/home/Pricing";


const Home = () => {
  return (
    <div className="page_back">
      <Hero />
      <Pricing Price={pricing_data} />
      <ModPAck modpack={modpack} />
      <Hosting />
    </>
  );
};

export default Home;
