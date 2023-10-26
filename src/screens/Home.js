import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Fragment } from "react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import table01 from "../assets/images/homePageTable01.jpg";
import table02 from "../assets/images/homePageTable02.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
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

  const style = {
    flexDirection: "row",
    width: "100%",
    background:
      "linear-gradient(180deg,rgb(17, 6, 5) 0%,rgba(17, 6, 5, 0) 100%)",
    position: "absolute",
    top: 0,
  };
  return (
    <Fragment>
      <div className="homepage">
        <div
          style={{
            backgroundImage: `url(${require("../assets/images/homepage_hero.jpg")})`,
          }}
          className="homepage_hero bookingContainer_hero"
        >
          <NavBar style={style} />
          <SearchBar />
        </div>
        <div className="homepage_brandname">
          <div className="homepage_brandname_logo">
            <h1>CLICK</h1>
          </div>
          <p>Seamlessly Connect, Simplify, and Elevate Your Experience!</p>
        </div>
        <div className="homepage_info">
          <div className="homepage_info_cards">
            <h1 className="homepage_info_cards_title">Rooms</h1>
            <Carousel roomData={roomData} />
          </div>
          <div className="homepage_info_cards">
            <h1 className="homepage_info_cards_title">Dine In</h1>
            <div className="homepage_info_cards_tableCard">
              <img src={table01} alt="" className="homepage_info_cards_img" />
              <NavLink className="homepage_info_cards_button" to="/dinein">
                <button className="homepage_info_cards_button_btn">
                  Reserve Your Tables
                </button>
              </NavLink>

              <img src={table02} alt="" className="homepage_info_cards_img02" />
            </div>
          </div>
        </div>
        <div className="homepage_map">
          <div className="homepage_map_title">Location</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.53892964511!2d80.62988517637041!3d7.293180673928681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662a39d74041%3A0xa3343ec9c016ffd9!2sKandy%20Clock%20Tower%2C%20AB42%2C%20Kandy%2020000!5e0!3m2!1sen!2slk!4v1697913551078!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
