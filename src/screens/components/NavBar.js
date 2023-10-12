import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import Logo from "../../assets/Logo.svg";

const NavBar = (props) => {
  const [user, setUser] = useState(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        // setUid('');
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.");
      });
  };
  return (
    <nav style={props.style} className="navbar">
      <div className="navbar_logo">
        <NavLink to="/">
          <img src={Logo} style={{ fill: "white" }} alt="logo" />
        </NavLink>
      </div>
      <div className="navbar_links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/booking/guestrooms/standardrates">Booking</NavLink>
        <NavLink to="/dinein">Dine In</NavLink>
      </div>
      <div className="navbar_otherlinks">
        {!user && (
          <>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/userprofile">Profile</NavLink>
            <NavLink to="/signin" onClick={handleSignout}>
              Sign out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
