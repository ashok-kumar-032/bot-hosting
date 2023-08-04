import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star from "../../assets/img/svg/star.svg";
const Testimonials = ({ clients }) => {
  return (
    <>
      <section className="bg-danger">
        <Container>
          <div className="text-center">
            <p className="ff_rubik fw-normal fs_2xl text-uppercase clr_blue mb-2">
              testimonials
            </p>
            <p className="common_heading">What Our Clients Say About Us</p>
          </div>
          {/* <Row className="mt-5 pt-4"> 
            {clients.map((card) => {
              return (
                <Col lg={6} key={card.id} className="mt-3 pt-1">
                  <div className="bg_card d-flex flex-column">
                    <div>
                      <img src={star} alt="star" />
                    </div>
                    <h5 className="text-white mt-3 pt-1 pb-2 ps-4 ms-1">
                      {card.hading}
                    </h5>
                    <p className="mb-0 text-white opacity-50 h-100">
                      {card.para}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row> */}
          <Row>
            <Col lg={3}>
              <div className="bg_darkblack">
                <div className="d-flex gap-1">
                  <img src={star} alt="star" width={19} height={19} />
                  <img src={star} alt="star" width={19} height={19} />
                  <img src={star} alt="star" width={19} height={19} />
                  <img src={star} alt="star" width={19} height={19} />
                  <img src={star} alt="star" width={19} height={19} />
                </div>
                <p className="ff_open">
                  I received great customer service from the specialists who
                  helped me. I would recommend to anyone who wants quality.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
