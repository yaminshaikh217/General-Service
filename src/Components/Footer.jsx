import Logo from "../assets/logo.svg";
import { useState } from "react";
import Comingsoon from "./Comingsoon";
import play from "../assets/googleplay.png";
import apple from "../assets/appstore.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [coming, setcoming] = useState(false);
  const handleComingSoon = () => {
    setcoming(!coming);
  };

  return (
    <>
      <footer>
        <div className="container footer">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h2>FAIR DEAL</h2>
          </div>
          <div>
            <p>Copyright 2022. All Rights Reserved</p>
            <NavLink to='/terms'><p>Terms Condition</p></NavLink>
            <NavLink to='/privacy'><p>Privacy Policy</p></NavLink>
          </div>
          <div className="icons d-flex-jcc-alc">
            <a
              href="https://www.facebook.com/Fairdeal-Company-107433102185215/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a
              href="https://instagram.com/fairdeal_company?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div onClick={handleComingSoon}>
              <img src={play} alt="googleplaystore" />
            </div>
            <div onClick={handleComingSoon}>
              <img src={apple} alt="googleplaystore" />
            </div>
            {/* <i
              className="fa-brands fa-google-play"
              onClick={handleComingSoon}></i> */}
            {/* <i className="fa-brands fa-apple" onClick={handleComingSoon}></i> */}
          </div>
        </div>
      </footer>
      <Comingsoon show={coming} handleComingClick={handleComingSoon} />
    </>
  );
};

export default Footer;
