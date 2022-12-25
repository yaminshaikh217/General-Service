import Navbar from "../Navbar";
import Footer from "../Footer";
import demo from "../../assets/electrician.png";
import sink from "../../assets/sink.png";
import { useEffect } from "react";
import ScrollTop from "../ScrollTop.jsx";

const AirContioner = () => {
  let arr = [
    {
      title: "Deep Clean AC Services",
    },
    {
      title: "Window/split Repair",
    },
    {
      title: "Install/Uninstall AC",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <ScrollTop hide={true} removeFromDom="d-none" />
      <Navbar />
      <section className="electrician">
        <div className="container">
          <div className="heroElec">
            <div>
              <h2>Air Condition</h2>
              <p>
                Experience the cooling breeze of AC on a super hot summer
                afternoon with our 360°AC services.
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
                  <p>{curr.title}</p>
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
                    <h2>Deep Clean AC Services </h2>
                    <ul>
                      <li>
                        Best for ACs that haven’t been serviced for the last 6
                        months
                      </li>
                      <li>Deep dust removal powered by jet technology</li>
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
                    <button>
                      Add <i className="fa-solid fa-plus ms-2"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">What’s Included?</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service Diagnosis</h4>
                        <p>
                          Before we roll up our sleeves, we conduct a
                          comprehensive check for cleaning.
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Deep Cleaning</h4>
                        <p>
                          Get clear crystal filters + deep dust removal for
                          indoor & outer units.
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Post-service Checks</h4>
                        <p>
                          The job really ends when we ensure your AC is working
                          like a new one!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="mainList">
                  <div>
                    <h2>Window/split Repair</h2>
                    <ul>
                      <li>Accurate & In-depth diagnosis of AC damages</li>
                      <li>Get on-site quotation assessment</li>
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
                    <button>
                      Add <i className="fa-solid fa-plus ms-2"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">What’s Included?</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Damage Diagnosis</h4>
                        <p>
                          Don’t know what’s exactly the problem? That’s what we
                          are here for!
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Effective Repairing</h4>
                        <p>
                          Based on the issues found, our experts implement the
                          right repairs.
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Post-repair services</h4>
                        <p>
                          So that you don’t have to worry about cleaning the AC
                          and surroundings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="mainList">
                  <div>
                    <h2>Install/Uninstall AC</h2>
                    <ul>
                      <li>Right measurements for installation & drilling</li>
                      <li>Gas leakage checking, if required</li>
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
                    <button>
                      Add <i className="fa-solid fa-plus ms-2"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <h3 className="incTxt">What’s Included?</h3>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Pre-service Inspection</h4>
                        <p>
                          Inspecting AC, checking wall measurements & quotation.
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Installation/Uninstalltion</h4>
                        <p>
                          Uninstallation/Installations of AC with drilling,
                          wiring connection, & pipe fixing.
                        </p>
                      </div>
                    </div>
                    <div className="includeContent">
                      <div className="detailImg">
                        <img src={sink} alt="electrician" />
                      </div>
                      <div>
                        <h4>Post-service checks</h4>
                        <p>
                          Ensuring proper cooling & functioning of the AC
                          followed by cleaning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------  FAQ  --------------- */}
              <h2 className="mt-4">Frequently Asked Question</h2>
              <div className="accordion-item">
                <div>
                  <div>
                    <button
                      className="viewD faqBtn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      What are the AC repair charges in Ahmedabad?
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <ul className="faq">
                      <li>
                        We provide our services starting at X, which may change
                        based on your requirements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div>
                  <div>
                    <button
                      className="viewD faqBtn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      What if I want some other services not mentioned in the
                      list?
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    <ul className="faq">
                      <li>
                        You can always call us and we can provide you with
                        custom services based on your requirements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div>
                  <div>
                    <button
                      className="viewD faqBtn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      What are the payment options available?
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    <ul className="faq">
                      <li>
                        You can make on-site payments with all popular UPI
                        payment options or in cash.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="rightListing">
              <div className="saveCards">
                <i className="fa-solid fa-tags"></i>
                Save 10% on every order
              </div>
              <div className="saveCards">
                <i className="fa-solid fa-tags"></i>
                Save 10% on every order
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AirContioner;
