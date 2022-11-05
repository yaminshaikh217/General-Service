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
              <h2>Professional Team.</h2>
              <ul>
                <li>We do an impeccable job with your tasks and can guarantee you that we are the company you are looking for.</li>
                <li>All your work will be done by professionals, who will do a professional job.</li>
                <li>All your work will be done in time.</li>
                <li>We provide complete customer satisfaction through our prompt and reliable services.</li>
              </ul>
            </div>
          </div>
          <div className="detailEvenCols">
            <div className="lists">
              <h2>Quality Work.</h2>
              <ul>
                <li>Quality work for the fair price</li>
                <li>Treat people right</li>
                <li>Will clearly explain the services when asked</li>
                <li>We makes sure your house is safe and secure</li>
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
              <h2>Save Time and Money.</h2>
              <ul>
                <li>Free Home Estimates, No Hidden Fees</li>
                <li>We are Bonded and Licensed Contractors</li>
                <li>24/7 Emergency Service Available</li>
                <li>All Work is Guaranteed</li>
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
