import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { collection, getDoc, doc } from "firebase/firestore";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const user = auth.currentUser; // Get the current user

      if (user) {
        const userDocRef = doc(db, "users", user.uid); // Reference to the user document
        const userDocSnap = await getDoc(userDocRef); // Fetch the user document

        if (userDocSnap.exists()) {
          // If the user document exists, set the data to state
          setUserData(userDocSnap.data());
        } else {
          console.log("User document does not exist.");
        }
      } else {
        console.log("User is not authenticated.");
      }

      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  return (
    <div>
      <NavBar />

      <div className="userProfile">
        <div className="userProfile_heading">
          <h2>
            Welcome to Your Profile, {userData ? userData.firstName : ""}!
          </h2>
        </div>

        {loading ? (
          <p>Loading user data...</p>
        ) : userData ? (
          <div className="userProfile_data">
            <p>First Name: {userData.firstName}</p>
            <p>Last Name: {userData.lastName}</p>
            {/* Add more user details here */}
          </div>
        ) : (
          <p>User data not found.</p>
        )}

        <button
          className="userProfile_logout-btn"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
