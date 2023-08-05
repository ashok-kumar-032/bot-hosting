import React, { useState } from "react";
import { Container } from "react-bootstrap";
import facebook from "../../assets/img/png/facebook.png";
import instagram from "../../assets/img/png/Instagram.png";
import twitter from "../../assets/img/png/twiter.png";
import linkdin from "../../assets/img/png/linkdin.png";
import add from "../../assets/img/png/adduser.png";
import navbtn from "../../assets/img/svg/navbtn.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="pt-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="ff_oswald fs_6xl fw-semibold clr_white pointer">
              Web Design
            </h4>
            <div onClick={showUl} className="z_30">
              <h3 className="d-xl-none mb-0 clr_blue">
                <img src={navbtn} alt="navbtn" />
              </h3>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center flex-column phone ${
                head ? "" : "left_0  clip_path"
              }`}
              onClick={() => sethead(true)}
            >
              <button className="bg_clrblue border-0 rounded-pill clr_white ff_rubik fs_3xl fw-bold btn_login mb-4 d-xl-none">
                <img src={add} alt="add" width={23} height={23} /> Login
              </button>
              <ul className="d-flex gap-xl-4 gap-3 align-xl-items-center p-0 mb-0 flex-column flex-xl-row">
                <li>
                  <Link
                    to="/"
                    className="ff_rubik fw-bold fs_2xl clr_white nav_hvoer"
                  >
                    MINECRAFT HOSTING
                  </Link>
                </li>
                <li className="px-xl-3">
                  <Link
                    to="/product"
                    className="ff_rubik fw-bold fs_2xl clr_white nav_hvoer"
                  >
                    GAME HOSTING
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="ff_rubik fw-bold fs_2xl clr_white nav_hvoer"
                  >
                    MORE
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.26423 0.917215L3.99994 3.08399L1.73564 0.917215C1.48483 0.678249 1.11927 0.584923 0.776654 0.67239C0.434039 0.759858 0.166427 1.01483 0.0746236 1.34126C-0.0171796 1.6677 0.0807733 2.016 0.331585 2.25496L3.29791 5.08119C3.48357 5.25954 3.73629 5.35986 3.99994 5.35986C4.26358 5.35986 4.51631 5.25954 4.70197 5.08119L7.66829 2.25496C8.05601 1.88556 8.05601 1.28662 7.66829 0.917215C7.28057 0.547806 6.65195 0.547806 6.26423 0.917215Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-2 d-xl-none iconsnav">
                <a href="#">
                  <img src={facebook} alt="facebook" width={48} height={48} />
                </a>
                <a href="#">
                  <img src={instagram} alt="instagram" width={48} height={48} />
                </a>
                <a href="#">
                  <img src={twitter} alt="twitter" width={48} height={48} />
                </a>
                <a href="#">
                  <img src={linkdin} alt="linkdin" width={48} height={48} />
                </a>
              </div>
            </div>
            <div className="align-items-center gap-2 d-none d-xl-flex iconsnav">
              <a href="#">
                <img src={facebook} alt="facebook" width={48} height={48} />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" width={48} height={48} />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" width={48} height={48} />
              </a>
              <a href="#">
                <img src={linkdin} alt="linkdin" width={48} height={48} />
              </a>
              <button className="bg-black border-0 rounded-pill clr_white ff_rubik fs_3xl fw-bold btn_login ms-2 d-flex align-items-center gap-2 end-0">
                <img src={add} alt="add" width={23} height={23} /> Login
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
