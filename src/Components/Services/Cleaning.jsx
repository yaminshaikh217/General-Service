import Navbar from "../Navbar";
import Footer from "../Footer";
import demo from "../../assets/electrician.png";
import sink from "../../assets/sink.png";
import { useEffect } from "react";
import ScrollTop from "../ScrollTop.jsx";

const Cleaning = () => {
    let arr = [
        {
            title: "Sofa, Cushions & Carpet Cleaning ",
        },
        {
            title: "Toilet/Bathroom Cleaning",
        },
        {
            title: "Full Home/Kitchen Cleaning",
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
                            <h2>Cleaning </h2>
                            <p>
                                You are already dealing with enough tasks in your life but you don’t have to worry about cleaning - be it any, with Fair Deal!
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
                                        <h2>Sofa, Cushions & Carpet Cleaning</h2>
                                        <ul>
                                            <li>Remove dust and dirt particles with dry vacuuming</li>
                                            <li>Make your sofa shine with wet shampooing & Cleaning</li>
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
                                                <h4>Dry Vacuuming </h4>
                                                <p>
                                                    Elimination of accumulated dust particles, dirt, & debris from the targeted surface
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Shampooing + Wet Vacuuming </h4>
                                                <p>Sponging the sofa with shampoo followed by wet vacuuming & microfiber cloth wiping</p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Drying</h4>
                                                <p>
                                                    Let the sofa/cushion/carpet get dry before you use it and experience its newness!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>Toilet/Bathroom Cleaning </h2>
                                        <ul>
                                            <li>Removal of yellow, hard-to-remove stains & dirt</li>
                                            <li>Tile, floor, basin, cabinet & toilet pot cleaning </li>
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
                                                <h4>Floor Deep Cleaning</h4>
                                                <p>
                                                    Effective scrubbing to remove dirt, deposits & hard water stains
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Stain Removal </h4>
                                                <p>
                                                    Stain removal from floor tiles, washbasin, toilet pot, & mirror
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Finishing </h4>
                                                <p>
                                                    Drying of bathroom/toilet with multi-fiber cloth & freshener spraying
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>Full Home/Kitchen Cleaning</h2>
                                        <ul>
                                            <li>All-in-one cleaning including wall, ceiling, windows, door & furniture</li>
                                            <li>Stain removal along with goods removal & placing back</li>
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
                                                <h4>Floor, Wall, and Ceiling Cleaning </h4>
                                                <p>
                                                    Cleaning of the whole home with industrial machines & tools for ultra shine & smoothness
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Mattress & Curtain Cleaning</h4>
                                                <p>
                                                    Vacuum cleaning to give you fresh, neat & vibrant vibes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Far-Flung Areas & Corners </h4>
                                                <p>
                                                    Cleaning of tough areas like window grills, electric fittings & switchboards
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
                                            What are the home/commercial cleaning charges in Ahmedabad?
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
                                                We provide our services starting at X, which may change based on your requirements.
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
                                            What if I want some other services not mentioned in the list?
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
                                                You can always call us and we can provide you with custom services based on your requirements.
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
                                                You can make on-site payments with all popular UPI payment options or in cash.
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

export default Cleaning;
