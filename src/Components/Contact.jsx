
const Contact = () => {
  return (
    <>
      <section className="contact">
        <h3 className="genHeading text-center">Contact Us</h3>
        <div className="container">
          <div className="form">
            {/* <h2 className="borderBottom">Get in touch with us</h2> */}
            <div className="borderBottom">
              <h3><i className="fa-solid fa-phone"></i> Phone :</h3>
              <p className="info">+91 1234567890</p>
            </div>
            <div className="borderBottom">
              <h3><i className="fa-solid fa-envelope"></i> Email :</h3>
              <p className="info">name@hmail.com</p>
            </div>
            <div className="borderBottom">
              <h3><i className="fa-solid fa-location-dot"></i> Address :</h3>
              <p className="info">Pasar kambing 58 Suite X.110 Peterongan Semarang, USA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact