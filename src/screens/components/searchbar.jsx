const Searchbar = ({
  roomType,
  setRoomType,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  adults,
  setAdults,
  children,
  setChildren,
  onSearch,
}) => {
  const handleSearch = () => {
    // Call the onSearch callback to perform the search
    onSearch();
  };
  return (
    <div className="bookingContainer_hero_searchbar">
      <select
        className="bookingContainer_hero_searchbar_select-room"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
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
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
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
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>

      <div className="bookingContainer_hero_searchbar_people-section">
        <div className="bookingContainer_hero_searchbar_people-section-item">
          <label style={{ color: "#fff" }}>Adults:</label>
          <input
            className="bookingContainer_hero_searchbar_people-section_input-people"
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="bookingContainer_hero_searchbar_people-section-item">
          <label style={{ color: "#fff" }}>Children:</label>
          <input
            className="bookingContainer_hero_searchbar_people-section_input-people"
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
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
  );
};

export default Searchbar;
