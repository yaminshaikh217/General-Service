import Logo from "../assets/logo.svg";
import { useState } from "react";
import Comingsoon from "./Comingsoon";

const Footer = () => {
  const [coming, setcoming] = useState(false);
  const handleComingSoon = () => { setcoming(!coming) }

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
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google-play" onClick={handleComingSoon}></i>
            <i className="fa-brands fa-apple" onClick={handleComingSoon}></i>
          </div>

        </div>
      </footer>
      <Comingsoon show={coming} handleComingClick={handleComingSoon} />
    </>
  );
};

export default Footer;
