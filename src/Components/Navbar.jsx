import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Comingsoon from "./Comingsoon";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const handleActive = () => {
    setactive(!active);
  };

  return (
    <>
      <div className="headline">
        <div className="container">
          <div className="d-flex">
            <p><a href="tel:+91 6359001001">Call Us : +91 6359001001</a></p>
            <p><a >or</a></p>
            <p><a href="mailto:name@gmail.com">Mail Us : name@gmail.com</a></p>
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google-play"></i>
            <i className="fa-brands fa-apple"></i>
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
      <Comingsoon/>
    </>
  );
};

export default Navbar;
