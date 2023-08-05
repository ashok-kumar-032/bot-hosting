import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import los from "../../assets/img/png/los.png";
import los_2 from "../../assets/img/webp/los_2.webp";
import los_3 from "../../assets/img/webp/los_3.webp";
import los_4 from "../../assets/img/webp/los_4.webp";
import our_back_1 from "../../assets/img/webp/our_back_1.webp";

const Our = () => {
  return (
    <section className="py-5">
      <div className="back_effect our_card rounded-4">
        <div className="pt-3">
          <Container>
            <div className="our_box p-3">
              <div className="text-white text-center pt-lg-4 pb-lg-5 pb-2 ">
                <p className="common_heading">
                  Our <span className="clr_blue">Locations</span>
                </p>
                <p className="fw-normal fs_2xl ff_inter clr_white pt-3">
                  Sparked offers hosting all around the world
                </p>
              </div>
              <Row className="pb-3">
                <Col lg={4}>
                  <div className="d-flex align-items-center">
                    <span>
                      <img src={los} alt="los" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0 text-nowrap">
                        Los Angeles, California
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        240ms
                      </p>
                    </span>
                  </div>
                </Col>
                <Col lg={4} className="pt-3">
                  <div className=" d-flex align-items-center">
                    <span>
                      <img src={los} alt="los" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0">
                        Miami, Florida
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        180ms
                      </p>
                    </span>
                  </div>
                </Col>
                <Col lg={4} className="pt-3">
                  <div className=" d-flex align-items-center">
                    <span>
                      <img src={los} alt="los" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0">
                        Dallas, Texas
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        240ms
                      </p>
                    </span>
                  </div>
                </Col>
                <Col lg={4} className="pt-lg-5 pt-3">
                  <div className=" d-flex align-items-center">
                    <span>
                      <img src={los_2} alt="los_2" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0">
                        Falkenstein, Germany
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        240ms
                      </p>
                    </span>
                  </div>
                </Col>
                <Col lg={4} className="pt-lg-5 pt-3">
                  <div className="d-flex align-items-center">
                    <span>
                      <img src={los_3} alt="los_3" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0">
                        London, UK
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        240ms
                      </p>
                    </span>
                  </div>
                </Col>
                <Col lg={4} className="pt-lg-5 pt-3">
                  <div className=" d-flex align-items-center">
                    <span>
                      <img src={los_4} alt="los_4" />
                    </span>
                    <span className="ps-4">
                      <p className="fw-bold ff_inter fs_2xl clr_white mb-0">
                        Sydney, Australia
                      </p>
                      <p className="fw-medium opacity_075 fs_lg clr_white mb-0">
                        240ms
                      </p>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <div>
        <img className="w-100" src={our_back_1} alt="our_back_1" />
      </div>
    </section>
  );
};

export default Our;
