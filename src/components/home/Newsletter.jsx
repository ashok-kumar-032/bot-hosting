import React from "react";
import { Container } from "react-bootstrap";
import email from "../../assets/img/svg/emailicon.svg";
const Newsletter = ({ product_dnone }) => {
  return (
    <>
      <section className={`py-sm-5 my-xl-4 py-3 ${product_dnone}`}>
        <Container data-aos="fade-up"
     data-aos-duration="2000">
          <div className="text-center">
            <h4 className="ff_rubik fw-medium fs_5xl text-uppercase clr_white mb-2 pb-md-1">
              Newsletter
            </h4>
            <p className="ff_rubik fw-normal fs_sm clr_blue mb-md-4 clr_graylight pb-xl-2">
              Be the first one to know about discounts, offers and events weekly
              in
              <span className="d-sm-block">
                your mailbox. Unsubscribe whenever you like with one click.
              </span>
            </p>
            <div className="bg_blacklight m-auto rounded-2 p-1 mw_750 d-flex justify-content-between align-items-center">
              <div className="ps-sm-4 emailinput w-100 d-flex">
                <img src={email} alt="email" className="me-1" width={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ff_inter fs_lg fw-normal clr_graylight w-100 mx-sm-2 py-3 ms-2 border-0 bg-transparent"
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
