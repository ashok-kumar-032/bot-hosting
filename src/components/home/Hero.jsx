import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../common/Header";
import herocomputer from "../../assets/img/svg/hero-img.svg";
import { Scrollicon, Viewproject } from "../common/icons/Svgicons";
const Hero = () => {
  return (
    <>
      <section className="bg_heroimg d-flex flex-column position-relative overflow-hidden mw_1920 mx-auto">
        <Header />
        <Container className="pt-lg-5 mt-3 pb-5 flex-grow-1">
          <Row className="align-items-center justify-content-xl-between justify-content-center h-75">
            <Col xl={5}>
              <div className="text-center text-xl-start align-items-xl-start d-flex flex-column align-items-center position-relative z-3">
                <p className="ff_inter fs_md fw-medium text-uppercase clr_white mb-2 box_host ls_4 ps-4 ms-2 position-relative">
                  Hosting
                </p>
                <h2 className="ff_rubik fw-bold fs_9xl clr_white py-lg-4 mb-0">
                  Discord <span className="d-block">Bot Hosting</span>
                </h2>
                <p className="ff_rubik fw-normal fs_4xl clr_white pb-lg-3">
                  Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in
                  8 Locations Globally.
                </p>
                <div className=" position-relative">
                  <button className="ps-4 border-0 bg-transparent d-flex align-items-center gap-2 ff_rubik fw-medium fs_3xl clr_white position-relative z-3">
                    View Projects
                    <Viewproject />
                  </button>
                  <div className="crical_host"></div>
                </div>
              </div>
              <div className="position-relative top_left d-none d-xl-block">
                <button className="bg-transparent border-0">
                  <Scrollicon />
                  <p
                    className="fw-medium fs_3xl ff_inter clr_white mt-3 ps-4 letters_2px transforr_90 {
"
                  >
                    Scroll
                  </p>
                </button>
              </div>
            </Col>
            <Col
              xl={5}
              lg={8}
              sm={11}
              className="pt-5 pb-5 mb-sm-5 mb-xl-0 mb-xl-0"
            >
              <div className="hero_img_overflow">
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
