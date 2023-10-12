import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import bedType from "../../assets/images/bedType.png";
import maximumOccoumpany from "../../assets/images/maximumOccoumpany.png";
import { useSearchData } from "./SearchDataContext";

const RoomBookingCard = (props) => {
  const { searchData } = useSearchData();
  const [showTooltip, setShowTooltip] = useState(false); // State to control the tooltip visibility

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleMouseEnter = () => {
    if (!searchData.inputFieldUpdated || !user) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    position: "absolute",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px",
    borderRadius: "4px",
    top: "100%", // Position below the button
    left: "50%", // Centered horizontally
    transform: "translateX(-50%)", // Centered horizontally
    zIndex: 1, // Ensure it's above other elements
  };

  return (
    <div className="roombookingcardContainer">
      <div className="roombookingcardContainer_image">
        <img
          className="roombookingcardContainer_image_picture-web"
          alt={props.name}
          src={props.imagePath}
        />
      </div>
      <div className="roombookingcardContainer_details">
        <div className="roombookingcardContainer_details_c1">
          <div className="roombookingcardContainer_details_c1_heading">
            {props.name}
          </div>
          <p className="roombookingcardContainer_details_c1_description">
            {props.description}
          </p>
          <div className="roombookingcardContainer_details_c1_row1">
            <div className="roombookingcardContainer_details_c1_row1_feature">
              <img
                className="roombookingcardContainer_details_c1_row1_feature_img"
                alt="Bedtype png"
                src={bedType}
              />
              <div className="roombookingcardContainer_details_c1_row1_feature_text">
                {props.type}
              </div>
            </div>
            <div className="roombookingcardContainer_details_c1_row1_feature">
              <img
                className="roombookingcardContainer_details_c1_row1_feature_img"
                alt="Maximumoccoumpany"
                src={maximumOccoumpany}
              />
              <div className="roombookingcardContainer_details_c1_row1_feature_text">
                Up to {props.capacity} guests
              </div>
            </div>
          </div>
          <div className="roombookingcardContainer_details_c1_row2">
            Double glazed windows to ensure its soundproof
          </div>
        </div>
        <div className="div-room-rate-wrap roombookingcardContainer_details_c2">
          <div className="roombookingcardContainer_details_c2_row1">
            <div className="roombookingcardContainer_details_c2_row1_01">
              $ {props.price}*
            </div>
            <div className="roombookingcardContainer_details_c2_row1_02">
              Starting Rate/Night
            </div>
          </div>

          <div
            className="roombookingcardContainer_details_c2_row2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to={`/checkout/${props.roomID}`}>
              <button
                className="button-2 roombookingcardContainer_details_c2_row2_btn"
                disabled={!searchData.inputFieldUpdated || !user}
                onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
                onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
              >
                VIEW RATES
              </button>
              {showTooltip && (
                <div style={tooltipStyle} className="tooltip">
                  {user
                    ? "Please fill the Search fields!"
                    : "Please Sign in first!"}
                </div>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingCard;
