import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg_line from "../../assets/img/webp/chooseus_bg_layer.webp";
import massageimg from "../../assets/img/png/message_icon.png";
import arrow from "../../assets/img/svg/right_arrow.svg";
const ChooseUs = ({ ChooseUs }) => {
  return (
    <>
      <section className="position-relative overflow-hidden py-sm-5 my-xl-4 py-3">
        <img
          src={bg_line}
          className="chooseus_bgline position-absolute w-100 d-none d-md-block"
          alt="bg_line"
        />
        <Container className="position-relative z-2 mt-xl-5">
          <h2
            className="common_heading text-center pb-sm-4 pb-2 mb-xl-3"
          >
            Why <span className="clr_blue">Choose Us?</span>
          </h2>
          <Row className="justify-content-center">
            {ChooseUs.map((chosecard) => {
              return (
                <Col data-aos="flip-right"
                data-aos-duration="3000"
                  key={chosecard.id}
                  lg={4}
                  md={6}
                  sm={11}
                  className="px-1 mt-3"
                  
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
                    <div className="d-flex pt-4 mt-2 align-items-center justify-content-between choose_card_h">
                      <div>
                        <img
                          className="w_48 h_48"
                          src={massageimg}
                          width={43}
                          height={43}
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
