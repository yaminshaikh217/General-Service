import carpenter from "../assets/carpenter.png";
import carpenter1 from "../assets/carpenter1.png";
import carpenter2 from "../assets/carpenter2.png";
import carwash from "../assets/carwash.png";
import carwash1 from "../assets/carwash1.png";
import carwash2 from "../assets/carwash2.png";
import event from "../assets/event.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import fabrication from "../assets/fabrication.png";
import fabrication1 from "../assets/fabrication1.png";
import fabrication2 from "../assets/fabrication2.png";
import movers from "../assets/movers.png";
import movers1 from "../assets/movers1.png";
import movers2 from "../assets/movers2.png";
import painting from "../assets/painting.png";
import painting1 from "../assets/painting1.png";
import painting2 from "../assets/painting2.png";
import photographer from "../assets/photographer.png";
import photographer1 from "../assets/photographer1.png";
import photographer2 from "../assets/photographer2.png";
import salon from "../assets/salon.png";
import salon1 from "../assets/salon1.png";
import salon2 from "../assets/salon2.png";
import { Link } from "react-router-dom";

const UpcomingServices = () => {
  const serviceDetail = [
    {
      img: carpenter,
      img1: carpenter1,
      img2: carpenter2,
      title: "Carpenter",
      t1: "Custom Work",
      t2: "Engineering Capacities",
      t3: "Finishing",
      d1: "Premium quality products, organic wood and unique designs are artfully crafted and combined in exclusive collection for our customers.",
      d2: "We ensure that your product is made of the highest quality wood. We mill all our own lumber and pay attention to details throughout the entire creation process.",
      d3: "Not only do we value the process of manufacturing and assembly, we realize the importance of a quality finish.",
    },
    {
      img: carwash,
      img1: carwash1,
      img2: carwash2,
      t1: "Save time",
      t2: "Save money",
      t3: "Save water",
      d1: "Hours of your precious time are wasted driving and queuing at your local car wash or garage. It's time to value your time.",
      d2: "Our competitive pricing, alongside our mobile approach, aims to save each of our customers money.",
      d3: "Each Dropless wash saves our customers over 150 litres of water. Using nano solutions that break down and encapsulate dirt, our skilled operators give your car that perfect shine again",
      title: "Car Washing",
    },
    {
      img: painting,
      img1: painting1,
      img2: painting2,
      title: "Painting",
      t1: "Painting & Staining",
      t2: "Millwork",
      t3: "Drywall",
      d1: "Nothing makes your home, office, or shop look new and cleaner than a fresh paint job. In addition, make your dull and worn wood really catch the eye with a new shine.",
      d2: "Smooth curves, and sharp lines; attention to detail is key when painting millwork. Let us give your room an extra aesthetic layer to really impress your guests.",
      d3: "Got some embarrassing holes in your wall? After our team gets that patched up for you, you won’t even be able to tell there was anything wrong to begin with. We also offer complete hang, tape and either texture or smooth wall finishes.",
    },
    {
      img: fabrication,
      img1: fabrication1,
      img2: fabrication2,
      title: "Fabrication",
      t1: "Professional Support",
      t2: "Precision",
      t3: "Creativity",
      d1: "Starting from the first contact, throughout the process of consultations, ending with the completion of the order and delivery. You can count on us.",
      d2: "In every cut and angle, materials match project specs to ensure adherence timelines and sequencing.",
      d3: "Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.",
    },
    {
      img: photographer,
      img1: photographer1,
      img2: photographer2,
      title: "Photography",
      t1: "Picture Perfect",
      t2: "Commercial Photography",
      t3: "Event Photography",
      d1: "Showcase your photographs with multiple presentations including full-screen slideshows, lightbox, and more. You upload high-res images and set a focal point",
      d2: "We are specializes in all types of commercial photography.  Our photographers know that professional imagery impacts on sales.  We can help give your business a visual identity through advertising imagery, corporate portraits, or product images.",
      d3: "We believe that on your big day we are telling a story. Capturing those special moments and emotions in a natural style are what we do best. Documenting your big day is an important decision, so with this in mind contact us today for further information on our service.",
    },
    {
      img: event,
      img1: event1,
      img2: event2,
      title: "Event Management",
      t1: "Creative Ideas",
      t2: "Professional Event Delivery",
      t3: "Manage Your Budget ",
      d1: "Creating a 'Wow!' factor is an essential part of making a memorable event. A good event company will have a strong creative team providing ideas for your event and will work with you to achieve an unforgettable end result.",
      d2: "An event management company can take care of all the organisation and tasks to deliver a successful event, allowing you to focus on the day and your guests. The true quality of the service will show if there is a problem. A good event management company will have contingencies in case plan A or B doesn’t work.",
      d3: "Your budget will be managed by an experienced event planner who will understand the costs involved and be able to provide estimates on any extras or changes in the event format or scope.",
    },
    {
      img: movers,
      img1: movers1,
      img2: movers2,
      title: "Movers & Packers",
      t1: "Inspection",
      t2: "Packing",
      t3: "Domestic & International",
      d1: "The professionals understand that what your belongings mean to you and the need for making the right records about the stuff. So, at the time, you will give the appointment; you will find that the representative will come and do the inspection for giving you the right estimation of the things. Also, you get the perfect inventory list that will help you in case anything will be missed during the move. The movers and packers will take care of the same and make yourself free from worries.",
      d2: "The movers and packers in Chennai have the expertise in packing and this way, they really play an important role to make your shifting easier. They also provide the materials and more that will be the need to perform the packing well. Along with the same, they give importance to the time of yours and make the schedules as per your preferences. Whenever you are available, they come to your place and pack the items outstandingly. ",
      d3: "We are well-known logistics service provider for packing and shifting of household stuff, office relocation and furniture",
    },
    {
      img: salon,
      img1: salon1,
      img2: salon2,
      title: "Salon - Man & Women",
      t1: "Hair",
      t2: "Beauty",
      t3: "Nails",
      d1: "We strive to provide everything you need create your vision on your clients hair. From bleach and colour to scissors, find everything you need for the hair side of your business with us.",
      d2: "From tanning to hair removal, massage to tinting. We have the salon beauty supplies you need to run your beauty business in the salon or on the road.",
      d3: "We know it takes the right tools to create the perfect manicure, that’s why have everything you need to run your business in one place. Find colours, tools and more with Salon Services.",
    },
  ];

  // const storeInfo = (e) => {
  //   localStorage.setItem("t1", serviceDetail[e.target.id].t1);
  //   localStorage.setItem("t2", serviceDetail[e.target.id].t2);
  //   localStorage.setItem("t3", serviceDetail[e.target.id].t3);
  //   localStorage.setItem("d1", serviceDetail[e.target.id].d1);
  //   localStorage.setItem("d2", serviceDetail[e.target.id].d2);
  //   localStorage.setItem("d3", serviceDetail[e.target.id].d3);
  //   localStorage.setItem("img", serviceDetail[e.target.id].img);
  //   localStorage.setItem("img1", serviceDetail[e.target.id].img1);
  //   localStorage.setItem("img2", serviceDetail[e.target.id].img2);
  // };
  return (
    <>
      <section className="upcomingServices">
        <h2 className="genHeading text-center"> Upcoming Services</h2>
        <div className="container">
          <div className="cardContainer">
            {serviceDetail.map((curr, idx) => {
              return (
                <Link to="/details" state={serviceDetail[idx]} key={idx}>
                  <div className="cards" key={idx}>
                    <div className="img position-relative">
                      <img src={curr.img} alt={curr.title} />
                      <div className="content">
                        <h3 className="heading">{curr.title}</h3>
                      </div>
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

export default UpcomingServices;
