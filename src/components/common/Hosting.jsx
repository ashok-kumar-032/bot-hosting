import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import grap from "../../assets/img/webp/grap.webp";
const Hosting = () => {
  return (
    <>
      <section className="py-lg-5 py-lg-4 my-1 my-sm-0">
        <Container className="position-relative z-3">
          <div className="text-center">
            <p
              className="common_heading mb-lg-3 mb-2"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              Game Hosting, <span className="clr_blue">simplified</span>
            </p>
            <p
              className="ff_inter fw-normal fs_2xl clr_white"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
              facilisi donec
              <span className="d-md-block">
                egestas egestas pellentesque magna.
              </span>
            </p>
            <Row
              className="justify-content-center pt-2"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Col md={11}>
                <div className="bg_imggrap p-sm-4 p-2 rounded-2 border-1 border border-black">
                  <div className="d-flex align-items-center gap-sm-4 gap-2 mb-sm-3 mb-2 wwwcome">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="16"
                      viewBox="0 0 63 16"
                      fill="none"
                    >
                      <circle cx="8.07641" cy="8.466" r="7.4685" fill="white" />
                      <circle cx="31.5488" cy="8.466" r="7.4685" fill="white" />
                      <circle cx="55.0212" cy="8.466" r="7.4685" fill="white" />
                    </svg>
                    <input
                      type="search"
                      placeholder="www.ComeUp.ai"
                      className="ff_dmsans fw-normal clr_gray fs_xl text-start rounded-2 py-2 px-3 bg-white w-100 border-0"
                    />
                  </div>
                  <img src={grap} alt="grap" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hosting;
