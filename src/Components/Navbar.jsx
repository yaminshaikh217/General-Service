import { useState } from "react";
import Logo from '../assets/logo.svg'

const Navbar = () => {
  const [active, setactive] = useState(false);
  const handleActive = () => {
    setactive(!active);
  };

  return (
    <>
      <nav className="navbar">
        <header className="container header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className={`navLinks ${active ? "active" : ""}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Experts</li>
            {/* <li>Pricing</li> */}
            <li>News</li>
            <li>Contact</li>
          </ul>
          <div className={`hamburgerMenu ${active ? "active" : ""}`} onClick={handleActive}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
