import ContactPopup from "./ContactPopup";
import { useState } from "react";

const Contact = () => {
  const [hide, sethide] = useState(false);

  const showContact = () => sethide(!hide);
  return (
    <>
      <section className="contact" id="contactus">
        <h3 className="genHeading text-center">Contact Us</h3>
        <div className="container formContainer">
          <div className="form">
            <div className="borderBottom">
              <i className="fa-solid fa-phone me-1"></i>
              <div>
                <h3>Phone</h3>
                <a href="tel:+91 6359001001">
                  <p className="info">+91 6359001001</p>
                </a>
                <a href="tel:+91 6359002002">
                  <p className="info">+91 6359002002</p>
                </a>
              </div>
            </div>
            <div className="borderBottom">
              <i className="fa-solid fa-envelope me-1"></i>
              <div>
                <h3>Email</h3>
                <a href="mailto:name@gmail.com">
                  <p className="info">name@hmail.com</p>
                </a>
              </div>
            </div>
            <div className="borderBottom">
              <i className="fa-solid fa-location-dot me-1"></i>
              <div>
                <h3>Address</h3>
                <p className="info">
                  GALA HUB, South Bopal, Bopal, 
                </p>
                <p className="info">Ahmedabad, Gujarat 380058</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.806531312423!2d72.46289966542341!3d23.0308747717961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8d6e254e77%3A0x7afd0fa0f330289b!2sGala%20HUB!5e0!3m2!1sen!2sin!4v1667277811105!5m2!1sen!2sin"
            width={"100%"}
            height={"400px"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="contactBtn" onClick={showContact}>
            Get in touch <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </button>
        </div>
      </section>
      <ContactPopup active={hide} handleClick={showContact} />;
    </>
  );
};

export default Contact;
