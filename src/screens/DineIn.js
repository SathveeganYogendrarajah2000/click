import NavBarStyled from "./components/NavBar";
import ReservationForm from "./components/ReservationForm";
import "../css/ReservationForm.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Dining from "../screens/subScreens/Dining";
import Footer from "./components/Footer";
import Offers from "./subScreens/Offers.jsx";
import Contact from "./Contact";

const DineIn = () => {
  return (
    <div >
      <div className="bookingContainer_hero">
        <NavBarStyled />
      </div>
      <nav className="bookingContainer_content_nav">
        <div className="bookingContainer_content_nav_link">
            <NavLink    
                to ='/Offers'
                className="bookingContainer_content_nav_text-wrapper">
                Offers
            </NavLink>
        </div>
        <div className="bookingContainer_content_nav_link">
            <NavLink 
                to ='/Contact'
                className="bookingContainer_content_nav_text-wrapper">
                Contact
            </NavLink>
        </div>
      </nav> 
      <Routes >
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
      </Routes>
      <div className="reservationForm_container">
        <Dining />
        <ReservationForm />
      </div>
      <Footer/>
    </div>
  );
};

export default DineIn;
