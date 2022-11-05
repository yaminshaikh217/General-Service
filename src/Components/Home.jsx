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
            Get a fair deal<br /> on home services
            </h1>
            <p className="revealText">Trustworthy, Reliable, Professional</p>
            <div className="btnGroup revealText">
              <button className="primaryBtn" onClick={showContact}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </main>
      <ContactPopup active={hide} handleClick={showContact} />;
    </>
  );
};

export default Home;
