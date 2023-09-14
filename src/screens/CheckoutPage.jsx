import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { collection, query, where, getDocs } from "@firebase/firestore";

const CheckoutPage = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);

  // Create a reference to the "rooms" collection
  const roomsRef = collection(db, "rooms");

  // Create a query to filter documents where the "roomID" field matches the roomId
  const roomQuery = query(roomsRef, where("roomID", "==", roomId));

  useEffect(() => {
    // Use getDocs to fetch documents that match the query
    const fetchRoomData = async () => {
      try {
        const querySnapshot = await getDocs(roomQuery);
        if (!querySnapshot.empty) {
          // Get the first document from the query snapshot
          const docSnap = querySnapshot.docs[0];
          if (docSnap.exists()) {
            // Document exists, set the data to state
            setRoomData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No matching documents!");
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
        <div className="checkout-container_roomDetails">
          {roomData ? (
            <>
              <h1 className="checkout-container_roomDetails_name">
                {roomData.name}
              </h1>
              <p className="checkout-container_roomDetails_price">
                Price: ${roomData.price} per night
              </p>
              <p className="checkout-container_roomDetails_type">
                Type: {roomData.type}
              </p>
              <p className="checkout-container_roomDetails_capacity">
                Capacity: {roomData.capacity} guests
              </p>
              <p className="checkout-container_roomDetails_description">
                Description: {roomData.description}
              </p>
              <img
                className="checkout-container_roomDetails_img"
                src={roomData.picturePath}
                alt={roomData.name}
              />
            </>
          ) : (
            <p className="checkout-container_roomDetails_loading">
              Loading room data...
            </p>
          )}
        </div>

        <div className="checkout-container_customerDetails">
          <h1 className="checkout-container_customerDetails_title">
            Room Details
          </h1>
          <p className="checkout-container_customerDetails_name">
            Name: {roomDetails.name}
          </p>
          <p className="checkout-container_customerDetails_type">
            Type: {roomDetails.type}
          </p>
          <p className="checkout-container_customerDetails_checkIN">
            Check-in Date: {roomDetails.checkInDate}
          </p>
          <p className="checkout-container_customerDetails_checkOut">
            Check-out Date: {roomDetails.checkOutDate}
          </p>
          <p className="checkout-container_customerDetails_adults">
            Adults: {roomDetails.adults}
          </p>
          <p className="checkout-container_customerDetails_children">
            Children: {roomDetails.children}
          </p>
          <p className="checkout-container_customerDetails_price">
            Price per Night: ${roomDetails.pricePerNight}
          </p>
          <p className="checkout-container_customerDetails_totalPrice">
            Total Price: ${calculateTotalPrice()}
          </p>
          <button className="checkout-container_customerDetails_confirm-button">
            Confirm Booking
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
