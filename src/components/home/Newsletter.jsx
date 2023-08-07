import React from "react";
import { Container } from "react-bootstrap";
import email from "../../assets/img/svg/emailicon.svg";
const Newsletter = () => {
  return (
    <>
      <section className="my-xl-5 py-md-5 py-4">
        <Container className="my-xl-4">
          <div className="text-center">
            <h4
              className="ff_rubik fw-medium fs_5xl text-uppercase clr_white mb-2 pb-1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Newsletter
            </h4>
            <p
              className="ff_rubik fw-normal fs_sm clr_blue mb-4 clr_graylight"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Be the first one to know about discounts, offers and events weekly
              in
              <span className="d-sm-block">
                your mailbox. Unsubscribe whenever you like with one click.
              </span>
            </p>
            <div
              className="bg_blacklight m-auto rounded-2 p-2 mw_750 d-flex justify-content-between align-items-center"
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              <div className="ps-sm-4 emailinput">
                <img src={email} alt="email" className="me-1" width={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ff_inter fs_lg fw-normal clr_graylight mx-sm-2 ms-2 border-0 bg-transparent"
                />
              </div>
              <button className="ff_rubik fs_sm fw-medium clr_white btn_subimt border-0">
                Submit
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
