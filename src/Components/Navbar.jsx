import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Comingsoon from "./Comingsoon";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const [coming, setcoming] = useState(false);
  const handleActive = () => {
    setactive(!active);
  };
  const handleComingSoon = () => {
    setcoming(!coming);
  };

  return (
    <>
      <div className="headline">
        <div className="container">
          <div className="d-flex">
            <p>
              <a href="tel:+91 6359001001">Call Us : +91 6359001001</a>
            </p>
            <p>
              <a>or</a>
            </p>
            <p>
              <a href="mailto:name@gmail.com">Mail Us : name@gmail.com</a>
            </p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/Fairdeal-Company-107433102185215/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <i className="fa-brands fa-twitter"></i>
            <a href="https://instagram.com/fairdeal_company?igshid=YmMyMTA2M2Y=" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <i className="fa-brands fa-google-play" onClick={handleComingSoon}></i> */}
            {/* <i className="fa-brands fa-apple" onClick={handleComingSoon}></i> */}
            <button className="getApp" onClick={handleComingSoon}>Get App</button>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <header className="container header">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <h2>FAIR DEAL</h2>
            </div>
          </Link>
          <ul
            className={`navLinks ${active ? "active" : ""}`}
            onClick={handleActive}
          >
            <Link to="/">
              <li onClick={() => window.scrollTo({ top: 0 })}>HOME</li>
            </Link>
            <a href="/#about">
              <li>ABOUT</li>
            </a>
            <a href="/#service">
              <li>SERVICES</li>
            </a>
            <a href="/#contactus">
              <li>CONTACT</li>
            </a>
          </ul>
          <div
            className={`hamburgerMenu ${active ? "active" : ""}`}
            onClick={handleActive}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </header>
      </nav>
      <Comingsoon show={coming} handleComingClick={handleComingSoon} />
    </>
  );
};

export default Navbar;
