import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
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
                <li className="nav_hvoer">
                  <Link to="/" className="ff_rubik fw-bold fs_2xl clr_white">
                    MINECRAFT HOSTING
                  </Link>
                </li>
                <li className="nav_hvoer px-xl-3">
                  <Link
                    to="/product"
                    className="ff_rubik fw-bold fs_2xl clr_white"
                  >
                    GAME HOSTING
                  </Link>
                </li>
                <li className="nav_hvoer">
                  <Link to="/" className="ff_rubik fw-bold fs_2xl clr_white">
                    MORE
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-2 d-xl-none">
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
            <div className="align-items-center gap-2 d-none d-xl-flex">
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
