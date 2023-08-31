import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { auth } from "./firebase";

import Dropdown from "react-dropdown";

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

// ToDo: Implement this function after setting up Firebase
const sendVerificationCode = async (code) => {
  // try {
  //   const user = auth.currentUser;
  //   await user.sendEmailVerification({
  //     code,
  //     url: "https://your-website-url.com/verify", // Replace with your verification URL
  //   });
  //   console.log("Verification code sent successfully");
  // } catch (error) {
  //   console.error("Error sending verification code:", error.message);
  // }
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationMethod, setVerificationMethod] = useState("email");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const history = useHistory();

  const handleSendVerification = () => {
    // Generate and send verification code
    const code = generateRandomVerificationCode(); // Implement this function
    sendVerificationCode(code); // Implement this function
    setVerificationSent(true);
  };

  const handleVerifyCode = (enteredCode) => {
    if (enteredCode === verificationCode) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  // ToDo: Implement this function after setting up Firebase
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // const userCredential = await auth.createUserWithEmailAndPassword(
      //   mobileOrEmail,
      //   password
      // );
      // console.log("User registered successfully:", userCredential.user);
      // Save user's first name and last name to Firestore or other storage
      history.push("/login");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
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

        <div className="signUp_form">
          <div className="signUp_form_formGroup-1">
            <div className="signUp_form_label">
              <lable for="nameInput1">First Name / Given Name *</lable>
            </div>

            <input
              className="signUp_form_nameInput"
              id="nameInput1"
              type="text"
              required
            />
          </div>
          <div className="signUp_form_formGroup-2">
            <div className="signUp_form_label">
              <label for="nameInput2">Family Name / Last Name * </label>
            </div>

            <input
              id="nameInput2"
              type="text"
              required
              className="signUp_form_nameInput"
            />
          </div>
          <div className="signUp_form_formGroup-3">
            <div className="signUp_form_label">
              <label>Mobile / Email *</label>
            </div>

            <div className="signUp_form_formGroup-3_inputField">
              <div className="signUp_form_formGroup-3_inputField_dropdownSelect">
                <Dropdown
                  options={["E-mail", "Mobile"]}
                  placeholder={"E-mail"}
                />

                {/* <select name="verficationMethod" id="verficationMethod">
                  <option value="email">E-mail</option>
                  <option value="phone">Phone</option>
                </select> */}
              </div>
              <input
                type="text"
                className="signUp_form_nameInput signUp_form_formGroup-3_inputField_input"
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
              <label for="input3">Verification *</label>
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
            <div className="signUp_form_formGroup-4_tips-title">
              Not received verification code?
            </div>
          </div>
          <div className="signUp_form_formGroup-5">
            <div className="signUp_form_label">
              <label for="password">Password *</label>
            </div>
            <input
              className="signUp_form_nameInput"
              id="password"
              type="password"
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
            <label for="policy">
              I have read and agree to the CLICK Hotel Terms and Conditions
            </label>
          </div>
          <button
            className="signUp_form_sl-btn-normal"
            onClick={handleSignup}
            disabled={submitDisabled}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
