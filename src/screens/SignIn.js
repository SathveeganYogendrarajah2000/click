import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "firebase/auth"; // for google sign in // TODO:

import Logo from "../assets/Logo.svg";
import Google from "../assets/google.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // TODO: implement firebase signin
  const handleSignIn = async () => {
    try {
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      // Sign-in successful, you can redirect to the home page or perform other actions.
      console.log("Sign-in successful");
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  // TODO: implement firebase google signin
  const handleGoogleSignIn = async () => {
    try {
      // const provider = new firebase.auth.GoogleAuthProvider();
      // await firebase.auth().signInWithPopup(provider);
      // Sign-in successful, you can redirect to the home page or perform other actions.
      console.log("Google Sign-in successful");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      navigate("/signup");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="frame">
      <div className="container">
        <header className="container_header">
          <img className="container_header_logo" alt="Logo" src={Logo} />
          <div className="container_header_heading">
            <p className="container_header_heading_text">
              Log in to your account
            </p>
            <div className="container_text-wrapper">
              <p className="container_text-wrapper_div">
                Welcome back! Please enter your details.
              </p>
            </div>
          </div>
        </header>
        <form className="container_content-2">
          <div className="container_content-2_form">
            <div className="container_content-2_form_form-item">
              <div className="container_content-2_form_label">
                <div className="container_text-wrapper">
                  <label
                    htmlFor="email"
                    className="container_content-2_form_text-2"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="container_content-2_form_form-item_input">
                <input
                  id="email"
                  className="container_content-2_form_form-item_input_input-base"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="container_content-2_form_form-item-2">
              <div className="container_content-2_form_label">
                <div className="container_text-wrapper">
                  <label
                    htmlFor="password"
                    className="container_text-wrapper_text-2"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="container_content-2_form_form-item-2_password">
                <input
                  id="password"
                  className="container_content-2_form_form-item-2_password_input-2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="container_content-2_row">
            <div className="container_content-2_row_components-checkbox">
              {/* <div className="container_content-2_row_components-checkbox_wrapper"> */}
              {/* <div className="container_content-2_row_components-checkbox_wrapper_checkbox-input"> */}
              <input
                id="rememberMe"
                type="checkbox"
                className="container_content-2_row_components-checkbox_wrapper"
              />
              {/* </div> */}
              {/* </div> */}
              <div className="container_text-wrapper">
                <label
                  htmlFor="rememberMe"
                  className="container_content-2_form_text-2"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="container_text-wrapper">
              <div className="container_text-wrapper_text-3">
                Forgot password
              </div>
            </div>
          </div>
          <div className="container_content-2_actions">
            <button
              className="container_content-2_actions_button container_text-wrapper"
              onSubmit={handleSignIn}
            >
              {/* <div className="container_text-wrapper">
                <div className="text-4"> */}
              Sign in
              {/* </div>
              </div> */}
            </button>
            <button
              className="container_content-2_actions_button-medium"
              onSubmit={handleGoogleSignIn}
            >
              <div className="container_content-2_actions_button-medium_icon">
                <img
                  className="container_content-2_actions_button-medium_icon_img"
                  alt="Icon"
                  src={Google}
                />
              </div>
              <div className="container_text-wrapper">
                <div className="container_text-wrapper_text-5">
                  Sign in with Google
                </div>
              </div>
            </button>
          </div>
        </form>
        <div className="container_row-2">
          <div className="container_text-wrapper">
            <div className="container_text-wrapper_div">
              Don't have an account?
            </div>
          </div>

          <div className="container_text-wrapper" onClick={handleSignUp}>
            <div className="container_text-wrapper_text-6">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
