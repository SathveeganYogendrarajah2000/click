import { Link, NavLink } from 'react-router-dom';
// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar_logo">
//         <Link to="/" className="navbar_active">
//           <h1>Logo</h1>
//         </Link>
//       </div>
//       <div className="navbar_links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/booking">Booking</Link>
//         <Link to="/dinein">Dine In</Link>
//       </div>
//       <div className="navbar_otherlinks">
//         <Link to="/signin">Sign in</Link>
//         <Link to="/signup">Sign up</Link>
//       </div>
//     </nav>
//   );
// };
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
