import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import map from "../assets/images/mapForHome.jpeg";
import { Fragment } from "react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import table01 from "../assets/images/homePageTable01.jpg";
import table02 from "../assets/images/homePageTable02.jpg";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
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
            <h1>CLICK</h1>
          </div>
          <p>Seamlessly Connect, Simplify, and Elevate Your Experience!</p>
        </div>
        <div className="homepage_info">
          <div className="homepage_info_cards">
            <h1 className="homepage_info_cards_title">Rooms</h1>
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
          <img src={map} alt="Google Map" className="homepage_map_img" />
          {/* <MapContainer
            className="homepage_map_container"
            center={[51.505, -0.09]}
            zoom={4}
            maxZoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      {/* <iframe
        title="chatbot"
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/b03404e7-69c4-435b-92a2-3c2d464fb635"
      ></iframe> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
