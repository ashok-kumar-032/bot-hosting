import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import modpack_right from "../../assets/img/webp/modpack_rightimg.webp"
const ModPAck = ({ modpack }) => {
  return (
    <>
      <section className="position-relative py-5">
        <img src={modpack_right} alt="box_grops" className="modpack_rightimg z-0 position-absolute" />
        <Container className="position-relative z-1">
          <h2 className="common_heading text-center">
            GET A PRE <span className="clr_blue">-INSTALLED MODPACK</span>
          </h2>
          <p className="common_para mw_647 mx-auto pb-lg-5 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="justify-content-center">
            {modpack.map((modpack, mod_card) => {
              return (
                <Col key={mod_card} lg={4} md={6} sm={11} className="px-2 mt-3">
                  <div className="bg_darkblack p_25 border_r_15 mod_card">
                    <div>
                      <img
                        src={modpack.modimg}
                        alt="minecraft"
                        className="w_55"
                      />
                    </div>
                    <h4 className="ff_rubik fw-semibold clr_white fs_6xl pt_30 mb-0">
                      {modpack.bigheading}
                    </h4>
                    <p className="ff_inter clr_offblue fw-normal fs-lg mb-0 pt_10">
                      {modpack.bluepara}
                    </p>
                    <p className="ff_inter clr_white200 fw-normal fs-lg mb-0 lh_143 pt-3">
                      {modpack.whitepara}
                    </p>
                    <h3 className="ff_inter clr_offblue fw-bold fs_7xl mb-0 pt-4 mt-2">
                      {modpack.smallheading}
                    </h3>
                    <div className="d-flex pt_30 gap_10">
                      <button className="popular_btn ff_inter fw-normal clr_white py-3 mw_165 w-100 fw-bold">
                        {modpack.popularbtn}
                      </button>
                      
                        <button className="officalr_btn ff_inter fw-normal clr_white py-3 mw_165 w-100 fw-bold">
                          {modpack.officalbtn}
                        </button>
                      
                    </div>
                    <div className="pt_30">
                      <button className="ff_inter fw-normal clr_white fw-bold py-3 w-100 started_btn">
                        {modpack.startup}
                        <img src={modpack.rightarrow} className="ps-1" alt="right arrow" />
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

export default ModPAck;
