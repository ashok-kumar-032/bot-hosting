import React from "react";
import Hero from "../components/home/Hero";
import ModPAck from "../components/product/ModPAck";
import { modpack } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";

const Home = () => {
  return (
    <>
      <Hero />
      <ModPAck modpack={modpack} />
      <Hosting />
    </>
  );
};

export default Home;
