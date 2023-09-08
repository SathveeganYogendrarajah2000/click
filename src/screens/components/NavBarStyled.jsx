import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const NavBarStyled = () => {
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
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/dinein">Dine In</NavLink>
      </div>
      <div className="navbar_otherlinks">
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  );
};

export default NavBarStyled;
