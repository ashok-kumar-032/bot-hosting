import React from "react";
import Hero from "../components/home/Hero";
import ModPAck from "../components/product/ModPAck";
import { modpack } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";

const Home = () => {
  return (
    <div className="page_back">
      <Hero />
      <ModPAck modpack={modpack} />
      <Hosting />
    </div>
  );
};

export default Home;
