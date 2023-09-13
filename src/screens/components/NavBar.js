import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import Logo from "../../assets/Logo.svg";

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
const NavBar = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      console.log("Authentication state changed:", user);
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.");
      });
  };
  return (
    <nav style={props.style} className="navbar">
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
        {!user && (
          <>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/signin" onClick={handleSignout}>
              Sign out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
