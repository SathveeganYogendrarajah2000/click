import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { collection, query, where, getDocs } from "@firebase/firestore";

const CheckoutPage = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [roomDetails, setRoomDetails] = useState({
    name: "Sample Room Name",
    type: "Suite",
    checkInDate: "2023-09-15",
    checkOutDate: "2023-09-20",
    adults: 2,
    children: 1,
    pricePerNight: 167,
  });

  const roomsRef = collection(db, "rooms");

  const roomQuery = query(roomsRef, where("roomID", "==", roomId));

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const querySnapshot = await getDocs(roomQuery);
        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          if (docSnap.exists()) {
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
              <div className="checkout-container_roomDetails_container">
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
              </div>
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
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="customerName"
              className="checkout-container_customerDetails_label"
            >
              Name:
            </label>
            <input
              type="text"
              id="customerName"
              className="checkout-container_customerDetails_input"
              value={roomDetails.name}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, name: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="customerType"
              className="checkout-container_customerDetails_label"
            >
              Type:
            </label>
            <input
              type="text"
              id="customerType"
              className="checkout-container_customerDetails_input"
              value={roomDetails.type}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, type: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="checkInDate"
              className="checkout-container_customerDetails_label"
            >
              Check-in Date:
            </label>
            <input
              type="date"
              id="checkInDate"
              className="checkout-container_customerDetails_input"
              value={roomDetails.checkInDate}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, checkInDate: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="checkOutDate"
              className="checkout-container_customerDetails_label"
            >
              Check-out Date:
            </label>
            <input
              type="date"
              id="checkOutDate"
              className="checkout-container_customerDetails_input"
              value={roomDetails.checkOutDate}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, checkOutDate: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="adults"
              className="checkout-container_customerDetails_label"
            >
              Adults:
            </label>
            <input
              type="number"
              id="adults"
              className="checkout-container_customerDetails_input"
              value={roomDetails.adults}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, adults: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="children"
              className="checkout-container_customerDetails_label"
            >
              Children:
            </label>
            <input
              type="number"
              id="children"
              className="checkout-container_customerDetails_input"
              value={roomDetails.children}
              onChange={(e) =>
                setRoomDetails({ ...roomDetails, children: e.target.value })
              }
            />
          </div>
          <div className="checkout-container_customerDetails_inputSec">
            <label
              htmlFor="pricePerNight"
              className="checkout-container_customerDetails_label"
            >
              Price per Night:
            </label>
            <input
              type="number"
              id="pricePerNight"
              className="checkout-container_customerDetails_input"
              value={roomDetails.pricePerNight}
              onChange={(e) =>
                setRoomDetails({
                  ...roomDetails,
                  pricePerNight: e.target.value,
                })
              }
            />
          </div>
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
