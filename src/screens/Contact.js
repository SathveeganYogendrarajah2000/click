import { React, useState } from 'react';
import Footer from './components/Footer';
import '../css/contact.css';
import { db } from "../../src/firebase.js";
import { Timestamp, collection ,addDoc} from 'firebase/firestore';
//import NavBarStyled from "./components/NavBarStyled";
import NavBar from './components/NavBar';
import ContactUsImage from '../assets/images/contact-us_image.jpg';

function Contact() {
  // Define state variables for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [reason, setReason] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // get the current time of form filling
  const formFilled = Timestamp.now();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    try {
      // Check if any of the required fields are empty
      if (!name || !email || !contactnumber || !reason) {
        alert('Required Fields Incomplete. Please Fill.');
        return;
      }      
      else{
        // Create a customer support contact data object using form details
        const contactData = {
          customerName: name,
          customerEmail:email, 
          customerContactNum: contactnumber,
          reason: reason,
          formFilledTime: formFilled
        };
        //get reference to "customer_support" collection
        const contactRef = collection (db, "customer_support");
        // Add customer support contact data document to the "customer_support" collection
        await addDoc (contactRef, contactData);
        alert("Your contact information has been received. We will get in touch with you regarding your reason.");
      }
    }  
    catch (error) {
      alert("customer contact support information Adding Error. Please Retry.");
    }  
    // set the fields to their default values  
    setName('');
    setEmail('');
    setContactNumber('');
    setReason('');
    setIsButtonDisabled(false);
  }
  return (
    <div>
      <NavBar />
      <div className="contact_container">
        <img
          src={ContactUsImage}
          alt="contact us"
          width=" 100%"
          height="500px"
        />
        <div className="contact_midContainer">
          <div className="contact_contentContainer">
            <div>
              <h1 className="contact_contentHeading1">Contact Us at CLICK: </h1>
              <h4 className="contact_contentHeading4">
                Whether you have inquiries about our menu, book a reservation,
                or have any special requests, our staff is here to make your
                experience exceptional. Our dedicated team is always ready to
                assist you.{' '}
              </h4>
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
                disabled={isButtonDisabled}
                required
              />

              <input
                className="contact_formInput"
                type="email"
                id="email"
                value={email}
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
                disabled={isButtonDisabled}
                required
              />

              <input
                className="contact_formInput"
                type="text"
                id="contactnumber"
                value={contactnumber}
                placeholder="Your contact number"
                onChange={(e) => setContactNumber(e.target.value)}
                disabled={isButtonDisabled}
                required
              />

              <input
                className="contact_formInput"
                type="text"
                id="reason"
                value={reason}
                placeholder="Reason for contact"
                onChange={(e) => setReason(e.target.value)}
                disabled={isButtonDisabled}
                required
              />

              <div className="contact_buttonContainer">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isButtonDisabled}
                  className = {isButtonDisabled ? 'contact_submitDisabledButton' : 'contact_submitButton'}>
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
