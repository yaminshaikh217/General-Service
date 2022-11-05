import ac from "../assets/ac.png";
import ac2 from "../assets/ac2.png";
import ac1 from "../assets/ac1.png";
import plumber from "../assets/plumber.png";
import plumber1 from "../assets/plumber1.png";
import plumber2 from "../assets/plumber2.png";
import cleaning from "../assets/cleaning.png";
import cleaning1 from "../assets/cleaning1.png";
import cleaning2 from "../assets/cleaning2.png";
import electrician from "../assets/electrician.png";
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
      img: plumber,
      img1: plumber1,
      img2: plumber2,
      title: "Plumbing",
      description:
        "There are many different types of plumbing systems, including pipes, pumps, valves, faucets, fixtures, and drains. A plumber is someone who specializes in repairing, installing, and maintaining these systems.",
    },
    {
      img: ac,
      img1: ac1,
      img2: ac2,
      title: "Air Conditioner Repairing",
      description:
        "The air conditioning technicians install, inspect, maintain, and repair air conditioner. They ventilate equipment and controls making sure they operate efficiently. They perform regular maintenance work on cooling units.",
    },
    {
      img: electrician,
      img1: electrician1,
      img2: electrician2,
      title: "Electrician",
      description:
        "Our Electrician are expert in installing, maintaining, and repairing electrical control, wiring, and lighting systems. Reading technical diagrams and blueprints. Performing general electrical maintenance.",
    },
    {
      img: cleaning,
      img1: cleaning1,
      img2: cleaning2,
      title: "Cleaning",
      description:
        "Dusting cabinets, cupboards, showcases, walls, underneath mattresses, behind tapestries and picture frames. Cleaning kitchens in order to make sure that no eating areas are ever unhygienic.",
    },
    {
      img: pest,
      img1: pest1,
      img2: pest2,
      title: "Pest Control",
      description:
        "Our Technician is responsible for identifying and applying chemicals or manual solutions to eliminate pests. They also use tools like traps that are designed specifically.",
    },
    {
      img: ro,
      img1: ro1,
      img2: ro2,
      title: "RO Cleaning",
      description:
        "Get Your RO Water Purifier Service by Certified Experienced Technicians in Ahmedabad. RO Routine Service, RO Repair, RO Installation, Tank Cleaning, TDS Check & Filter Change.",
    },
  ];
  return (
    <>
      <section className="services" id="service">
        <h2 className="genHeading text-center">Our Services</h2>
        <div className="container">
          <div className="cardContainer">
            {serviceDetail.map((curr, idx) => {
              return (
                <Link to="/details" state={serviceDetail[idx]} key={idx}>
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
