import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import checkmark from "../../assets/img/png/checkmark.png";
import rightarrow from "../../assets/img/png/started_r_arrow.png";
import box_group from "../../assets/img/webp/modpack_rightimg.webp";
import btn_arrow from "../../assets/img/png/started_r_arrow.png";
import pricing_right from "../../assets/img/png/pricing_right.png";
const Pricing = ({ Price }) => {
  return (
    <>
      <section className="py-sm-5 py-sm-3 my-sm-0 my-xl-5 position-relative">
        <div className="pricing_right position-absolute d-none d-xl-block">
          <img src={pricing_right} alt="pricing_right" />
        </div>
        <Container>
          <h2
            className="common_heading text-center"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            Awesome <span className="clr_blue">Pricing Plan</span>
          </h2>
<<<<<<< HEAD
          <p
            className="common_para mw_550 mx-auto mb-4 pt-lg-4 pt-3 pb-lg-2 pb-3"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row
            className="justify-content-center position-relative"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="3000"
          >
=======
          <p className="common_para mw_550 mx-auto mb-sm-4 pt-lg-4 pt-3 pb-lg-2 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="justify-content-center position-relative pt-lg-4 mt-lg-3">
>>>>>>> 8ef5fa7cafbdb553894da7d730fb2eddc9c44404
            <div>
              <img
                src={box_group}
                className="position-absolute pricing_top_box d-none d-md-inline-block"
                alt="box_group"
              />
            </div>
            <div>
              <img
                src={box_group}
                className="position-absolute pricing_bottom_box d-none d-md-inline-block"
                alt="box_group"
              />
            </div>
            {Price.map((price, plan) => {
              return (
                <Col
                  key={plan}
                  lg={4}
                  md={6}
                  sm={11}
                  className="mt_10 px_5px position-relative z-3"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="3000"
                >
                  <div className="p-3 bg_darkblack rounded-3 pricing_card">
                    <div className="p-sm-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            className="w_40"
                            src={price.topimg}
                            alt="dimand"
                          />
                        </div>
                        <div>
                          <button className="ff_inter fw-bold pricing_popular_btn clr_blue100 fs_xsm">
                            POPULAR PLAN
                          </button>
                        </div>
                      </div>
                      <h3 className="clr_white fw-semibold ff_rubik fs_6xl mb-0 pt-5">
                        {price.main_heading}
                      </h3>
                      <p className="clr_white200 fs_lg fw-normal ff_inter lh_143 mb-0 pt-3">
                        Lorem ipsum dolor sit amet, consect etur adipiscing
                        elit.
                      </p>
                      <h5 className="clr_white300 fs_lg fw-bold ff_inter lh_143 mb-0 pt-3 mt-3">
                        Whats Included :
                      </h5>
                      <div className="d-flex align-items-center pt_14">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="ps-2 clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0">
                          All basic CRM features
                        </p>
                      </div>
                      <div className="d-flex align-items-center pt_14">
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="ps-2 clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0">
                          Up to 10,000 contacts
                        </p>
                      </div>
                      <div
                        className={`d-flex align-items-center pt_14 ${price.normal}`}
                      >
                        <div>
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="ps-2 clr_white300 fs_lg fw-medium ff_inter lh_143 mb-0">
                          Normal support
                        </p>
                      </div>
                      <div
                        className={`d-flex align-items-center pt_14 ${price.mobile}`}
                      >
                        <div className="pb-3">
                          <img
                            className="w_24"
                            src={checkmark}
                            alt="checkmark"
                          />
                        </div>
                        <p className="clr_white300 ps-2 fs_lg fw-medium ff_inter lh_143">
                          Mobile app
                        </p>
                      </div>

                      <h4 className="ff_inter fw-bold clr_offblue mb-0 pt-3 mt-3">
                        $99.00
                        <span className="clr_white300 fs_lg fw-normal ff_inter lh_143 mb-0">
                          / Month
                        </span>
                      </h4>
                      <button className="pricing_startup_btn ff_inter fw-normal clr_white fw-bold py-3 mt-5 w-100 ">
                        Get Started
                        <img
                          src={rightarrow}
                          className="ps-1"
                          alt="right arrow"
                        />
                      </button>
                      <p className="ff_dmsans fw-normal clr_white300 fs_lg mb-0 pt-3 mt-1 text-center">
                        No credit card required
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
<<<<<<< HEAD
          <div className="text-center pt-5">
            <button className="ff_inter pricing_getbtn clr_white fw-semibold fs_2xl">
              Get a Quote
              <img src={btn_arrow} alt="right_arrow" className="ps-1"></img>
            </button>
          </div>
=======
          <div className="text-center pt-5 d-none d-sm-block"><button className="ff_inter pricing_getbtn clr_white fw-semibold fs_2xl">Get a Quote<img src={btn_arrow} alt="right_arrow" className="ps-1"></img></button></div>
>>>>>>> 8ef5fa7cafbdb553894da7d730fb2eddc9c44404
        </Container>
      </section>
    </>
  );
};

export default Pricing;
