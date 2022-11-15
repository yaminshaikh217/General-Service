import Navbar from "../Navbar";
import Footer from "../Footer";
import demo from "../../assets/electrician.png";
import sink from "../../assets/sink.png";
import { useEffect } from "react";

const Electrician = () => {
  let arr = [0, 1, 2, 3, 4, 5,];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <section className="electrician">
        <div className="container">
          <div className="heroElec">
            <div>
              <h2>Electrician</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid fuga quo illum amet at veritatis?
              </p>
            </div>
            <div>
              <img src={demo} alt="Electrcian" />
            </div>
          </div>
          <div className="horizonLine"></div>
          <div className="serviceNav">
            {arr.map((curr, idx) => {
              return (
                <div key={idx}>
                  <div className="img">
                    <img src={sink} alt="Sink" />
                  </div>
                  <p>Sink</p>
                </div>
              );
            })}
          </div>
          {/* <div className="horizonLine"></div> */}
          {/* <div className="listing">
            <section className="detail">
              <div className="parent">
                <div className="detailEvenCols">
                  <div>
                    <div className="img">
                      <img src={sink} alt="image" />
                    </div>
                  </div>
                  <div className="lists">
                    <h2>Lorem.</h2>
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, autem.</li>
                    </ul>
                  </div>
                </div>
                <div className="detailEvenCols">
                  <div className="lists">
                    <h2>Lorem.</h2>
                    <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, autem.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="img">
                      <img src={sink} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="detailEvenCols">
                  <div>
                    <div className="img">
                      <img src={sink} alt="image" />
                    </div>
                  </div>
                  <div className="lists">
                    <h2>Lorem.</h2>
                    <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, autem.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
          <div className="serviceListing">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <div className="mainList">
                  <div>
                    <h2>Socket Replacement</h2>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                    </ul>
                    <button
                      className="viewD"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      View details
                    </button>
                  </div>
                  <div className="detailImg">
                    <img src={sink} alt="electrician" />
                    <button >Add <i className="fa-solid fa-plus ms-2"></i></button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">Included</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="mainList">
                  <div>
                    <h2>Socket Replacement</h2>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                    </ul>
                    <button
                      className="viewD"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      View details
                    </button>
                  </div>
                  <div className="detailImg">
                    <img src={sink} alt="electrician" />
                    <button >Add <i className="fa-solid fa-plus ms-2"></i></button>

                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">Included</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="mainList">
                  <div>
                    <h2>Socket Replacement</h2>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi, dicta.
                      </li>
                    </ul>
                    <button
                      className="viewD"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      View details
                    </button>
                  </div>
                  <div className="detailImg">
                    <img src={sink} alt="electrician" />
                    <button >Add <i className="fa-solid fa-plus ms-2"></i></button>

                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">Included</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service checks</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Adipisci quia architecto assumenda?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightListing">
              <div className="saveCards">
                <i className="fa-solid fa-tags"></i>
                Save 10% on every order
              </div>
              <div className="saveCards">
                <i className="fa-solid fa-tags"></i>
                Save 10% on every order
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Electrician;
