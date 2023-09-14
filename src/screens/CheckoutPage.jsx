import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { collection, getDoc, where } from "@firebase/firestore";
import { query } from "express";

const CheckoutPage = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);

  // Create a reference to the "rooms" collection
  const roomsRef = collection(db, "rooms");

  // Create a query to filter documents where the "roomID" field matches the roomId
  const roomQuery = query(roomsRef, where("roomID", "==", roomId));

  useEffect(() => {
    // Use getDoc to fetch the document that matches the query
    const fetchRoomData = async () => {
      try {
        const docSnap = await getDoc(roomQuery);
        if (docSnap.exists()) {
          // Document exists, set the data to state
          setRoomData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [roomQuery]);

  // Placeholder data for the checkout page
  const roomDetails = {
    name: "Sample Room Name",
    type: "Suite",
    checkInDate: "2023-09-15",
    checkOutDate: "2023-09-20",
    adults: 2,
    children: 1,
    pricePerNight: 167,
  };

  // Function to calculate the total price based on the number of nights
  const calculateTotalPrice = () => {
    const checkIn = new Date(roomDetails.checkInDate);
    const checkOut = new Date(roomDetails.checkOutDate);
    const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24); // Calculate nights
    return numberOfNights * roomDetails.pricePerNight;
  };
  return (
    <>
      <NavBar />
      <div className="checkout-container">
        <h1>Room Details</h1>
        <p>Name: {roomDetails.name}</p>
        <p>Type: {roomDetails.type}</p>
        <p>Check-in Date: {roomDetails.checkInDate}</p>
        <p>Check-out Date: {roomDetails.checkOutDate}</p>
        <p>Adults: {roomDetails.adults}</p>
        <p>Children: {roomDetails.children}</p>
        <p>Price per Night: ${roomDetails.pricePerNight}</p>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button className="confirm-button">Confirm Booking</button>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
