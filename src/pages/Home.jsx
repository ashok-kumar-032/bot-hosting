import React from "react";
import Hero from "../components/home/Hero";
import ModPAck from "../components/product/ModPAck";
import { modpack } from "../components/common/Helper";
import Hosting from "../components/common/Hosting";
import Testimonials from "../components/common/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <ModPAck modpack={modpack} />
      <Hosting />
      <Testimonials/>
    </>
  );
};

export default Home;
