import expert1 from '../assets/expert1.png'

const Expert = () => {
    return (
        <>
            <section className='expert'>
                <h2 className="genHeading text-center">Meet Our Expert</h2>
                <div className="container">
                    <div className="cardContainer">
                        <div className="cards">
                            <div className="imgs">
                                <img src={expert1}  alt="expert" />
                            </div>
                            <div className="clippyCard">
                                <h3 className="heading">John Doe</h3>
                                <p className="description">Plumber</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expert