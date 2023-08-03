import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";

const ModPAck = ({modpack}) => {
  return (
    <>
      <section className="bg-danger">
        <Container>
          <h2 className="common_heading text-center">
            GET A PRE <span className="clr_blue">-INSTALLED MODPACK</span>
          </h2>
          <p className="common_para mw_647 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row>
          {modpack.map((modpack, mod_card) => {
              return (
            <Col key={mod_card} lg={4} md={6}>
              
                <div className="bg_darkblack p_25 border_r_15">
                  <div><img src={modpack.modimg} alt="minecraft"className="w_55" /></div>
                  <h4 className="ff_rubik fw-semibold clr_white fs_6xl">{modpack.bigheading}</h4>
                  <p className="ff_inter clr_offblue fw-normal fs-lg mb-0">{modpack.bluepara}</p>
                  <p className="ff_inter clr_offwhite fw-normal fs-lg mb-0">{modpack.whitepara}</p>
                  <p className="ff_inter clr_offblue fw-normal fs-lg mb-0">{modpack.bluepara}</p>
                  <h3 className="ff_inter clr_offblue fw-bold fs_7xl mb-0">{modpack.smallheading}</h3>
                  <div className="d-flex">
                    <button>{modpack.popularbtn}</button>
                    <button>{modpack.officalbtn}</button>
                  </div>
                  <button>{modpack.startup} <img src={modpack.rightarrow} alt="right arrow" /> </button>
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
