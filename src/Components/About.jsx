import about from "../assets/about.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="evenCols">
            <div>
              <img src={about} alt="About" />
            </div>
            <div>
              <h3>ABOUT US</h3>
              <h2>We are the largest Business expert in Europe and Asia</h2>
              <p>
                Sorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="evenCols mt-5">
                <div >
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
