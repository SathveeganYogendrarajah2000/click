import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddRoomForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availability, setAvailability] = useState("");
  const [description, setDescription] = useState("");
  const [picturePath, setPicturePath] = useState("");
  const [roomID, setRoomID] = useState("");
  const [type, setType] = useState("");

  // Available room types
  const availableRoomTypes = [
    "KING/TWIN",
    "King",
    "Suite Room",
    "Single Bedroom",
    "Double Bedroom",
    "Family Room",
    "Luxury Suite",
    "Penthouse",
    // Add more room types here
  ];

  // Fetch room types from Firestore
  useEffect(() => {
    setType(availableRoomTypes[0]); // Set the default room type
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add room to Firestore
    try {
      const roomData = {
        name,
        price: parseFloat(price),
        capacity: parseInt(capacity),
        availability: parseInt(availability),
        description,
        picturePath,
        roomID,
        type,
      };

      await addDoc(collection(db, "rooms"), roomData);

      // Clear form fields after submission
      setName("");
      setPrice("");
      setCapacity("");
      setAvailability("");
      setDescription("");
      setPicturePath("");
      setRoomID("");
      setType(availableRoomTypes[0]);

      // Show a success message to the user
      alert("Room added successfully!");
    } catch (error) {
      console.error("Error adding room: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Add Room</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label style={{ marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          Capacity:
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Availability:
          <input
            type="number"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Picture Path:
          <input
            type="url"
            value={picturePath}
            onChange={(e) => setPicturePath(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Room ID:
          <input
            type="text"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">Select a type</option>
            {availableRoomTypes.map((roomType, index) => (
              <option key={index} value={roomType}>
                {roomType}
              </option>
            ))}
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
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
