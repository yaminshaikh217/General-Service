import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DetailPage = () => {
  let location = useLocation();
  let detail = location.state;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  // let t1 =localStorage.getItem("t1");
  // let t2 = localStorage.getItem("t2");
  // let t3 =localStorage.getItem("t3");
  // let d1 = localStorage.getItem("d1");
  // let d2 =localStorage.getItem("d2");
  // let d3 = localStorage.getItem("d3");
  // let img =localStorage.getItem("img");
  // let img1 =localStorage.getItem("img1");
  // let img2 =localStorage.getItem("img2");
  return (
    <>
      <Navbar />
      <section className="detail">
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
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;
