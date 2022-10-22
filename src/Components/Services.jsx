import plumber from '../assets/plumber.png'
import ac from '../assets/ac.png'
import electrician from '../assets/electrician.png'
import pest from '../assets/pest.png'
import cleaning from '../assets/cleaning.png'
import ro from '../assets/ro.png'

const Services = () => {
  const serviceDetail = [
    {
      img: plumber,
      title: 'Plumbing',
      description: 'There are many different types of plumbing systems, including pipes, pumps, valves, faucets, fixtures, and drains. A plumber is someone who specializes in repairing, installing, and maintaining these systems.',
    }, {
      img: ac,
      title: 'Air Conditioner Repairing',
      description: 'The air conditioning technicians install, inspect, maintain, and repair air conditioner. They ventilate equipment and controls making sure they operate efficiently. They perform regular maintenance work on cooling units.',
    }, {
      img: electrician,
      title: 'Electrician',
      description: 'Our Electrician are expert in installing, maintaining, and repairing electrical control, wiring, and lighting systems. Reading technical diagrams and blueprints. Performing general electrical maintenance.',
    }, {
      img: cleaning,
      title: 'Cleaning',
      description: 'Dusting cabinets, cupboards, showcases, walls, underneath mattresses, behind tapestries and picture frames. Cleaning kitchens in order to make sure that no eating areas are ever unhygienic.',
    }, {
      img: pest,
      title: 'Pest Control',
      description: 'Our Technician is responsible for identifying and applying chemicals or manual solutions to eliminate pests. They also use tools like traps that are designed specifically.',
    }, {
      img: ro,
      title: 'RO Cleaning',
      description: 'Get Your RO Water Purifier Service by Certified Experienced Technicians in Ahmedabad. RO Routine Service, RO Repair, RO Installation, Tank Cleaning, TDS Check & Filter Change.',
    },
  ]
  return (
    <>
      <section className="services">
        <h2 className="genHeading text-center">Our Services</h2>
        <div className="container">
          <div className="cardContainer">
            {
              serviceDetail.map((curr, idx) => {
                return (
                  <div className="cards" key={idx}>
                    <div className="img">
                      <img src={curr.img} alt={curr.title} />
                    </div>
                    <div className="content">
                      <h3 className="heading">{curr.title}</h3>
                      <p className="description">{curr.description}</p>
                    </div>
                    <div className="content d-flex mt-auto">
                      <button>Read More <i className="fa-solid fa-arrow-right-long ms-2"></i></button></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
