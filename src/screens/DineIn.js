import NavBarStyled from "./components/NavBar";
import "../css/ReservationForm.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Offers from "./subScreens/Offers.jsx";
import Dining from "./subScreens/Dining";

const DineIn = () => {
  return (
    <div>
      <div className="bookingContainer_hero">
        <NavBarStyled />
      </div>
      <nav className="bookingContainer_content_nav">
        <div className="bookingContainer_content_nav_link">
            <NavLink    
                to ='/dinein/offers'
                className="bookingContainer_content_nav_text-wrapper">
                Offers
            </NavLink>
        </div>
        <div className="bookingContainer_content_nav_link">
            <NavLink 
                to ='/dinein/'
                className="bookingContainer_content_nav_text-wrapper">
                DineIn
            </NavLink>
        </div>
        
      </nav> 
      <Routes >
          <Route path="/" element={<Dining />} />
          <Route path="/offers" element={<Offers />} />
          
      </Routes>
      
      <Footer/>
    </div>
  );
};

export default DineIn;
