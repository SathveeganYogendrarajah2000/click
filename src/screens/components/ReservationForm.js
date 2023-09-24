import React, { useState } from "react";
import "../../css/ReservationForm.css";
import { db } from "../../firebase";
import Tables from "./Tables";
import { collection, getDocs, addDoc, FieldValue } from "firebase/firestore";



function ReservationForm() {
  // Define state variables for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

  const fetchAvailableTables= async (date, time)=> {
    const reservationsRef = db.collection("reservations");
  
    reservationsRef
      .where("date", "==", date)
      .where("time", "==", time)
      .get()
      .then((querySnapshot) => {
        const reservedTables = [];
        const tableRef = collection(db, "tables");
        //initially set availability of all tables to true
        const tableData =  getDocs(tableRef);
        tableData.updateDoc(tableData.availability = true);
        // fetch all reserved tables and put them in an array
        querySnapshot.forEach((doc) => {
          const resTableId = doc.data().tableId;
          reservedTables.push(resTableId);
          //set availability of reserved tables to false
          const tableData =  getDocs(tableRef.where(resTableId === doc.id));
          tableData.updateDoc(tableData.availability = false);
          
        });
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
      });
  }
  
  // Function to handle form submission
  const handleCheckAvailability = async (e) => {
    e.preventDefault();

    try {
      // Check if the user with the provided email already exists
      const userRef = collection(db,'users');
      const emailQuery = await getDocs(userRef.where('email', '==', email));
      if (emailQuery.empty) {
        alert("Your account is not found. Please sign up to continue.")
      } 
      else {
        // If the user already exists, use their existing document
        const emailRef = emailQuery.docs[0].ref;
        // Create a reservation object with a reference to the user
        const reservationData = {
          name,
          email: emailRef, // Reference to the user document
          contactnumber,
          guests,
          date,
          time,
          comments,
          timestamp: FieldValue.serverTimestamp()
        };
      
      // Add reservation data to the "reservations" collection
      const reservationRef = collection(db,'reservations')
      const docRef = await addDoc(reservationRef, reservationData);
      alert('Reservation added with ID: ', docRef.id); 
      fetchAvailableTables(date, time);

    }
    } 
    catch (error) {
      alert('Error:', error);
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
    <div className="reservationForm_container">
      <Tables/>

    
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
            type="text"
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
          onClick={handleCheckAvailability} 
        >
          Check Availability
        </button>
        
      </form>
    </div> 
  );
}

export default ReservationForm;
