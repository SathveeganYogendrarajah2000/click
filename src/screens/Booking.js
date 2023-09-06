import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer.js";

import NavBar from "./components/NavBar";

const Booking = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="bookingContainer">
        <div className="bookingContainer_hero">
          {/* <div className="bookingContainer_hero_navbar">
            <div className="navbar_logo">
              <NavLink to="/">
                <h1>Logo</h1>
              </NavLink>
            </div>
            <div className="navbar_links">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/booking">Booking</NavLink>
              <NavLink to="/dinein">Dine In</NavLink>
            </div>
            <div className="navbar_otherlinks">
              <NavLink to="/signin">Sign in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </div>
          </div> */}
          <div className="bookingContainer_hero_searchbar">Search bar</div>
        </div>
        <div className="bookingContainer_content"></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Booking;
