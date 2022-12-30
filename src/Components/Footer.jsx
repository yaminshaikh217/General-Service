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
        <div className=" footer">

          <div className="grid-col-3">
            <div>
              <div className="logo">
                <img src={Logo} alt="Logo" />
                <h2>FAIR DEAL</h2>
              </div>
              <NavLink to='#'><p>We are Your End-to-End
                Cleaning & Maintenance Partner.</p></NavLink>
            </div>
            <div>
              <h4 className="footer-title">Services</h4>
              <a href="/#abouts"><p>Home</p></a>
              <a href="/#abouts"><p>About</p></a>
              <a href="/#serviceId"><p>Service</p></a>
              <a href="/#contactus"><p>Contact</p></a>
            </div>
            <div>
              <h4 className="footer-title">Further Links</h4>
              <NavLink to='/terms'><p>Terms Condition</p></NavLink>
              <NavLink to='/privacy'><p>Privacy Policy</p></NavLink>
            </div>
            <div className="icons">
              <h4 className="footer-title">Social Links</h4>
              <div className="d-flex g-1">
                <div>
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
                </div>
                <div>
                  <div onClick={handleComingSoon}>
                    <img src={play} alt="googleplaystore" />
                  </div>
                  <div onClick={handleComingSoon}>
                    <img src={apple} alt="googleplaystore" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center">Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <Comingsoon show={coming} handleComingClick={handleComingSoon} />
    </>
  );
};

export default Footer;
