import HeroBg from "../assets/hero.jpg";
import { useEffect, useState } from "react";
import { homeAnim } from "../utils/gsap";
import ContactPopup from "./ContactPopup";

const Home = () => {
  useEffect(() => {
    homeAnim();
  }, []);
  const [hide, sethide] = useState(false);

  const showContact = () => sethide(!hide);
  return (
    <>
      <main className="hero" id="home">
        <div className="heroBg">
          <div className="container">
            <h1 className="revealText">
            {/* We are Your End-to-End<br /> */}
             Cleaning & Maintenance Partner. 
            </h1>
            <p className="revealText">We are Your End-to-End</p>
            <div className="btnGroup revealText">
              <button className="primaryBtn" onClick={showContact}>
                Get in touch <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <ContactPopup active={hide} handleClick={showContact} />
    </>
  );
};

export default Home;
