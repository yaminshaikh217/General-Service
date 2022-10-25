
const Contact = () => {
  return (
    <>
      <section className="contact">
        <h3 className="genHeading text-center">Contact Us</h3>
        <div className="container formContainer">
          <div className="form">
            {/* <h2 className="borderBottom">Get in touch with us</h2> */}
            <div className="borderBottom">
              <h3><i className="fa-solid fa-phone me-1"></i> Phone :</h3>
              <p className="info">+91 1234567890</p>
            </div>
            <div className="borderBottom">
              <h3><i className="fa-solid fa-envelope me-1"></i> Email :</h3>
              <p className="info">name@hmail.com</p>
            </div>
            <div className="borderBottom">
              <h3><i className="fa-solid fa-location-dot me-1"></i> Address :</h3>
              <p className="info">Pasar kambing 58 Suite X.110 Peterongan Semarang, USA</p>
            </div>
          </div>
          <div className="right">
            <form>
              <div className="formEvenCols">
                <div className="input">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input">
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="input">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="input">
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
              </div>
              <button className="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact