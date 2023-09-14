// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../firebase.js";
// import { collection, getDoc, doc } from "firebase/firestore";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   // Function to fetch user data
//   const fetchUserData = async () => {
//     try {
//       const user = auth.currentUser; // Get the current user

//       if (user) {
//         const userDocRef = doc(db, "users", user.uid); // Reference to the user document
//         const userDocSnap = await getDoc(userDocRef); // Fetch the user document

//         if (userDocSnap.exists()) {
//           // If the user document exists, set the data to state
//           setUserData(userDocSnap.data());
//         } else {
//           console.log("User document does not exist.");
//         }
//       } else {
//         console.log("User is not authenticated.");
//       }

//       setLoading(false); // Set loading to false after data is fetched
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData(); // Fetch user data when the component mounts
//   }, []);

//   return (
//     <div>
//       <NavBar />

//       <div className="userProfile">
//         <div className="userProfile_heading">
//           <h2>
//             Welcome to Your Profile, {userData ? userData.firstName : ""}!
//           </h2>
//         </div>

//         {loading ? (
//           <p>Loading user data...</p>
//         ) : userData ? (
//           <div className="userProfile_data">
//             <p>First Name: {userData.firstName}</p>
//             <p>Last Name: {userData.lastName}</p>
//             {/* Add more user details here */}
//           </div>
//         ) : (
//           <p>User data not found.</p>
//         )}

//         <button
//           className="userProfile_logout-btn"
//           onClick={() => auth.signOut()}
//         >
//           Sign Out
//         </button>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default UserProfile;

// UserProfile.js (Parent Component)

import React from "react";

const UserProfile = () => {
  return (
    <>
      <NavBar />
      <div className="user-profile">
        <ProfileHeader />
        <div className="user-profile-content">
          <UserInfo />
          <UserPosts />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ProfileHeader = () => {
  return (
    <header className="profile-header">
      <img
        className="profile-header-avatar"
        src="profile-avatar.jpg" // Replace with the URL to the user's profile picture
        alt="User Avatar"
      />
      <h1 className="profile-header-username">Username</h1>
      <p className="profile-header-bio">User Bio</p>
    </header>
  );
};

const UserInfo = () => {
  return (
    <div className="user-info">
      <h2 className="user-info-heading">User Information</h2>
      <ul className="user-info-list">
        <li>
          <strong>Name:</strong> John Doe
        </li>
        <li>
          <strong>Email:</strong> john.doe@example.com
        </li>
        <li>
          <strong>Location:</strong> City, Country
        </li>
        <li>
          <strong>Joined:</strong> September 1, 2023
        </li>
      </ul>
    </div>
  );
};

const UserPosts = () => {
  return (
    <div className="user-posts">
      <h2 className="user-posts-heading">User Posts</h2>
      <div className="user-post">
        <img
          className="user-post-image"
          src="post-image.jpg" // Replace with the URL to a user's post image
          alt="User Post"
        />
        <p className="user-post-text">This is a user's post caption.</p>
      </div>
      {/* Add more posts */}
    </div>
  );
};

export default UserProfile;
