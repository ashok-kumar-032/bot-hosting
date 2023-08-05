import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../assets/img/png/footer_fb.png";
import instagram from "../../assets/img/png/footer_insta.png";
import twitter from "../../assets/img/png/footer_twitter.png";
import linkdin from "../../assets/img/png/footer_linkdin.png";
const Footer = () => {
  return (
    <>
      <section className="py-5 footer_s">
        <Container>
          <Row className="justify-content-between pb-1 pb-sm-0">
            <Col lg={4}>
              <h3 className="ff_oswald clr_white fw-medium mb-0 pb-3 pb-sm-0 fs_5xl text-center text-sm-start">
                Logo
              </h3>
              <p className="clr_gray ff_oswald fw-normal fs_sm lh_24 mb-lg-4 pb-2 pt-2 mt-1 mx-auto ms-sm-0 mw_457 text-center text-sm-start">
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat...
                <span className="clr_blue200 c_pointer">Read More </span>
              </p>
              <div className="d-flex gap-2 mt-2 justify-content-center justify-content-sm-start">
                <a href="#">
                  <img
                    src={facebook}
                    alt="facebook_icon"
                    className="w_48 footer_icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={instagram}
                    alt="instagram_icon"
                    className="w_48 footer_icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitter}
                    alt="twitter_icon"
                    className="w_48 footer_icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={linkdin}
                    alt="linkdin_icon"
                    className="w_48 footer_icon"
                  />
                </a>
              </div>
            </Col>
            <Col lg={7} className="d-none d-sm-block">
              <Row className="justify-content-between pt-4 pt-lg-0 px-2">
                <Col sm={6} md={3} className="px-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">
                    Company
                  </h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#" className="my-4">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3} className="px-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">
                    Services
                  </h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">Campaigns</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Offline</a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3} className="px-0 pt-3 pt-md-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">
                    About
                  </h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Benefits</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3} className="px-0 pt-3 pt-md-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">
                    Help
                  </h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="text-center clr_white ff_roboto fw-light mb-0 fs_xl mt-4 pt-2 pt-lg-5">
            © Copyright 2023
          </p>
        </Container>
      </section>
    </>
  );
};

export default Footer;
