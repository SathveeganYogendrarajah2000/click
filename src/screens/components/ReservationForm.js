import React, { useState } from "react";
import "../../css/ReservationForm.css";

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
  function handleReserveNow() {
    setName("");
    setEmail("");
    setContactNumber("");
    setGuests(1);
    setDate("");
    setTime("");
    setComments("");
  }

  return (
    <form className="reservation-form">
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
      <div >
        <button
          type="submit"
          onSubmit={handleReserveNow}
          style={{
            color: "#ffffff",
            width: "100%",
            backgroundColor: "#f10909",
            borderRadius: "6px",
            height: "35px",
          }}
        >
          Reserve Now
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;
