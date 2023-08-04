import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../common/Header";
import herocomputer from "../../assets/img/svg/hero-img.svg";
const Hero = () => {
  return (
    <>
      <section className="bg_heroimg ">
        <Header />
        <Container className="pt-lg-5 mt-3 pb-5">
          <Row className=" align-items-center justify-content-center">
            <Col lg={6}>
              <div className="text-center text-lg-start align-items-lg-start d-flex flex-column align-items-center position-relative z-3">
                <p className="ff_inter fs_md fw-medium text-uppercase clr_white mb-2 box_host ls_4 ps-4 ms-2">
                  Hosting
                </p>
                <h2 className="ff_rubik fw-bold fs_9xl clr_white py-lg-4 mb-0">
                  Discord Bot Hosting
                </h2>
                <p className="ff_rubik fw-normal fs_4xl clr_white pb-lg-3">
                  Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in
                  8 Locations Globally.
                </p>
                <button className=" border-0 bg-transparent d-flex align-items-center gap-2 ff_rubik fw-medium fs_3xl clr_white crical_host position-relative">
                  View Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <path d="M1 12L6 6.5L1 1" stroke="white" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </Col>
            <Col xl={5} lg={5} sm={6} className="pt-4">
              <div>
                <img src={herocomputer} alt="herocomputer" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
