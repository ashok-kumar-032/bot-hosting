import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import modpack_right from "../../assets/img/webp/modpack_rightimg.webp";
import rightarrow from "../../assets/img/png/started_r_arrow.png";
const ModPAck = ({ modpack }) => {
  return (
    <>
      <section className="position-relative  py-3 my-1 my-sm-0 my-xl-5">
        <img
          src={modpack_right}
          alt="box_grops"
          className="modpack_rightimg z-0 position-absolute"
        />
        <Container className="position-relative z-1">
          <h2
            className="common_heading text-center"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            GET A PRE <span className="clr_blue">-INSTALLED MODPACK</span>
          </h2>
          <p
            className="common_para mw_550 mx-auto pb-xl-4 pt-2 pt-xxl-4"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="justify-content-center">
            {modpack.map((modpack, mod_card) => {
              return (
                <Col
                  key={mod_card}
                  lg={4}
                  md={6}
                  sm={11}
                  className="px-2 mt-3"
                  data-aos="zoom-in-up"
                >
                  <div className="bg_darkblack p_25 border_r_15 mod_card">
                    <div>
                      <img
                        src={modpack.modimg}
                        alt="minecraft"
                        className="w_55"
                      />
                    </div>
                    <h4 className="ff_rubik fw-semibold clr_white fs_6xl pt_xs_20 pt_lg_30 mb-0">
                      Minecraft Vanilla
                    </h4>
                    <p className="ff_inter clr_offblue fw-normal fs-lg mb-0 pt_10">
                      2 GB recommended
                    </p>
                    <p className="ff_inter clr_white200 fw-normal fs-lg mb-0 lh_143 pt-3">
                      Minecraft Vanilla is the official Minecraft version from
                      Mojang.
                    </p>
                    <h3 className="ff_inter clr_offblue fw-bold fs_7xl mb-0 pt-4 mt-2">
                      $49.99
                    </h3>
                    <div className="d-flex pt_xs_20 pt_lg_30 gap_10">
                      <button className="popular_btn ff_inter fw-normal clr_white py-3 mw_165 w-100 fw-bold">
                        Popular
                      </button>

                      <button className="officalr_btn ff_inter fw-normal clr_white py-3 mw_165 w-100 fw-bold">
                        Official
                      </button>
                    </div>
                    <div className="pt_xs_20 pt_lg_30">
                      <button className="ff_inter fw-normal clr_white fw-bold py-3 w-100 started_btn">
                        Get Started
                        <img
                          src={rightarrow}
                          className="ps-1"
                          alt="right arrow"
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

export default ModPAck;
