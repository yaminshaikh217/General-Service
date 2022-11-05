import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h2>FAIR DEAL</h2>
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google-play"></i>
            <i className="fa-brands fa-apple"></i>
          </div>
          <div>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
