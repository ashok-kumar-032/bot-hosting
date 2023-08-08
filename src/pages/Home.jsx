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
      <div className="overflow-hidden">
        <Pricing Price={pricing_data} />
        <div className="d-none d-sm-block"><Hosting /></div>
      </div>
       <div className="d-flex flex-column-reverse flex-sm-column">
       <div className="d-sm-none"> <Hosting /></div>
      <Our />
      <ChooseUs ChooseUs={Choose} />
       </div>
      <div className="bg_footerimg">
        <div className="about_top pt-2">
          <Testimonials clients={Clientdata} />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
