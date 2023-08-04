import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import checkmark from "../../assets/img/png/checkmark.png";
import rightarrow from "../../assets/img/png/started_r_arrow.png";
const Pricing = ({ Price }) => {
  return (
    <>
      <section>
        <Container>
          <h2 className="common_heading text-center">
            Awesome <span className="clr_blue">Pricing Plan</span>
          </h2>
          <p className="common_para mw_550 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row>
            {Price.map((price, plan) => {
              return (
                <Col key={plan}>
                  <div className="p-3 bg_darkblack rounded-3">
                    <div className="p-3">
                      <div>
                        <img className="w_40" src={price.topimg} alt="dimand" />
                      </div>
                      <h3 className="clr_white fw-semibold ff_rubik fs_6xl mb-0">
                        {price.main_heading}
                      </h3>
                      <p className="clr_white200 fs_lg fw-normal ff_inter lh_143 mb-0">
                        Lorem ipsum dolor sit amet, consect etur adipiscing
                        elit.
                      </p>
                      <h5 className="clr_white300 fs_lg fw-bold ff_inter lh_143 mb-0">
                        Whats Included :
                      </h5>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0">
                          All basic CRM features
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0">
                          Up to 10,000 contacts
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p
                          className={`clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0 ${price.normalpara}`}
                        >
                          Normal support
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p
                          className={`clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0 ${price.mobilepara}`}
                        >
                          Mobile app
                        </p>
                      </div>

                      <h4 className="ff_inter fw-bold clr_offblue mb-0">
                        $99.00
                        <span className="clr_white300 fs_lg fw-normel ff_inter lh_143 mb-0">
                          / Month
                        </span>
                      </h4>
                      <button className="started_btn ff_inter fw-normal clr_white fw-bold py-3 w-100 ">
                        Get Started
                        <img
                          src={rightarrow}
                          className="ps-1"
                          alt="right arrow"
                        />
                      </button>
                      <p className="ff_dmsans fw-normal clr_white300 fs_lg mb-0 text-center">
                        No credit card required
                      </p>
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

export default Pricing;
