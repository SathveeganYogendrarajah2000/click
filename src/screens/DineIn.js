import NavBarStyled from "./components/NavBar";
import ReservationForm from "./components/ReservationForm";
import "../css/ReservationForm.css";

import Dining from "../screens/subScreens/Dining";
//import Footer from "./components/Footer.js";

const DineIn = () => {
  return (
    <div>
      <div className="bookingContainer_hero">
        <NavBarStyled />
      </div>
      <div className="reservationForm_container">
        <Dining />
        <ReservationForm />
      </div>
    </div>
  );
};

export default DineIn;
