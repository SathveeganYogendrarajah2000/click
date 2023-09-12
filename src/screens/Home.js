import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IntroLogo from "../assets/images/Homepage_click_logo.png";
import { Fragment, useState } from "react";
import NavBarStyled from "./components/NavBarStyled";
import RoomCard from "./components/RoomCard";
import Carousel from "./components/Carousel";
const Home = () => {
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const roomData = [
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View01",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View02",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View03",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
  ];

  const handleSearch = () => {
    // Handle the search logic here
  };
  return (
    <Fragment>
      <div className="homepage">
        <div className="homepage_hero bookingContainer_hero">
          <NavBarStyled />
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
                  onChange={(date) => setCheckInDate(date)}
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
                  onChange={(date) => setCheckOutDate(date)}
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
        </div>
        {/* <div className="homepage_hero">
          <div className="homepage_hero_bottom">
            <h1>Restaurant Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quidem quis qu
            </p>
          </div>
        </div> */}
        <div className="homepage_brandname">
          <div className="homepage_brandname_logo">
            {/* <img src={IntroLogo} alt="click image" srcset="" /> */}
            <h1>Athena</h1>
          </div>
          <p>Seamlessly Connect, Simplify, and Elevate Your Experience!</p>
        </div>
        <div className="homepage_info">
          <div className="homepage_info_cards">
            <Carousel roomData={roomData} />
            {/* <RoomCard
              imagePath="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              name="Luxury Room Facade View"
              description="Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy"
              type="King/Twin"
              capacity="4"
              price="125"
            /> */}
          </div>
          <div className="homepage_info_cards"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
