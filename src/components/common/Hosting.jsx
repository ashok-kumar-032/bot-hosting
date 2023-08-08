import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import grap from "../../assets/img/webp/grap.webp";
import { Hostingcircle } from "./icons/Svgicons";
const Hosting = () => {
  return (
    <>
      <section className="py-sm-5 my-xl-4 py-3">
        <Container className="position-relative z-3">
          <div className="text-center">
            <p className="common_heading mb-lg-2 pb-xxl-1 mb-2">
              Game Hosting, <span className="clr_blue">simplified</span>
            </p>
            <p className="ff_inter fw-normal fs_2xl clr_white mb-md-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
              facilisi donec
              <span className="d-md-block">
                egestas egestas pellentesque magna.
              </span>
            </p>
            <Row
              className="justify-content-center"
            >
              <Col md={11}>
                <div className="bg_imggrap p-md-4 p-2">
                  <div className="d-flex align-items-center gap-sm-4 gap-2 mb-sm-3 mb-2 wwwcome">
                    <Hostingcircle />
                    <input
                      type="search"
                      placeholder="www.ComeUp.ai"
                      className="ff_dmsans fw-normal clr_gray fs_xl text-start rounded-2 py-lg-2 p-1 px-lg-3 bg-white w-100 border-0"
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
