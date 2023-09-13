import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const NavBarStyled = () => {
  const [user, setUser] = useState(null);
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

  return (
    <div className="bookingContainer_hero_navbar navbar">
      <div className="navbar_logo">
        <NavLink to="/">
          <img src={Logo} style={{ fill: "white" }} alt="logo" />
        </NavLink>
      </div>
      <div className="navbar_links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/booking/guestrooms/standardrates">Booking</NavLink>
        <NavLink to="/dinein">Dine In</NavLink>
      </div>
      <div className="navbar_otherlinks">
        {user && (
          <>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </>
        )}
        {!user && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/signin">Sign out</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBarStyled;
