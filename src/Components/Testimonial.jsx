import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assets/avatarsvg.svg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const clientDetails = [
    {
      name: "Darshan Prajapati",
      img: avatar,
      description:
        "The service is smooth and straightforward. The electrician guy was helpful.The work was so fast and at reasonable amount.I would recommend deal direct.",
    },
    {
      name: "Harshad Makwana",
      img: avatar,
      description:
        "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
    },
    {
      name: "Geetanjali Laroiya",
      img: avatar,
      description:
        "Excellent plumbing service. Was very friendly, patient and helpful in helping us find what we were looking for.I would recommend them unreservedly.",
    },
    {
      name: "Dipen Shah",
      img: avatar,
      description:
        "A fantastic service! Great  support from beginning to end of the process. The team are really informed and go the extra mile at every stage.",
    },
  ];
  return (
    <>
      <section className="testimonial">
        <h2 className="genHeading text-center mb-5">Our Customers Feedback</h2>
        <div className="container">
          <div className="whiteBg">
            <Slider {...settings}>
              {clientDetails.map((curr, idx) => {
                return (
                  <div key={idx}>
                    <div className="testimonialSliders">
                      <div className="clientImage">
                        <img src={curr.img} alt="client" />
                      </div>
                      <p className="feedback">{curr.description}</p>
                      <h3 className="client">{curr.name}</h3>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
