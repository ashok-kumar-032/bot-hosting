import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap/esm";
const Feature = ({ feature }) => {
  return (
    <>
      <section className="bg-success py-5">
        <Container>
          <h2 className="common_heading mw_750 mx-auto text-center">
            YOU SHOULDN'T HAVE TO PAY EXTRA FORs
            <span className="clr_blue">BASIC FEATURES</span>
          </h2>
          <p className="common_para mw_647 mx-auto pb-md-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="pt-1">
            {feature.map((feature, f_card) => {
              return (
                <Col key={f_card} xl={4} md={6} className="px-2">
                  <div className="d-flex align-items-center p_20 border_r_10 bg_offblack mt-3 justify-content-between">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={feature.f_img}
                          className="w_48 h_48"
                          alt="out_features"
                        />
                      </div>
                      <h4 className="ps-3 fs_xl ff_inter clr_white mb-0 fw-semibold">
                        {feature.f_heading}
                      </h4>
                    </div>
                    <div>
                      <img
                        src={feature.arrow}
                        className="w-100"
                        alt="right_arrow"
                      />
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