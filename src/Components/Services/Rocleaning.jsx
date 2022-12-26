import Navbar from "../Navbar";
import Footer from "../Footer";
import demo from "../../assets/electrician.png";
import sink from "../../assets/sink.png";
import { useEffect } from "react";
import ScrollTop from "../ScrollTop.jsx";

const Rocleaning = () => {
    let arr = [
        {
            title: "RO Installation/Uninstallation",
        },
        {
            title: "RO Repair Services",
        },
        {
            title: "Full-Service Package ",
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
                            <h2>RO Cleaning</h2>
                            <p>
                                Your body consists of 75% water! Ensure you’re drinking healthy water with our RO services.
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
                    <div className="serviceListing">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>RO Installation/Uninstallation</h2>
                                        <ul>
                                            <li>Installtion/Uninstalltion of the RO Machine</li>
                                            <li>7-days of after-service support</li>
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
                                            Book <i className="fa-solid fa-plus ms-2"></i>
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
                                                <h4>Installtion/Uninstalltion</h4>
                                                <p>
                                                    Professional and damage-free installation/uninstallation of RO machine
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>After-installation check-up  </h4>
                                                <p>Ensure everything is in working condition & ready-to-use </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>7-days Support</h4>
                                                <p>If there’s anything wrong with the installation, our experts are there for you!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>RO Repair Services </h2>
                                        <ul>
                                            <li>On-site visit & Inspection to identify the issue</li>
                                            <li>An accurate solution to get things on track </li>
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
                                            Book <i className="fa-solid fa-plus ms-2"></i>
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
                                                <h4>Inspection </h4>
                                                <p>Identifying the cause of damage followed by an accurate solution </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Repairing </h4>
                                                <p>
                                                    Leakage repair of galvanized iron or PVC pipes with either joint pipe or MSeal (Charged extra)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>100% Professionalism </h4>
                                                <p>
                                                    We use only high-quality spare parts & procedures to serve you the best!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>Full-Service Package </h2>
                                        <ul>
                                            <li>Make your RO like a recently-purchased one </li>
                                            <li>Best for the RO that hasn’t been serviced in a year </li>
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
                                            Book <i className="fa-solid fa-plus ms-2"></i>
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
                                                <h4>Inspection  </h4>
                                                <p>
                                                    Our experts will identify the issues in your RO
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Filter Installation  </h4>
                                                <p>
                                                    Install sediment, spun, and carbon filters along with RO Membrane & Housing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>After-service check-up  </h4>
                                                <p>
                                                    Ensure proper water flow, water quality & functional condition of other parts
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
                                            className="viewD faqBtn collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFour"
                                            aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseFour"
                                        >
                                            What are the RO  charges in Ahmedabad?
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
                                            className="viewD faqBtn collapsed"
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
                                            className="viewD faqBtn collapsed"
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

export default Rocleaning;
