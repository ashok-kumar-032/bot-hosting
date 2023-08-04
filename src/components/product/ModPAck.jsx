import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";

const ModPAck = ({ modpack }) => {
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
            {modpack.map((feature, mod_card) => {
              return (
                <Col key={mod_card}>
                  <div>
                    <div>
                      <div>
                        <img
                          src={modpack.modimg}
                          alt="minecraft"
                          className="w-100"
                        />
                      </div>
                      <h4 className="ff_rubik fw-semibold clr_white fs_6xl">
                        {modpack.bigheading}
                      </h4>
                      <p className="ff_inter clr_offblue fw-normal fs-lg">
                        {modpack.bluepara}
                      </p>
                      <p className="ff_inter clr_offwhite fw-normal fs-lg">
                        {modpack.para}
                      </p>
                      <h3 className="ff_inter clr_offblue fw-bold fs_7xl">
                        {modpack.smallheading}
                      </h3>
                      <div className="d-flex">
                        <button></button>
                        <button></button>
                      </div>
                      <button></button>
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
