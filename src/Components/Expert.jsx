import expert1 from '../assets/expert1.png'
import expert2 from '../assets/expert2.png'
import expert3 from '../assets/expert3.png'


const Expert = () => {
    const serviceDetail = [
        {
            img: expert1,
            title: 'Plumber',
            description: 'John Smith',
        }, {
            img: expert3,
            title: 'Cleaner',
            description: 'Max waller',
        }, {
            img: expert2,
            title: 'Electrician',
            description: 'Raju bhai',
        },
    ]
    return (
        <>
            <section className='expert'>
                <h2 className="genHeading text-center">Meet Our Expert</h2>
                <div className="container">
                    <div className="cardContainer">
                        {serviceDetail.map((curr, idx) => {
                            return (
                                <div className="cards" key={idx}>
                                    <div className="imgs">
                                        <img src={curr.img} alt="expert"/>
                                    </div>
                                    <div className="clippyCard">
                                        <h3 className="heading">{curr.description}</h3>
                                        <p className="description m-0">{curr.title}</p>
                                        <ul className='socialIcons'>
                                            <li><i className="fa-brands fa-square-whatsapp"></i></li>
                                            <li><i className="fa-solid fa-phone"></i></li>
                                            <li><i className="fa-brands fa-facebook"></i></li>
                                            <li><i className="fa-solid fa-envelope"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expert