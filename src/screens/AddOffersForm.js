import {React, useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddOfferForm = () => {
  const [offerStartDate, setOfferStartDate] = useState("");
  const [offerEndDate, setOfferEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [percentage, setPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [offerType, setOfferType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //add offer data to database
    try {
      const offerData = {
        offerStartDate: offerStartDate,
        offerEndDate: offerEndDate,
        description: description,
        percentage:parseInt(percentage),
        price: parseFloat(price),
        offerType: offerType
      };

      await addDoc(collection(db, "offer_details"), offerData);

      // Clear form fields after submission
      setOfferStartDate("");
      setOfferEndDate("");
      setPrice("");
      setPercentage("");
      setDescription("");
      setOfferType("");

      //show a success message to the user
      alert("offer details added successfully!");
    } 
    catch (error) {
      alert("Error adding offer details: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Add Order Details</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label style={{ marginBottom: "10px" }}>
          Offer start date:
          <input
            type="date"
            value={offerStartDate}
            onChange={(e) => setOfferStartDate(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Offer end date:
          <input
            type="date"
            value={offerEndDate}
            min={offerStartDate}
            onChange={(e) => setOfferEndDate(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          percentage:
          <input
            type="number"
            min={0}
            max={100}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Offer type:
          <select
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">Select a type</option>
            <option value="Dining">Dining</option>
            <option value="Room Booking">Room Booking</option>
          </select>
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Offer 
        </button>
      </form>
    </div>
  );
};

export default AddOfferForm;
