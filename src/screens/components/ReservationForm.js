import React, { useState } from "react";
import "../../css/ReservationForm.css";
import { db } from "../../firebase";
import { collection,  addDoc, FieldValue } from "firebase/firestore";



function ReservationForm() {
  // Define state variables for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

   
  // Function to handle form submission
  const handleReserveNow = async (e) => {
    e.preventDefault();

    try {      
      // Create a reservation data object using form details
      const reservationData = {
        customerName: name,
        customerEmail:email, 
        customerContactNum: contactnumber,
        numOfGuests: guests,
        resDate:date,
        resTime:time,
        comment:comments,
        timestamp: FieldValue.serverTimestamp()
      };
      
      // Add reservation data to the "reservations" collection
      const reservationRef = collection(db,'reservations');
      const docRef = await addDoc(reservationRef, reservationData);
      alert('Reservation added with ID: ', docRef.id); 
    }
    
    catch (error) {
      alert("Error Updating Reservation. Try Again.", error);
    }
     
    // set the fields to their default values  
    setName("");
    setEmail("");
    setContactNumber("");
    setGuests(1);
    setDate("");
    setTime("");
    setComments("");
  }


  // return the customer reservation form with various fields
  return (
      <form className="reservation-form" >
        <h2 className="reservationForm_heading">Reservation</h2>

        <div>
          <label className="reservationForm_label" htmlFor="name">
            Your Name
          </label>
          <input
            className="reservationForm_input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="email">
            Your Email
          </label>
          <input
            className="reservationForm_input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="contactnumber">
            Contact Number
          </label>
          <input
            className="reservationForm_input"
            type="text"
            id="contactnumber"
            value={contactnumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="guests">
            Number of Guests
          </label>
          <input
            className="reservationForm_input"
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="date">
            Date of Reservation
          </label>
          <input
            className="reservationForm_input"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="time">
            Reservation Time
          </label>
          <input
            className="reservationForm_input"
            type= "time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="comments">
            Comments
          </label>
          <input
            className="reservationForm_inputComment"
            type="text"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="reservation-formButton"
          onClick={handleReserveNow} 
        >
          Reserve Now
        </button>
        
      </form>
   
  );
}

export default ReservationForm;
