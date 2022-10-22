import { useEffect, useState } from "react";

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
      <div className={`scrollTop ${show ? 'active' : ''}`} onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </>
  );
};

export default ScrollTop;
