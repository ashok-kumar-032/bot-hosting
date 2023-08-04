import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ChooseUs = ({ ChooseUs }) => {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className="common_heading text-center">
            Why <span className="clr_blue">Choose Us?</span>
          </h2>
          <Row className="justify-content-center">
            {ChooseUs.map((Choose, ChooseUs_card) => {
              return (
                <Col key={Choose} lg={4} md={6} sm={11} className="px-1 mt-3">
                  <div className={`p_40 ms-1 ${Choose.choose_card}`}>
                    
                    <h3 className="ff_inter clr_white fw-semibold fs_4xl mb-0">{Choose.bigheading}</h3>
                    <p className="pt_20 lh_24 ff_inter fw-light fs_lg clr_white mb-0 fw-light">{Choose.para1}</p>
                    <p className="ff_inter lh_24 fw-light fs_lg clr_white mb-0 fw-light">{Choose.para2}</p>
                    <div className="d-flex pt-4 mt-2 align-items-center justify-content-between">
                      <div>
                        <img className="w_48 h_48" src={Choose.massage} alt="massage_icon" />
                      </div>
                      <h4 className="fs_md mb-0 ff_inter fw-bold clr_white">
                        {Choose.smallheading}
                        <img src={Choose.arrow} alt="arrow_icon" className="ps-3 ms-1"/>
                      </h4>
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
