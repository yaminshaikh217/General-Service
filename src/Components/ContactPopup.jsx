import { useEffect } from "react";
const ContactPopup = ({ active, handleClick }) => {
  useEffect(() => {
    active ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "scroll");
  }, [active]);

  return (
    <>
      <section className={`contact fixed ${active ? "show" : ""}`}>
        <i className="fa-solid fa-xmark" onClick={() => handleClick()}></i>
        <h3 className="genHeading text-center">Contact Us</h3>
        <div className=" formContainer">
          <div className="right">
            <form>
              <div className="formEvenCols">
                <div className="input">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input">
                  <input type="number" placeholder="Your Phone" />
                </div>
              </div>
              <div className="formEvenCols">
                <div className="input">
                  {/* <input type="text" placeholder="Service" /> */}
                  <select name="service" id="service">
                    <option value="">Select services</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="ac">Air Conditioner Repairing</option>
                    <option value="electrician">Electrician</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="pest">Pest Control</option>
                    <option value="ro">RO Cleaning</option>
                  </select>
                </div>
                <div className="input">
                  <input type="text" placeholder="Location" />
                </div>
              </div>
              <div className="input">
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
              </div>
              <button className="submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPopup;
