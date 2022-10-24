import carpenter from '../assets/carpenter.png'
import carwash from '../assets/carwash.png'
import event from '../assets/event.png'
import fabrication from '../assets/fabrication.png'
import movers from '../assets/movers.png'
import painting from '../assets/painting.png'
import photographer from '../assets/photographer.png'
import salon from '../assets/salon.png'

const UpcomingServices = () => {
    const serviceDetail = [
        {
            img: carpenter,
            title: 'Carpenter',
        },
        {
            img: carwash,
            title: 'Car Washing',
        },
        {
            img: painting,
            title: 'Painting',
        },
        {
            img: fabrication,
            title: 'Fabrication',
        },
        {
            img: photographer,
            title: 'Photography',
        },
        {
            img: event,
            title: 'Event Management',
        },
        {
            img: movers,
            title: 'Movers & Packers',
        },
        {
            img: salon,
            title: 'Salon - Man & Women',
        },
    ]
    return (
        <>
            <section className="upcomingServices">
                <h2 className="genHeading text-center"> Upcoming Services</h2>
                <div className="container">
                    <div className="cardContainer">
                        {
                            serviceDetail.map((curr, idx) => {
                                return (
                                    <div className="cards" key={idx}>
                                        <div className="img position-relative">
                                            <img src={curr.img} alt={curr.title} />
                                            <div className="content">
                                                <h3 className="heading">{curr.title}</h3>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpcomingServices