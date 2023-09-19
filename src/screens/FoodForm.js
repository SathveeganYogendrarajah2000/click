import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddFoodForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [types, setTypes] = useState([]);

  // Available food types
  const availableTypes = [
    "beverage",
    "main course",
    "dessert",
    "appetizer",
    "soup",
    "bread",
    "other",
  ];

  // Fetch food types from Firestore
  useEffect(() => {
    setTypes(availableTypes);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add food item to Firestore
    try {
      const foodData = {
        name,
        price: parseFloat(price),
        type,
        url: imageUrl, // Use the provided URL for the image
      };

      await addDoc(collection(db, "foods"), foodData);

      // Clear form fields after submission
      setName("");
      setPrice("");
      setType("");
      setImageUrl("");

      // Optionally, you can show a success message to the user
      alert("Food item added successfully!");
    } catch (error) {
      console.error("Error adding food item: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Add Food Item</h2>
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
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">Select a type</option>
            {types.map((foodType, index) => (
              <option key={index} value={foodType}>
                {foodType}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginBottom: "10px" }}>
          Image URL:
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
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
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;
