import NavBar from "./components/NavBar";
import "../css/ReservationForm.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Offers from "./subScreens/Offers.jsx";
import Dining from "./subScreens/Dining";

const DineIn = () => {
  const style = {
    flexDirection: "row",
    width: "100%",
    background:
      "linear-gradient(180deg,rgb(17, 6, 5) 0%,rgba(17, 6, 5, 0) 100%)",
    position: "absolute",
    top: 0,
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${require("../assets/images/HeroForBooking.png")})`,
        }}
        className="bookingContainer_hero"
      >
        <NavBar style={style} />
      </div>
      <nav className="bookingContainer_content_nav">
        <div className="bookingContainer_content_nav_link">
          <NavLink
            to="/dinein/offers"
            className="bookingContainer_content_nav_text-wrapper"
          >
            Offers
          </NavLink>
        </div>
        <div className="bookingContainer_content_nav_link">
          <NavLink
            to="/dinein/"
            className="bookingContainer_content_nav_text-wrapper"
          >
            DineIn
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dining />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default DineIn;
