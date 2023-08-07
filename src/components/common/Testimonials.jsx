import React, { useRef } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import star from "../../assets/img/svg/star.svg";
import friendly from "../../assets/img/webp/friendly.webp";
import trustpilot from "../../assets/img/svg/trustpilot.svg";
import yellowstar from "../../assets/img/svg/yellowstar.svg";
import likethem from "../../assets/img/svg/Icon_Like.svg";
import divider from "../../assets/img/svg/Divider.svg";
import {
  Sliderarrowleft,
  Sliderarrowright,
  Yestestimonials,
} from "./icons/Svgicons";
const Testimonials = ({ clients }) => {
  var clientsslider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const clintsbtn = useRef();
  return (
    <>
      <section className="pt-4 mt-4 mt-xl-0 pt-xl-0">
        <Container>
          <div
            className="text-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <p className="ff_rubik fw-normal fs_2xl text-uppercase clr_blue mb-2">
              testimonials
            </p>
            <p className="common_heading">What Our Clients Say About Us</p>
          </div>
          <Slider {...clientsslider} ref={clintsbtn}>
            {clients.map((card) => {
              return (
                <div
                  key={card.id}
                  className="px_5px px-1 mt-5"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <div className="bg_darkblack py-3 px-2 rounded-3 h-100 cards_h">
                    <div className="d-flex gap-1 mb-4 pt-1 px-1">
                      <img src={star} alt="star" width={19} height={19} />
                      <img src={star} alt="star" width={19} height={19} />
                      <img src={star} alt="star" width={19} height={19} />
                      <img src={star} alt="star" width={19} height={19} />
                      <img src={star} alt="star" width={19} height={19} />
                    </div>
                    <p className="ff_open fs_lg fw-normal clr_gray py-2 mb-4 px-1 line_h28">
                      {card.para}
                    </p>
                    <div className="d-flex align-items-center gap-2 px-1 pb-1">
                      <img
                        src={card.manimg}
                        alt="Viola Manisa"
                        width={40}
                        height={40}
                      />
                      <div className="ms-1">
                        <p className=" ff_open fs_lg fw-semibold clr_green mb-1">
                          {card.name}
                        </p>
                        <Yestestimonials />
                        <span className="clr_lightgreen ms-2">
                          Verified customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="d-flex gap-3 justify-content-center mt-3 pt-1 d-xl-none">
            <div
              className="btn_slider d-flex justify-content-center align-items-center"
              onClick={() => clintsbtn.current.slickPrev()}
            >
              <Sliderarrowleft />
            </div>
            <div
              className="btn_slider d-flex justify-content-center align-items-center"
              onClick={() => clintsbtn.current.slickNext()}
            >
              <Sliderarrowright />
            </div>
          </div>
          <Row className="justify-content-center mt-5">
            <Col
              lg={9}
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="d-flex gap-2">
                <div className="text-center">
                  <img
                    src={friendly}
                    alt="friendly"
                    className="friendlyimg mb-lg-3 mb-1 pb-1"
                  />
                  <p className="ff_open clignts_fs_16 fw-normal clr_graywhite">
                    <span className="fw-bold">Friendly</span> customer support
                    team
                  </p>
                </div>
                <img src={divider} alt="divider" />
                <div className="text-center">
                  <img
                    src={trustpilot}
                    alt="trustpilot"
                    className="trustpilotwidth"
                  />
                  <div className="d-flex justify-content-center gap-1 my-lg-3 my-2">
                    <img
                      src={yellowstar}
                      alt="yellowstar"
                      className="yellowstartwidth"
                    />
                    <img
                      src={yellowstar}
                      alt="yellowstar"
                      className="yellowstartwidth"
                    />
                    <img
                      src={yellowstar}
                      alt="yellowstar"
                      className="yellowstartwidth"
                    />
                    <img
                      src={yellowstar}
                      alt="yellowstar"
                      className="yellowstartwidth"
                    />
                    <img
                      src={yellowstar}
                      alt="yellowstar"
                      className="yellowstartwidth"
                    />
                  </div>
                  <p className="ff_open clignts_fs_16 fw-normal clr_graywhite">
                    <span className="fw-bold">4.6 out of 5 stars </span> from
                    8.6k reviews
                  </p>
                </div>
                <img src={divider} alt="divider" />
                <div className="text-center pe-lg-5">
                  <img
                    src={likethem}
                    alt="likethem"
                    className="likethem_w48 mb-lg-3 mb-1 pb-1"
                  />
                  <p className="ff_open clignts_fs_16 fw-normal clr_graywhite">
                    We’re making
                    <span className="fw-bold"> insurance as simple as</span> can
                    be
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
