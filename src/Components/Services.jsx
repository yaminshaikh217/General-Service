import ac from "../assets/ac.png";
import ac2 from "../assets/ac2.png";
import ac1 from "../assets/ac1.png";
import plumber from "../assets/plumber.png";
import plumber1 from "../assets/plumber1.png";
import plumber2 from "../assets/plumber2.png";
import cleaning from "../assets/cleaning3.png";
import cleaning1 from "../assets/cleaning1.png";
import cleaning2 from "../assets/cleaning2.png";
import electrician from "../assets/electrician3.png";
import electrician1 from "../assets/electrician1.png";
import electrician2 from "../assets/electrician2.png";
import ro from "../assets/ro.png";
import ro1 from "../assets/ro1.png";
import ro2 from "../assets/ro2.png";
import pest from "../assets/pest.png";
import pest1 from "../assets/pest1.png";
import pest2 from "../assets/pest2.png";
import DetailPage from "./DetailPage";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const serviceDetail = [
    {
      img: ac,
      img1: ac1,
      img2: ac2,
      title: "Air Conditioner",
      link: "airconditioner",
      description:
        "The air conditioning technicians install, inspect, maintain, and repair air conditioner. They ventilate equipment and controls making sure they operate efficiently. They perform regular maintenance work on cooling units.",
    },
    {
      img: cleaning,
      img1: cleaning1,
      img2: cleaning2,
      title: "Cleaning",
      link: "cleaning",
      description:
        "Starting from a full home, kitchen, sofa, cushion, carpet, bathroom, and toilet; clean everything that dulls your life because you deserve the only best!",
    },

    {
      img: electrician,
      img1: electrician1,
      img2: electrician2,
      title: "Electrician",
      link: "electrician",
      description:
        "Be it as small as changing a switchboard or something customized, our expert and experienced electricians are all there to help you.",
    },

    {
      img: pest,
      img1: pest1,
      img2: pest2,
      title: "Pest Control",
      link: "pest",
      description:
        "Say bye-bye to pests with our tried-and-tested methodology to give your the worry and shame-free life you deserve!.",
    },
    {
      img: plumber,
      img1: plumber1,
      img2: plumber2,
      link: "plumbing",
      title: "Plumbing",
      description:
        "Starting from pipeline installations to leakage and custom requirements, we help you with your all plumbing requirements! ",
    },

    {
      img: ro,
      img1: ro1,
      img2: ro2,
      title: "RO Cleaning",
      link: "ro-cleaning",
      description:
        "End-to-end water purifier services, inclusive of installation/uninstallation, check-up, repair, and maintenance! ",
    }, {
      img: ro,
      img1: ro1,
      img2: ro2,
      title: "Gas",
      link: "ro-cleaning",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  ",
    },
  ];
  return (
    <>
      <section className="services" id="serviceId">
        <h2 className="genHeading text-center">Our Services</h2>
        <div className="container">
          <div className="cardContainer">
            {serviceDetail.map((curr, idx) => {
              return (
                <Link to={`${curr.link}`} key={idx}>
                  <div className="cards" key={idx}>
                    <div className="img">
                      <img src={curr.img} alt={curr.title} />
                    </div>
                    <div className="content">
                      <h3 className="heading">{curr.title}</h3>
                      <p className="description">{curr.description}</p>
                    </div>
                    <div className="content d-flex mt-auto">
                      <button>
                        Read More
                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
