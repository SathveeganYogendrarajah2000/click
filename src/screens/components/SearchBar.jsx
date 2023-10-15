import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchData } from "./SearchDataContext";

const SearchBar = () => {
  const { searchData, setSearchData } = useSearchData({
    roomType: "", // Set default values for all fields here
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
  });
  const [error, showError] = useState(true);
  // Initialize the errors object with predefined error messages

  const initialErrors = {
    roomType: "Please select a room type",
    checkInDate: "Please select a check-in date",
    checkOutDate: "Please select a check-out date",
  };

  const [errors, setErrors] = useState(initialErrors);
  const [account, setAccount] = useState({
    checkInDate: "",
    checkOutDate: "",
  });
  // const location = useLocation();

  // Initialize the errors object with predefined error messages

  // Reset the state whenever the route changes
  // useEffect(() => {
  //   setSearchData({
  //     roomType: "", // Set default values for all fields here
  //     checkInDate: "",
  //     checkOutDate: "",
  //     adults: 1,
  //     children: 0,
  //     inputFieldUpdated: false,
  //   });
  //   setErrors(initialErrors);
  // }, [location.pathname, setSearchData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors }; // Create a copy of current errors

    // Reset specific errors when corresponding input is changed
    if (name === "checkInDate") {
      delete newErrors.checkInDate;
    }

    if (name === "checkOutDate") {
      delete newErrors.checkOutDate;
    }

    if (name === "roomType") {
      delete newErrors.roomType;
    }

    // Validate date inputs
    if (name === "checkInDate" || name === "checkOutDate") {
      const today = new Date();
      const selectedDate = new Date(value);
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
      } else {
        delete newErrors.date; // Clear the error if the input is valid
      }
    }

    // Validate if the room type dropdown is selected
    if (name === "roomType" && !value) {
      newErrors.roomType = "Please select a room type";
    } else {
      delete newErrors.roomType; // Clear the error if a room type is selected
    }

    // Update the searchData and errors state
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(newErrors);

    setAccount({ ...account, [name]: value }); // set account state
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    // Check if there are any validation errors
    if (
      Object.keys(errors).length === 0 &&
      searchData.roomType &&
      searchData.checkInDate &&
      searchData.checkOutDate
    ) {
      // Update the searchData and errors state
      setSearchData((prevData) => ({
        ...prevData,
        inputFieldUpdated: true,
      }));
      navigate(`/booking/guestrooms/standardrates`);
    } else {
      // Show a browser alert message with all accumulated errors
      const errorMessages = Object.values(errors).join("\n");
      alert("Please fix the following errors:\n" + errorMessages);
      setSearchData({
        roomType: "", // Set default values for all fields here
        checkInDate: "",
        checkOutDate: "",
        adults: 1,
        children: 0,
      });
    }
  };

  return (
    <div>
      <div className="bookingContainer_hero_searchbar">
        <select
          className="bookingContainer_hero_searchbar_select-room"
          value={searchData.roomType}
          name="roomType"
          onChange={handleInputChange}
        >
          <option value="">Select Room Type</option>
          <option value="suite">Suite Room</option>
          <option value="single">Single Bedroom</option>
          <option value="double">Double Bedroom</option>
          <option value="king_twin">KING/TWIN</option>
          <option value="family">Family Room</option>
          <option value="penthouse">Penthouse</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="executive">Executive Suite</option>
          <option value="ocean_view">Ocean View Room</option>
          <option value="garden_view">Garden View Room</option>
          <option value="poolside">Poolside Room</option>
          <option value="mountain_view">Mountain View Room</option>
          <option value="connecting">Connecting Rooms</option>
          <option value="accessible">Accessible Room</option>
          <option value="honeymoon">Honeymoon Suite</option>
          <option value="presidential">Presidential Suite</option>
        </select>
        <div className="bookingContainer_hero_searchbar_date-picker-section">
          <div className="bookingContainer_hero_searchbar_date-picker-section-01">
            <label
              className="bookingContainer_hero_searchbar_date-picker-section_label"
              htmlFor="date-picker-1"
            >
              Check-in
            </label>
            <input
              id="date-picker-1"
              className="bookingContainer_hero_searchbar_date-picker-section_picker"
              type="date"
              name="checkInDate"
              min={new Date().toISOString().split("T")[0]}
              value={searchData.checkInDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="bookingContainer_hero_searchbar_date-picker-section-01">
            <label
              className="bookingContainer_hero_searchbar_date-picker-section_label"
              htmlFor="date-picker-2"
            >
              Check-out
            </label>
            <input
              id="date-picker-2"
              className="bookingContainer_hero_searchbar_date-picker-section_picker"
              type="date"
              name="checkOutDate"
              min={
                account.startdate
                  ? new Date(account.startdate).toISOString().split("T")[0]
                  : ""
              }
              value={searchData.checkOutDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="bookingContainer_hero_searchbar_people-section">
          <div className="bookingContainer_hero_searchbar_people-section-item">
            <label style={{ color: "#fff" }}>Adults:</label>
            <input
              className="bookingContainer_hero_searchbar_people-section_input-people"
              type="number"
              name="adults"
              min={1}
              max={5}
              value={searchData.adults}
              onChange={handleInputChange}
            />
          </div>
          <div className="bookingContainer_hero_searchbar_people-section-item">
            <label style={{ color: "#fff" }}>Children:</label>
            <input
              className="bookingContainer_hero_searchbar_people-section_input-people"
              type="number"
              name="children"
              min={0}
              max={5}
              value={searchData.children}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          className="bookingContainer_hero_searchbar_check-button"
          onClick={handleSearch}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
