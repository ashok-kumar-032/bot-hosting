import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../common/Header";
import herocomputer from "../../assets/img/svg/hero-img.svg";
const Hero = () => {
  return (
    <>
      <section className="bg_heroimg d-flex flex-column">
        <Header />
        <Container className="pt-lg-5 mt-3 pb-5 flex-grow-1">
          <Row className="align-items-center justify-content-center h-75">
            <Col xl={6}>
              <div className="text-center text-xl-start align-items-xl-start d-flex flex-column align-items-center position-relative z-3">
                <p className="ff_inter fs_md fw-medium text-uppercase clr_white mb-2 box_host ls_4 ps-4 ms-2 position-relative">
                  Hosting
                </p>
                <h2 className="ff_rubik fw-bold fs_9xl clr_white py-lg-4 mb-0">
                  Discord Bot Hosting
                </h2>
                <p className="ff_rubik fw-normal fs_4xl clr_white pb-lg-3">
                  Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in
                  8 Locations Globally.
                </p>
                <div className=" position-relative">
                  <button className="ps-4 border-0 bg-transparent d-flex align-items-center gap-2 ff_rubik fw-medium fs_3xl clr_white position-relative z-3">
                    View Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                    >
                      <path
                        d="M1 12L6 6.5L1 1"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                  <div className="crical_host"></div>
                </div>
              </div>
              <div className="position-relative top_left d-none d-xl-block">
                <button className="bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="39.5"
                      stroke="white"
                      stroke-opacity="0.45"
                    />
                    <path
                      d="M39.6464 50.3536C39.8417 50.5488 40.1583 50.5488 40.3536 50.3536L43.5355 47.1716C43.7308 46.9763 43.7308 46.6597 43.5355 46.4645C43.3403 46.2692 43.0237 46.2692 42.8284 46.4645L40 49.2929L37.1716 46.4645C36.9763 46.2692 36.6597 46.2692 36.4645 46.4645C36.2692 46.6597 36.2692 46.9763 36.4645 47.1716L39.6464 50.3536ZM39.5 30V50H40.5V30H39.5Z"
                      fill="white"
                    />
                  </svg>
                  <p
                    className="fw-medium fs_3xl ff_inter clr_white mt-3 ps-4 letters_2px transforr_90 {
"
                  >
                    Scroll
                  </p>
                </button>
              </div>
            </Col>
            <Col xl={5} lg={8} sm={11} className="pt-5 pb-5 mb-sm-5 mb-xl-0 mb-xl-0">
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
