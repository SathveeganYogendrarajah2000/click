import React, { Fragment, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import Footer from "./components/Footer.js";
import NavBarStyled from "./components/NavBarStyled.jsx";

import Overview from "./subScreens/Overview.jsx";
import GuestRooms from "./subScreens/GuestRooms.jsx";
import Offers from "./subScreens/Offers.jsx";
import Experiences from "./subScreens/Experiences.jsx";
import DineIn from "./DineIn.js";

const Booking = () => {
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    // Handle the search logic here
  };

  return (
    <Fragment>
      <div className="bookingContainer">
        <div className="bookingContainer_hero">
          <NavBarStyled />
          <div className="bookingContainer_hero_searchbar">
            <select
              className="bookingContainer_hero_searchbar_select-room"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="">Select Room Type</option>
              <option value="suite">Suite Room</option>
              <option value="single">Single Bedroom</option>
              <option value="double">Double Bedroom</option>
              {/* Add more room types */}
            </select>
            <div className="bookingContainer_hero_searchbar_date-picker-section">
              <div className="bookingContainer_hero_searchbar_date-picker-section-01">
                <label
                  className="bookingContainer_hero_searchbar_date-picker-section_label"
                  htmlFor="date-picker-1"
                >
                  Check-in
                </label>
                <input
                  id="date-picker-1"
                  className="bookingContainer_hero_searchbar_date-picker-section_picker"
                  type="date"
                  value={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                />
              </div>
              <div className="bookingContainer_hero_searchbar_date-picker-section-01">
                <label
                  className="bookingContainer_hero_searchbar_date-picker-section_label"
                  htmlFor="date-picker-2"
                >
                  Check-out
                </label>
                <input
                  id="date-picker-2"
                  className="bookingContainer_hero_searchbar_date-picker-section_picker"
                  type="date"
                  value={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                />
              </div>
            </div>

            <div className="bookingContainer_hero_searchbar_people-section">
              <div className="bookingContainer_hero_searchbar_people-section-item">
                <label style={{ color: "#fff" }}>Adults:</label>
                <input
                  className="bookingContainer_hero_searchbar_people-section_input-people"
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                />
              </div>
              <div className="bookingContainer_hero_searchbar_people-section-item">
                <label style={{ color: "#fff" }}>Children:</label>
                <input
                  className="bookingContainer_hero_searchbar_people-section_input-people"
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                />
              </div>
            </div>

            <button
              className="bookingContainer_hero_searchbar_check-button"
              onClick={handleSearch}
            >
              Check Availability
            </button>
          </div>
        </div>
        <div className="bookingContainer_content">
          <nav className="bookingContainer_content_nav">
            <div className="bookingContainer_content_nav_link">
              <NavLink
                to="/booking/overview"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Overview
              </NavLink>
            </div>
            <div className="bookingContainer_content_nav_link">
              <NavLink
                exact
                to="/booking/guestrooms"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Guest Rooms
              </NavLink>
            </div>

            <div className="bookingContainer_content_nav_link">
              <NavLink
                to="/booking/experiences"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Experiences
              </NavLink>
            </div>
            <div className="bookingContainer_content_nav_link bookingContainer_content_nav_last-link">
              <NavLink
                to="/dinein"
                className="bookingContainer_content_nav_text-wrapper"
              >
                Dine in
              </NavLink>
            </div>
          </nav>
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/guestrooms" element={<GuestRooms />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Booking;
