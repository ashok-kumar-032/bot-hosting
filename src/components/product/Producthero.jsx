import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import gravelhost from "../../assets/img/webp/gravelHost.webp";
const Producthero = () => {
  return (
    <>
      <section className="bg_productimg position-relative">
        <Header />
        <Container>
          <div className="position_absolute start-0 text-center gravelhost_top100">
            <img src={gravelhost} alt="gravelhost" className="mw_534" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Producthero;
