import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import facebook from "../../assets/img/png/facebook.png";
import instagram from "../../assets/img/png/Instagram.png";
import twitter from "../../assets/img/png/twiter.png";
import linkdin from "../../assets/img/png/linkdin.png";
import add from "../../assets/img/png/adduser.png";
import navbtn from "../../assets/img/svg/navbtn.svg";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
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
      <section className="pt-xxl-5 pt-lg-4 pt-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h4>
              <Link to="/" className="ff_oswald fs_6xl fw-semibold clr_white">
                Web Design
              </Link>
            </h4>
            <div onClick={showUl} className="z_30">
              <h3 className="d-xl-none mb-0 clr_white">
                {head ? (
                  <img src={navbtn} alt="navbtn" width={45} height={45} />
                ) : (
                  <div className="h_45">
                    <RxCross1 />
                  </div>
                )}
              </h3>
            </div>
            <div
              className={`d-flex flex-column phone ${
                head ? "" : "left_0  clip_path"
              }`}
            >
              <button className="bg_clrblue rounded-pill clr_white d-flex gap-2 justify-content-center ff_rubik fs_3xl fw-bold btn_login mb-4 d-xl-none">
                <img src={add} alt="add" width={23} height={23} /> Login
              </button>
              <ul className="d-flex gap-xl-4 mt-2 mt-xl-0 gap-3 align-xl-items-center p-0 mb-0 flex-column flex-xl-row">
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
                  <Dropdown>
                    <Dropdown.Toggle className="ff_rubik fw-bold fs_2xl clr_white nav_hvoer">
                      MORE
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Discord</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Bot Hosting
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-2 d-xl-none iconsnav mt-4 pt-1">
                <a href="https://www.facebook.com/" target=" blank">
                  <img src={facebook} alt="facebook" width={48} height={48} />
                </a>
                <a href="https://www.instagram.com/" target=" blank">
                  <img src={instagram} alt="instagram" width={48} height={48} />
                </a>
                <a
                  href="https://twitter.com/settings/account?lang=en"
                  target=" blank"
                >
                  <img src={twitter} alt="twitter" width={48} height={48} />
                </a>
                <a href="https://in.linkedin.com/" target=" blank">
                  <img src={linkdin} alt="linkdin" width={48} height={48} />
                </a>
              </div>
            </div>
            <div className="align-items-center gap-2 d-none d-xl-flex iconsnav">
              <a href="https://www.facebook.com/" target=" blank">
                <img src={facebook} alt="facebook" width={48} height={48} />
              </a>
              <a href="https://www.instagram.com/" target=" blank">
                <img src={instagram} alt="instagram" width={48} height={48} />
              </a>
              <a
                href="https://twitter.com/settings/account?lang=en"
                target=" blank"
              >
                <img src={twitter} alt="twitter" width={48} height={48} />
              </a>
              <a href="https://in.linkedin.com/" target=" blank">
                <img src={linkdin} alt="linkdin" width={48} height={48} />
              </a>
              <button className="bg_black200 rounded-pill clr_white ff_rubik fs_3xl fw-bold btn_login ms-2 d-flex align-items-center gap-2">
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
