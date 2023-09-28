import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchData } from "./SearchDataContext";

const SearchBar = () => {
  const { searchData, setSearchData } = useSearchData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log("handleInputChange called: " + name + " " + value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/booking/guestrooms/standardrates`);
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
          <option value="double">KING/TWIN</option>
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
