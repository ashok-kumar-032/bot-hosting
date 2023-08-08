import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap/esm";
import arrow from "../../assets/img/svg/right_arrow.svg";
const Feature = ({ feature }) => {
  return (
    <>
      <section className="">
        <Container>
          <h2
            className="common_heading mw_750 mx-auto text-center pt-sm-5 pt-xl-0"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            YOU SHOULDN'T HAVE TO PAY EXTRA FORs
            <span className="clr_blue"> BASIC FEATURES</span>
          </h2>
          <p
            className="common_para mw_550 mx-auto pb-md-4 mb-2 pt-sm-4 pt-2"

          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="pt-1">
            {feature.map((featurecard) => {
              return (
                <Col
                  key={featurecard.id}
                  xl={4}
                  md={6}
                  className="px-3"
                  
                >
                  <div className="feature_card d-flex align-items-center p_20 border_r_10 bg_offblack mt-3 justify-content-between">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={featurecard.f_img}
                          className="w_48 h_48"
                          width={43}
                          height={43}
                          alt="out_features"
                        />
                      </div>
                      <h4 className="ps-3 fs_xl ff_inter clr_white mb-0 fw-semibold">
                        {featurecard.f_heading}
                      </h4>
                    </div>
                    <div>
                      <img src={arrow} className="w-100" alt="right_arrow" />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
