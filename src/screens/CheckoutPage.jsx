import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, auth } from "../firebase";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PaymentModal from "./components/PaymentModal";

import {
  collection,
  query,
  doc,
  where,
  getDocs,
  getDoc,
  addDoc,
  writeBatch,
  runTransaction,
  setDoc,
} from "@firebase/firestore";

import { useSearchData } from "./components/SearchDataContext";

const CheckoutPage = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  // Additional state to track payment success or failure
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const { searchData, setSearchData } = useSearchData();

  // Get a new write batch
  const batch = writeBatch(db);

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

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
    // Reset payment success state if needed
    setPaymentSuccessful(false);
  };

  // Function to handle the payment
  const handlePayment = async () => {
    // Update availability in the rooms collection
    // const roomDocRef = doc(db, "rooms", roomId);
    // const roomDocRef = doc(db, "rooms", roomData.roomID);
    // console.log("roomDocRef", roomDocRef);
    // const availabilityField = "availability";
    try {
      // await runTransaction(db, async (transaction) => {
      //   const roomDoc = await transaction.get(roomDocRef);
      //   console.log("roomDoc", roomDoc);
      //   if (roomDoc.exists()) {
      //     const currentAvailability = roomDoc.data()[availabilityField];
      //     if (currentAvailability > 0) {
      //       transaction.update(
      //         roomDocRef,
      //         availabilityField,
      //         currentAvailability - 1
      //       );
      //     } else {
      //       // Handle cases where availability is already 0
      //       throw new Error("No availability left for this room.");
      //     }
      //   } else {
      //     // Handle cases where the room document doesn't exist
      //     throw new Error("Room not found.");
      //   }
      // });

      // batch.update(roomDocRef, {
      //   availability: roomData.availability - 1,
      // });

      // await batch.commit();

      // Perform the booking by adding a new document in the 'bookings' collection
      await addDoc(collection(db, "bookings"), {
        roomID: roomId,
        userID: user.uid,
        checkInDate: searchData.checkInDate,
        checkOutDate: searchData.checkOutDate,
        adults: searchData.adults,
        children: searchData.children,
        totalPrice: calculateTotalPrice(),
      });

      // Update the payment success state
      setPaymentSuccessful(true);
    } catch (error) {
      // Handle errors related to availability or room not found
      console.error("Error handling payment:", error);
      setPaymentSuccessful(false);
    }
  };

  const initialCapacity = roomData ? roomData.capacity : 0;
  const [remainingCapacity, setRemainingCapacity] = useState(initialCapacity); // [adults, children]
  // console.log(initialCapacity,remainingCapacity);

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
      setRemainingCapacity(initialCapacity - newValue);
    }
  };

  const handleChildrenChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setSearchData((prevData) => ({
        ...prevData,
        children: newValue,
      }));
      setRemainingCapacity(initialCapacity - newValue);
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
              max={roomData ? roomData.capacity : 0}
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
              max={roomData ? roomData.capacity : 0}
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
