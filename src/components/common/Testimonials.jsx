import React, { useRef } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import star from "../../assets/img/svg/star.svg";
import friendly from "../../assets/img/webp/friendly.webp";
import trustpilot from "../../assets/img/svg/trustpilot.svg";
import yellowstar from "../../assets/img/svg/yellowstar.svg";
import likethem from "../../assets/img/svg/Icon_Like.svg";
import divider from "../../assets/img/svg/Divider.svg";
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
        <Container >
          <div
            className="text-center "
          >
            <p className="ff_rubik fw-normal fs_2xl text-uppercase clr_blue mb-2">
              testimonials
            </p>
            <p className="common_heading">What Our Clients Say About Us</p>
          </div>
          <Slider {...clientsslider} ref={clintsbtn}>
            {clients.map((card) => {
              return (
                <div key={card.id} className="px_5px px-1 mt-5">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            opacity="0.15"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 16.425C12.4183 16.425 16 12.8433 16 8.42505C16 4.00677 12.4183 0.425049 8 0.425049C3.58172 0.425049 0 4.00677 0 8.42505C0 12.8433 3.58172 16.425 8 16.425Z"
                            fill="#36B37E"
                          />
                          <path
                            d="M6.93237 10.9745L4.75789 8.81306C4.69713 8.7523 4.66675 8.67417 4.66675 8.57869C4.66675 8.4832 4.69713 8.40508 4.75789 8.34431L5.23966 7.87557C5.30043 7.80612 5.37638 7.7714 5.46753 7.7714C5.55867 7.7714 5.63897 7.80612 5.70841 7.87557L7.16674 9.3339L10.2917 6.2089C10.3612 6.13946 10.4415 6.10474 10.5326 6.10474C10.6238 6.10474 10.6997 6.13946 10.7605 6.2089L11.2423 6.67765C11.303 6.73842 11.3334 6.81654 11.3334 6.91203C11.3334 7.00751 11.303 7.08564 11.2423 7.1464L7.40112 10.9745C7.34035 11.044 7.26223 11.0787 7.16674 11.0787C7.07126 11.0787 6.99313 11.044 6.93237 10.9745Z"
                            fill="#36B37E"
                          />
                        </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M17.8403 10.925H5.15918"
                  stroke="#A4A4A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4998 17.2625L5.15918 10.9219L11.4998 4.5813"
                  stroke="#A4A4A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className="btn_slider d-flex justify-content-center align-items-center"
              onClick={() => clintsbtn.current.slickNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M5.15918 10.925H17.8403"
                  stroke="#A4A4A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5 4.5813L17.8406 10.9219L11.5 17.2625"
                  stroke="#A4A4A4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <Row className="justify-content-center mt-5">
            <Col lg={9}>
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
