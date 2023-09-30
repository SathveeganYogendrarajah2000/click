import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchData } from "./SearchDataContext";

const SearchBar = () => {
  const { searchData, setSearchData } = useSearchData();
  // Initialize the errors object with predefined error messages
  const [errors, setErrors] = useState({});
  const location = useLocation();

  // Initialize the errors object with predefined error messages
  const initialErrors = {
    roomType: "Please select a room type",
    checkInDate: "Please select a check-in date",
    checkOutDate: "Please select a check-out date",
    adults: "Please enter the number of adults",
    children: "Please enter the number of children",
  };

  // Reset the state whenever the route changes
  useEffect(() => {
    setSearchData({
      roomType: "", // Set default values for all fields here
      checkInDate: "",
      checkOutDate: "",
      adults: 1,
      children: 0,
    });
    setErrors(initialErrors);
  }, [location.pathname, setSearchData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors }; // Create a copy of current errors

    // Reset specific errors when corresponding input is changed
    if (name === "adults" || name === "children") {
      delete newErrors.adults;
      delete newErrors.children;
    }

    if (name === "checkInDate") {
      delete newErrors.checkInDate;
    }

    if (name === "checkOutDate") {
      delete newErrors.checkOutDate;
    }

    if (name === "roomType") {
      delete newErrors.roomType;
    }

    // Validate adults and children
    if (name === "adults" || name === "children") {
      const intValue = parseInt(value, 10);
      if (isNaN(intValue) || intValue < 0) {
        newErrors.count = "Value must be a non-negative number";
      } else {
        delete newErrors.count; // Clear the error if the input is valid
      }
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
      navigate(`/booking/guestrooms/standardrates`);
    } else {
      // Show a browser alert message with all accumulated errors
      const errorMessages = Object.values(errors).join("\n");
      alert("Please fix the following errors:\n" + errorMessages);
    }
  };
  return (
    <div>
      <div className="bookingContainer_hero_searchbar">
        <select
          className="bookingContainer_hero_searchbar_select-room"
          value={searchData.roomType}
          name="roomType"
          // onChange={(e) =>
          //   setSearchData({ ...searchData, roomType: e.target.value })
          // }
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

          {/* Add more room types */}
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
              value={searchData.checkInDate}
              // onChange={(date) =>
              //   setSearchData({ ...searchData, checkInDate: date.target.value })
              // }
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
              value={searchData.checkOutDate}
              // onChange={(date) =>
              //   setSearchData({
              //     ...searchData,
              //     checkOutDate: date.target.value,
              //   })
              // }
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
              value={searchData.adults}
              // onChange={(e) =>
              //   setSearchData({ ...searchData, adults: e.target.value })
              // }
              onChange={handleInputChange}
            />
          </div>
          <div className="bookingContainer_hero_searchbar_people-section-item">
            <label style={{ color: "#fff" }}>Children:</label>
            <input
              className="bookingContainer_hero_searchbar_people-section_input-people"
              type="number"
              name="children"
              value={searchData.children}
              // onChange={(e) =>
              //   setSearchData({ ...searchData, children: e.target.value })
              // }
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
