import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PaymentModal from "./components/PaymentModal";

import { collection, query, where, getDocs } from "@firebase/firestore";
import { useSearchData } from "./components/SearchDataContext";

const CheckoutPage = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);
  const navigate = useNavigate();

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  // Additional state to track payment success or failure
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
    // Reset payment success state if needed
    setPaymentSuccessful(false);
  };

  const handlePayment = () => {
    const paymentSuccess = true; // Replace with your actual logic
    setPaymentSuccessful(paymentSuccess);
  };

  const initialCapacity = roomData ? roomData.capacity : 0;
  // const [remainingCapacity, setRemainingCapacity] = useState(initialCapacity); // [adults, children]

  const { searchData, setSearchData } = useSearchData();

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
    if (!roomData) return 0;
    const checkIn = new Date(searchData.checkInDate);
    const checkOut = new Date(searchData.checkOutDate);
    const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24); // Calculate nights
    return numberOfNights * roomData.price;
  };

  const handleAdultsChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue > 0) {
      setSearchData((prevData) => ({
        ...prevData,
        adults: newValue,
      }));
      // setRemainingCapacity(initialCapacity - newValue);
    }
  };

  const handleChildrenChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setSearchData((prevData) => ({
        ...prevData,
        children: newValue,
      }));
      // setRemainingCapacity(initialCapacity - newValue);
    }
  };

  return (
    <>
      <NavBar />
      <div className="checkout-container">
        {/********** Customer Details ***********/}
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
              value={roomData ? roomData.name : "404: not found"}
              disabled
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
              value={roomData ? roomData.type : "404: not found"}
              disabled
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
              value={roomData ? searchData.checkInDate : "404: not found"}
              onChange={(e) =>
                setSearchData((prevData) => ({
                  ...prevData,
                  checkInDate: e.target.value,
                }))
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
              value={roomData ? searchData.checkOutDate : "404: not found"}
              onChange={(e) =>
                setSearchData((prevData) => ({
                  ...prevData,
                  checkOutDate: e.target.value,
                }))
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
              min={1}
              // max={roomData.capacity}
              id="adults"
              className="checkout-container_customerDetails_input"
              value={searchData.adults}
              onChange={handleAdultsChange}
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
              min={0}
              // max={roomData.capacity}
              id="children"
              className="checkout-container_customerDetails_input"
              value={searchData.children}
              onChange={handleChildrenChange}
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
              value={roomData ? roomData.price : "404: not found"}
              disabled
            />
          </div>
          <p className="checkout-container_customerDetails_totalPrice">
            Total Price: ${calculateTotalPrice()}
          </p>
          <div className="checkout-container_customerDetails_buttonSec">
            <button
              className="checkout-container_customerDetails_buttonSec_button"
              onClick={openPaymentModal}
            >
              Confirm Booking
            </button>
            <button
              className="checkout-container_customerDetails_buttonSec_button"
              onClick={() => {
                try {
                  navigate(`/booking/guestrooms/standardrates`);
                } catch (error) {
                  console.error("Error navigating:", error);
                }
              }}
            >
              Cancel
            </button>
          </div>
          {isPaymentModalOpen && (
            <PaymentModal
              onClose={closePaymentModal}
              onPayment={handlePayment}
              paymentSuccessful={isPaymentSuccessful}
            />
          )}
        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
