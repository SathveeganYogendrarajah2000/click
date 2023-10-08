import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.js";

import Dropdown from "react-dropdown";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [verificationMethod, setVerificationMethod] = useState("email");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const navigate = useNavigate();
  // const nodemailer = require("nodemailer");

  // // Create a transporter to send emails (you should configure this with your email service)
  // const transporter = nodemailer.createTransport({
  //   service: "Gmail", // Specify your email service
  //   auth: {
  //     user: "your-email@gmail.com", // Your email address
  //     pass: "your-email-password", // Your email password
  //   },
  // });

  const generateRandomVerificationCode = () => {
    const characters = "0123456789";
    const codeLength = 6;
    let code = "";

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    return code;
  };

  // TODO: Implement this function after setting up Firebase
  const sendVerificationCode = async (code, email) => {
    try {
      // // Define email content
      // const mailOptions = {
      //   from: "your-email@gmail.com", // Sender's email address
      //   to: email, // Recipient's email address
      //   subject: "Verification Code", // Email subject
      //   text: `Your verification code is: ${code}`, // Email body
      // };
      // // Send the email
      // transporter.sendMail(mailOptions, (error, info) => {
      //   if (error) {
      //     console.error("Error sending verification code:", error);
      //   } else {
      //     console.log("Verification code sent successfully:", info.response);
      //   }
      // });

      console.log("Verification code sent successfully:", code);
    } catch (error) {
      console.error("Error sending verification code:", error.message);
    }
  };

  const handleSendVerification = () => {
    // Generate and send verification code
    const code = generateRandomVerificationCode();
    setVerificationCode(code);
    sendVerificationCode(code, mobileOrEmail);
    setVerificationSent(true);
  };

  const handleResendVerification = () => {
    setVerificationSent(false);
    setMobileOrEmail("");
  };

  const handleVerifyCode = (enteredCode) => {
    if (enteredCode === verificationCode) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, mobileOrEmail, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;

        const docRef = addDoc(collection(db, "users"), {
          user_id: userId,
          firstName: firstName,
          lastName: lastName,
          role: "customer",
        });
        // console.log("Document written with ID: ", docRef.id);

        // console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="signUp">
        <div className="signUp_registerTitle">
          <div className="signUp_registerTitle_headingJoin">CLICK</div>
          <p className="signUp_registerTitle_headingToEnjoy">
            “Unlock Exclusive Delights: Sign Up to Experience Personalized
            Dining, Effortless Reservations, and Seamless Culinary Adventures
            with CLICK!”
          </p>
        </div>

        <form className="signUp_form">
          <div className="signUp_form_formGroup-1">
            <div className="signUp_form_label">
              <label htmlFor="nameInput1">First Name / Given Name *</label>
            </div>

            <input
              className="signUp_form_nameInput"
              id="nameInput1"
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="signUp_form_formGroup-2">
            <div className="signUp_form_label">
              <label htmlFor="nameInput2">Family Name / Last Name * </label>
            </div>

            <input
              id="nameInput2"
              type="text"
              required
              className="signUp_form_nameInput"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="signUp_form_formGroup-3">
            <div className="signUp_form_label">
              <label>Mobile / Email *</label>
            </div>

            <div className="signUp_form_formGroup-3_inputField">
              <label
                htmlFor="email"
                className="signUp_form_formGroup-3_inputField_dropdownSelect"
              >
                <Dropdown
                  options={["E-mail", "Mobile"]}
                  placeholder={"E-mail"}
                />
              </label>
              <input
                type="text"
                id="email"
                className="signUp_form_nameInput signUp_form_formGroup-3_inputField_input"
                value={mobileOrEmail}
                onChange={(e) => {
                  setMobileOrEmail(e.target.value);
                }}
              />
              <button
                className="signUp_form_formGroup-3_inputField_btn"
                onClick={handleSendVerification}
                disabled={verificationSent}
              >
                {verificationSent ? "Sent" : "Send"}
              </button>
            </div>
          </div>
          <div className="signUp_form_formGroup-4">
            <div className="signUp_form_label">
              <label htmlFor="input3">Verification *</label>
            </div>
            <input
              className="signUp_form_nameInput"
              id="input3"
              type="text"
              required
              placeholder="Enter Verification Code"
              onChange={(e) => {
                handleVerifyCode(e.target.value);
              }}
            />
            <div
              className="signUp_form_formGroup-4_tips-title"
              onClick={handleResendVerification}
            >
              Not received verification code?
            </div>
          </div>
          <div className="signUp_form_formGroup-5">
            <div className="signUp_form_label">
              <label htmlFor="password">Password *</label>
            </div>
            <input
              className="signUp_form_nameInput"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div className="signUp_form_formGroup-5_info">
              <p className="signUp_form_formGroup-5_info_your-password-must">
                * Your password must contain at least 8 characters, with a
                combination of English letters (a - z, A - Z)
                <br />
                and numeric digits (0 - 9). At least one of the characters must
                be a numeric digit.
              </p>
            </div>
          </div>
          <div className="signUp_form_policy">
            <input
              className="signUp_form_policy_checkbox"
              type="checkbox"
              id="policy"
            />
            <label htmlFor="policy">
              I have read and agree to the CLICK Hotel Terms and Conditions
            </label>
          </div>
          <button
            className="signUp_form_sl-btn-normal"
            type="submit"
            onClick={handleSignup}
            disabled={submitDisabled}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
