import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const PaymentModal = ({ onClose, onPayment }) => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step

  const [paymentMethod, setPaymentMethod] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const [user, setUser] = useState(null);
  const [uid, setUid] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUid(user.uid);
      } else {
        setUser(null);
        setUid("");
      }
    });
    // console.log(user);
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);

        const roomData = [];
        querySnapshot.forEach((doc) => {
          roomData.push(doc.data());
        });

        if (roomData.length > 0) {
          const userData = roomData[0]; // Assuming there's only one matching user
          setUserDetails(userData);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [uid]);

  const handleNextStep = async () => {
    // Move to the next step when the user selects a payment method.
    setCurrentStep(2);
  };

  const handlePayment = () => {
    // Simulate payment processing (you can replace this with actual payment logic).
    // For this example, we consider it successful if all fields are filled.
    if (paymentMethod && cardNumber && expirationDate && cvv) {
      setPaymentSuccess(true);
      onPayment(); // You can replace this with actual payment processing.
    }
  };

  const resetPayment = () => {
    // Reset the payment process to the first step.
    setCurrentStep(1);
    setPaymentSuccess(false);
    setPaymentMethod("");
    setCardNumber("");
    setExpirationDate("");
    setCVV("");
  };

  return (
    <div className="payment-modal">
      <div className="payment-modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {currentStep === 1 ? (
          <>
            <h2>Select Payment Method</h2>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Visa"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Visa
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Mastercard"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Mastercard
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
              {/* Add more payment options here */}
            </div>

            <button onClick={handleNextStep}>Next</button>
          </>
        ) : currentStep === 2 && !paymentSuccess ? (
          <>
            <h2>Enter Card Details</h2>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="email@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Expiration Date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </div>

            <button onClick={handlePayment}>Pay</button>
            <button onClick={resetPayment}>Cancel</button>
          </>
        ) : (
          <>
            <h2>Payment Successful!</h2>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
