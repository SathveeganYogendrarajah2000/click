import React, { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";

import Overview from "./subScreens/Overview.jsx";
import GuestRooms from "./subScreens/GuestRooms.jsx";

import Experiences from "./subScreens/Experiences.jsx";
import SearchBar from "./components/SearchBar.jsx";

import { useSearchData } from "./components/SearchDataContext.js";

const Booking = () => {
  const { searchData } = useSearchData();
  const adults = searchData.adults;
  const children = searchData.children;

  const style = {
    flexDirection: "row",
    width: "100%",
    background:
      "linear-gradient(180deg,rgb(17, 6, 5) 0%,rgba(17, 6, 5, 0) 100%)",
    position: "absolute",
    top: 0,
  };
  return (
    <Fragment>
      <div className="bookingContainer">
        <div
          style={{
            backgroundImage: `url(${require('../assets/images/HeroForBooking.png')})`,
          }}
          className="bookingContainer_hero"
        >
          <NavBar style={style} />
          <SearchBar />
        </div>
        <div className="bookingContainer_content">
          <nav className="bookingContainer_content_nav">
            <div className="bookingContainer_content_nav_link">
              <NavLink
                to="/booking/guestrooms/standardrates"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Guest Rooms
              </NavLink>
            </div>
            <div className="bookingContainer_content_nav_link">
              <NavLink
                to="/booking/overview"
                className="bookingContainer_content_nav_text-wrapper"
              >
                FAQS
              </NavLink>
            </div>

            <div className="bookingContainer_content_nav_link bookingContainer_content_nav_last-link">
              <NavLink
                to="/booking/experiences"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Experiences
              </NavLink>
            </div>
          </nav>
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route
              path="/guestrooms/*"
              element={<GuestRooms adult={adults} child={children} />}
            />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Booking;
