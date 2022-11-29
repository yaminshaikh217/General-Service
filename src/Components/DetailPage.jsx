// import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const DetailPage = ({ active, handleActive , checkValue}) => {
  // let location = useLocation();
  // let detail = location.state;
  useEffect(() => {
    active
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [active]);
  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      {/* <section className="detail">
        <div className="parent">
          <div className="detailEvenCols">
            <div>
              <div className="img">
                <img src={detail.img} alt="image" />
              </div>
            </div>
            <div className="lists">
              <h2>{detail.t1}.</h2>
              <ul>
              <li>{detail.d1}</li>
              </ul>
            </div>
          </div>
          <div className="detailEvenCols">
            <div className="lists">
            <h2>{detail.t2}.</h2>
              <ul>
              <li>{detail.d2}</li>
              </ul>
            </div>
            <div>
              <div className="img">
                <img src={detail.img1} alt="image" />
              </div>
            </div>
          </div>
          <div className="detailEvenCols">
            <div>
              <div className="img">
                <img src={detail.img2} alt="image" />
              </div>
            </div>
            <div className="lists">
            <h2>{detail.t3}.</h2>
              <ul>
                <li>{detail.d3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Footer /> */}
      <section className={`upDetailForm contact fixed ${active ? "show" : ""}`}>
        <i className="fa-solid fa-xmark" onClick={handleActive}></i>
        <h3 className="genHeading text-center">
          If you are interested in this service please fill the below form. 
        </h3>
        <div className="formContainer">
          <div className="right">
            <form>
              <div className="formEvenCols">
                <div className="input">
                  <input type="text" placeholder="Your Name" />
                </div>
              </div>
              <div className="formEvenCols">
                <div className="input">
                  <input type="number" placeholder="Your Phone" />
                </div>
              </div>
              <div className="formEvenCols">
                <div className="input">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="checkBox">
                <input type="checkbox" id="upcoming" value={checkValue} />
                <label htmlFor="upcoming">
                  Iam Interested in {checkValue} service.
                </label>
              </div>
              <button className="submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
