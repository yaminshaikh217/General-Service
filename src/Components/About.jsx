import about from "../assets/about.png";
import { aboutAnim } from "../utils/gsap";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    aboutAnim();
  }, []);
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="evenCols">
            <div>
              {/* <h3>ABOUT US</h3> */}
              <h2>ABOUT US</h2>
              <h5>
                At fair Deal, we provide quality work at affordable prices. We
                are dedicated to excellent service and doing the job right.
              </h5>
              <p>
                Our skilled technicians always arrive on time and ready to serve
                you.We respond to all of your  requests promptly, with a
                friendly and courteous attitude.We have our own vehicle fleet
                and boast the most modern tools and equipment.You can rest easy
                knowing that our technicians are certified by the city.
              </p>
              {/* <div className="evenCols mt-5">
                <div>
                  <p className="num">88+</p>
                  <h4>Project Complete</h4>
                  <h5>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil possimus omnis doloribus?
                  </h5>
                </div>
                <div>
                  <p className="num">24%</p>
                  <h4>Great Results</h4>
                  <h5>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil possimus omnis doloribus?
                  </h5>
                </div>
              </div> */}
            </div>
            <div>
              {/* <img src={about} alt="About" /> */}
              <div className="progresBox">
                <div className="progressCards">
                  <div className="even">
                    <p>Results</p>
                    <p>90%</p>
                  </div>
                  <div className="progBar">
                    <div className="absBar"></div>
                  </div>
                </div>
                <div className="progressCards">
                  <div className="even">
                    <p>Quality</p>
                    <p>95%</p>
                  </div>
                  <div className="progBar">
                    <div className="absBar"></div>
                  </div>
                </div>
                <div className="progressCards">
                  <div className="even">
                    <p>Satisfaction</p>
                    <p>100%</p>
                  </div>
                  <div className="progBar">
                    <div className="absBar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
