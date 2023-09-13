import React, { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import Footer from "./components/Footer.js";
import NavBar from "./components/NavBarStyled.jsx";
import useSearch from "./components/useSearch.jsx";

import Overview from "./subScreens/Overview.jsx";
import GuestRooms from "./subScreens/GuestRooms.jsx";
import Experiences from "./subScreens/Experiences.jsx";
import Searchbar from "./components/Searchbar.jsx";

const Booking = () => {
  const {
    roomType,
    setRoomType,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    adults,
    setAdults,
    children,
    setChildren,
    handleSearch,
  } = useSearch();

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
            backgroundImage: `url(${require("../assets/images/HeroForBooking.jpeg")})`,
          }}
          className="bookingContainer_hero"
        >
          <NavBar style={style} />
          <Searchbar
            roomType={roomType}
            setRoomType={setRoomType}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            onSearch={handleSearch}
          />
        </div>
        <div className="bookingContainer_content">
          <nav className="bookingContainer_content_nav">
            <div className="bookingContainer_content_nav_link">
              <NavLink
                exact
                to="/booking"
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
              path="/*"
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
