import { React, useState } from "react";
import Footer from "./components/Footer";
import "../css/contact.css"
import contactUs from "../assets/images/contact-us-concept.jpg"
//import NavBarStyled from "./components/NavBarStyled";
import NavBar from "./components/NavBar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [reason, setReason] = useState("");

  // Function to handle form submission
  function handleSubmit() {
    setName("");
    setEmail("");
    setContactNumber("");
    setReason("");
  }
  return (
    <div>
      <NavBar />
      <img src={contactUs} alt="contact us" width=" 100%" height="600px" />
      <div className="contact_midContainer">     
        <div className="contact_contentContainer">
          
          <div>
            <h1 className="contact_contentHeading1">Contact Us at CLICK: </h1>
            <h4 className="contact_contentHeading4">Whether you have inquiries about our menu, book a reservation,
                or have any special requests, our staff is here to make your experience exceptional.
                Our dedicated team is always ready to assist you. </h4>
          </div>
        </div>  
        
          <div className="contact_formContainer">
            <form className="contact_form">
              <h2 className="contact_formHeading">Contact Customer Support</h2>
              <input
                className="contact_formInput"
                type="text"
                id="name"
                value={name}
                placeholder="Your full name"
                onChange={(e) => setName(e.target.value)}
                required
              />
                          
              <input
                className="contact_formInput"
                type="email"
                id="email"
                value={email}
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
                        
              <input
                className="contact_formInput"
                type="text"
                id="contactnumber"
                value={contactnumber}
                placeholder="Your contact number"
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
                    
              <input
                className="contact_formInput"
                type="text"
                id="reason"
                value={reason}
                placeholder="Reason for contact"
                onChange={(e) => setReason(e.target.value)}
                required
              />
            
              <div className="contact_buttonContainer">
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="contact_submitButton"
                >
                  Send Now
                </button>
              </div>
              
            </form>
          </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
