import React from 'react'

const Chooseus = () => {
    return (
        <>
            <section className="services chooseus" id="serviceId">
                <h2 className="genHeading text-center">Why Choose Us</h2>
                <div className="container">
                    <div className="choose-box">
                        <div className="chooseusCard">
                            <i className="fa-solid fa-clipboard-check"></i>
                            <p>Connects you to Verified and Trained Technicians.</p>
                        </div>
                        <div className="chooseusCard">
                            <i className="fa-solid fa-address-card"></i>
                            <p>Offers Impeccable Customer Support</p>
                        </div>
                        <div className="chooseusCard">
                            <i className="fa-solid fa-shield-halved"></i>
                            <p>Guarantees Secure Transactions</p>
                        </div>
                        <div className="chooseusCard">
                            <i className="fa-solid fa-thumbs-up"></i>
                            <p>Provides High-quality,Reliability and Safety</p>
                        </div>
                        <div className="chooseusCard">
                            <i className="fa-solid fa-money-check-dollar"></i>
                            <p>Ensure Cost-effectiveness</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chooseus