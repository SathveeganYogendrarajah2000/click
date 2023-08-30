import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavBar;
