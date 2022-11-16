import { useEffect, useState } from "react";
import whatsapp from "../assets/whatsapp.png"

const ScrollTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setshow(true) : setshow(false);
    });
  }, []);

  const [show, setshow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div
        className={`scrollTop ${show ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <a href="https://wa.me/+916359001001?text=I'm%20interested%20in%20your%20car%20for%20sale" target='_blank'>
        <div className={`scrollTop whatsapp ${show ? "active" : ""}`}>
          {/* <i className="fa-brands fa-whatsapp"></i> */}
          <img src={whatsapp} alt="whatsapp" />
        </div>
      </a>
    </>
  );
};

export default ScrollTop;