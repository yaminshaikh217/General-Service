import about from "../assets/about.png";
import { aboutAnim } from "../utils/gsap";
import { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  useEffect(() => {
    // aboutAnim();
  }, []);
  return (
    <>
      <section className="about" id="abouts">
        <div className="container">
          <div className="evenCols targetCounter">
            <div>
              {/* <h3>ABOUT US</h3> */}
              <h2>ABOUT US</h2>
              <h5>
                Fair Deal is on a mission to reach all households and commercial
                places and make them shine like a diamond while also maintaining
                the crystal of the diamond.
              </h5>
              <p>
                Think of any of your cleaning & maintenance requirements, and we
                will be at your doorsteps within a few minutes. Get world-class
                services from our professionally trained workers who are the
                best at what they do and are equipped with modern tools and
                equipment.
              </p>
              <p>
                Relax and enjoy your life, by leveraging our home cleaning,
                plumbing, AC maintenance, pest control, RO cleaning & electric
                services.
              </p>
              <p>
                We know it can be difficult to find that perfect match for small
                repair & maintenance work, and that’s why we have got you the
                Fair Deal!{" "}
              </p>
              <p>The best part? All of these are at affordable prices. </p>
            </div>
            <div className="d-flex-jcc-alc">
              <div className="autoNumBox">
                <div>
                  <CountUp end={1000} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Service Provide</p>
                </div>
                <div>
                  <CountUp end={175} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Customer</p>
                </div>
                <div>
                  <CountUp end={4} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Rating</p>
                </div>
                <div>
                  <CountUp end={60} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Vendors</p>
                </div>
                <div>
                  <CountUp end={7} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>

                  <p>Locations</p>
                </div>
                <div>
                  <CountUp end={98} redraw={true} suffix="%">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 ref={countUpRef} className="counter-numbers" />
                      </VisibilitySensor>
                    )}
                  </CountUp>

                  <p>Satisfaction Ration</p>
                </div>
              </div>

              {/* <div className="progresBox">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
