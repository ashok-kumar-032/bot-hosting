import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg_line from "../../assets/img/webp/chooseus_bg_layer.webp";
import massageimg from "../../assets/img/png/message_icon.png";
import arrow from "../../assets/img/png/right_arrow.png";
const ChooseUs = ({ ChooseUs }) => {
  return (
    <>
      <section className="py-sm-5 py-4 my-1 my-sm-0 my-xl-5 position-relative overflow-hidden mt-5">
        <img
          src={bg_line}
          className="chooseus_bgline position-absolute w-100 d-none d-md-block"
          alt="bg_line"
        />
        <Container className="position-relative z-2 pt-xl-4">
          <h2
            className="common_heading text-center"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            Why <span className="clr_blue">Choose Us?</span>
          </h2>
          <Row className="justify-content-center">
            {ChooseUs.map((chosecard) => {
              return (
                <Col
                  key={chosecard.id}
                  lg={4}
                  md={6}
                  sm={11}
                  className="px-1 mt-3"
                  data-aos="flip-left"
                  data-aos-duration="3000"
                >
                  <div
                    className={`p_md_40 p_xs_36 ms-md-1 cards_h rounded-5 ${chosecard.choose_card}`}
                  >
                    <h3 className="ff_inter clr_white fw-semibold fs_4xl mb-0">
                      {chosecard.bigheading}
                    </h3>
                    <p className="pt_20 lh_24 ff_inter fw-light fs_lg clr_white mb-0 fw-light">
                      Sales Cloud wurde mit der Mission geboren, Gründern von
                      B2B-Start-ups dabei zu helfen, ihre
                    </p>
                    <p className="ff_inter lh_24 fw-light fs_lg clr_white mb-0 fw-light">
                      Verkaufsorganisationen auf eine kapitaleffiziente Weise
                      aufzubauen und zu skalieren
                    </p>
                    <div className="d-flex pt-4 mt-2 align-items-center justify-content-between">
                      <div>
                        <img
                          className="w_48 h_48"
                          src={massageimg}
                          alt="massage_icon"
                        />
                      </div>
                      <button className="fs_md mb-0 ff_inter fw-bold clr_white bg-transparent border-0 text-uppercase ls_05">
                        explore more
                        <img
                          src={arrow}
                          alt="arrow_icon"
                          className="ps-3 ms-1"
                        />
                      </button>
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

export default ChooseUs;
