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
      <section className="bg-danger py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="position-relative z_30">
              <h4 className="ff_oswald fs_6xl fw-semibold clr_white">
                Web Design
              </h4>
            </div>
            <div onClick={showUl} className="z_30">
              <h3 className="d-xl-none mb-0">
                <img src={navbtn} alt="navbtn" />
              </h3>
            </div>
            <div
              className={`gap-4 d-flex align-items-center flex-column phone ${
                head ? "" : "left_0 justify-content-center"
              }`}
              onClick={() => sethead(true)}
            >
              <button className="bg-black border-0 rounded-pill clr_white ff_rubik fs_3xl fw-bold btn_login ms-2">
                <img src={add} alt="add" width={23} height={23} /> Login
              </button>
              <ul className="d-flex gap-4 align-xl-items-center p-0 mb-0 flex-column flex-xl-row">
                <li className="nav_hvoer">
                  <span className="ff_rubik fw-bold fs_2xl clr_white">
                    MINECRAFT HOSTING
                  </span>
                </li>
                <li className="nav_hvoer px-xl-3">
                  <span className="ff_rubik fw-bold fs_2xl clr_white">
                    GAME HOSTING
                  </span>
                </li>
                <li className="nav_hvoer">
                  <span className="ff_rubik fw-bold fs_2xl clr_white">
                    MORE
                  </span>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-2 d-xl-none">
                <img src={facebook} alt="facebook" width={48} height={48} />
                <img src={instagram} alt="instagram" width={48} height={48} />
                <img src={twitter} alt="twitter" width={48} height={48} />
                <img src={linkdin} alt="linkdin" width={48} height={48} />
              </div>
            </div>
            <div className="align-items-center gap-2 d-none d-xl-flex">
              <img src={facebook} alt="facebook" width={48} height={48} />
              <img src={instagram} alt="instagram" width={48} height={48} />
              <img src={twitter} alt="twitter" width={48} height={48} />
              <img src={linkdin} alt="linkdin" width={48} height={48} />
              <button className="bg-black border-0 rounded-pill clr_white ff_rubik fs_3xl fw-bold btn_login ms-2">
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
