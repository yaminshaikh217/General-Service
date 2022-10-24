import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from '../assets/avatarsvg.svg'

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const clientDetails = [
    {
      name: 'Khusal Dayala',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    }, {
      name: 'Mohini Puajara',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    }, {
      name: 'Raju shree',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    }, {
      name: 'Meet shah',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    }, {
      name: 'Harsh patel',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    }, {
      name: 'Rajan pathak',
      img: avatar,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis, iste sit aliquid error enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque?',
    },
  ]
  return (
    <>
      <section className="testimonial">
        <h2 className="genHeading text-center mb-5">Our Customers Feedback</h2>
        <div className="container">
          <Slider {...settings}>
            {clientDetails.map((curr, idx) => {
              return (
                <div key={idx}>
                  <div className="testimonialSliders">
                    <i className="fa-solid fa-quote-left"></i>
                    <p className="feedback">{curr.description}</p>
                    <div className="d-flex align-items-center">
                      <div className="clientImage">
                        <img src={curr.img} alt="client" />
                      </div>
                      <h3 className="client">{curr.name}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Testimonial