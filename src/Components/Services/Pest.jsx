import Navbar from "../Navbar";
import Footer from "../Footer";
import demo from "../../assets/electrician.png";
import sink from "../../assets/sink.png";
import { useEffect } from "react";
import ScrollTop from "../ScrollTop.jsx";

const Pest = () => {
    let arr = [
        {
            title: "Pest Control",
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
                            <h2>Pest Control</h2>
                            <p>
                                Make your premises free of all small yet horrifying pests that destroy the aesthetics & appearance of your home.
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
                                        <h2>Pest Control</h2>
                                        <ul>
                                            <li>In-depth inspection of the suspected area </li>
                                            <li>Tried-and-tested methods to kill & prevent pests  </li>
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
                                                <h4>Detailed Inspection</h4>
                                                <p>
                                                    A thorough inspection of affected areas before beginning the work
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Chemical Application </h4>
                                                <p>Applying treatment to kill pests & prevent further breeding  </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Clean-up</h4>
                                                <p>Cleaning of the surrounding if it has been dusted or unorganized
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>Electric Repair</h2>
                                        <ul>
                                            <li>Inspection to identify or confirm the stated problem</li>
                                            <li>
                                                Repairing of respective electronic device
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
                                                    Repairing of electronics supported by modern tools and machines
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Clean-up</h4>
                                                <p>
                                                    Cleaning of the surrounding if it has been dusted or unorganized
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="mainList">
                                    <div>
                                        <h2>Customized Requirements</h2>
                                        <ul>
                                            <li>Bespoke solutions based on your requirements </li>
                                            <li>Services by industry experts equipped with the latest tools & technology </li>
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
                                                <h4>Requirement Gathering  </h4>
                                                <p>
                                                    Tell us your unique and specific electric appliance service requirements
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>Custom Quotation </h4>
                                                <p>
                                                    Based on your requirements, our experts will give you personalized solutions & quotation
                                                </p>
                                            </div>
                                        </div>
                                        <div className="includeContent">
                                            <div className="detailImg">
                                                <img src={sink} alt="electrician" />
                                            </div>
                                            <div>
                                                <h4>100% Expertise & Experience </h4>
                                                <p>
                                                    Get service from the best industry experts to fulfill your requirements
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

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
                                            What are the pest control charges in Ahmedabad?
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

export default Pest;
