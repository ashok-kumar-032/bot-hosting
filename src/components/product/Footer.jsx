import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../assets/img/png/footer_fb.png";
import instagram from "../../assets/img/png/footer_insta.png";
import twitter from "../../assets/img/png/footer_twitter.png";
import linkdin from "../../assets/img/png/footer_linkdin.png";
const Footer = () => {
  return (
    <>
      <section className="bg-dark py-5 footer_s">
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="ff_oswald clr_white fw-medium mb-0 fs_5xl">
                Logo
              </h3>
              <p className="clr_gray ff_oswald fw-normal fs_sm lh_24 mb-4 pb-2 pt-2 mt-1 mw_457">
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat...
                <span className="clr_blue200">Read More </span>
              </p>
              <div className="d-flex gap-2 mt-2">
                <div>
                  <img src={facebook} alt="facebook_icon" className="w_48" />
                </div>
                <div>
                  <img src={instagram} alt="instagram_icon" className="w_48" />
                </div>
                <div>
                  <img src={twitter} alt="twitter_icon" className="w_48" />
                </div>
                <div>
                  <img src={linkdin} alt="linkdin_icon" className="w_48" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="justify-content-between">
                <Col md={3} className="px-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">Company</h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#" className="my-4">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                  </ul>
                </Col>
                <Col md={3} className="px-0">
                <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">Services</h4>
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
                <Col md={3} className="px-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">About</h4>
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
                <Col md={3} className="px-0">
                  <h4 className="clr_white ff_rubik fw-medium fs_2xl mb-0">Help</h4>
                  <ul className="ps-0">
                    <li>
                      <a href="#">FAQs</a>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
