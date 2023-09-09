import { NavLink, Route, Routes } from "react-router-dom";

import StandardRates from "./StandardRates";
import MemberRates from "./MemberRates";
import PackageRates from "./PackageRates";

const GuestRooms = (props) => {
  return (
    <>
      <div className="guestroomContainer">
        <div className="top">
          <p className="guestroomContainer_heading">
            Guest Rooms at
            <span className="guestroomContainer_heading_text-wrapper-2">
              {" "}
              CLICK
            </span>
            , SriLanka
          </p>
          <div className="guestroomContainer_article">
            <p className="guestroomContainer_article_para">
              Whether you're keen on a stunning view or some peace, we offer
              accommodation in Srilanka that caters to your needs. Be it a room
              or a suite, each fuses contemporary sophistication and old - world
              Srilankan opulence with subtle charm.
            </p>

            <p className="guestroomContainer_article_para">
              As per government guidelines, only fully vaccinated individuals
              are permitted entry into the premises. You are requested to
              present your vaccination certificate on arrival to facilitate
              this. The hotel
              <br />
              reserves the right to deny entry to non-vaccinated individuals for
              the safety and security of all our guests and associates. We thank
              you for your understanding.
            </p>

            <p className="guestroomContainer_article_para">
              For further details, kindly contact prior to check-in at:-
              <span className="guestroomContainer_article_para_contact">
                reservations.click@lanka.com
              </span>
            </p>
          </div>
        </div>
        <div className="guestroomContainer_rooms">
          <div className="guestroomContainer_rooms_selected-room">
            Selected Room
            <span className="guestroomContainer_rooms_selected-room_span">
              for {props.adult} adult and {props.child} child
            </span>
          </div>
          <nav className="guestroomContainer_rooms_navbar">
            <NavLink
              exact
              to="/booking/guestrooms/standardrates"
              className="guestroomContainer_rooms_navbar_item"
            >
              <div className="guestroomContainer_rooms_navbar_item_title">
                STANDARD RATES
              </div>
              <div className="guestroomContainer_rooms_navbar_item_price">
                from LKR 15,000 per night
              </div>
            </NavLink>
            <NavLink
              to="/booking/guestrooms/memberrates"
              className="guestroomContainer_rooms_navbar_item"
            >
              <div className="guestroomContainer_rooms_navbar_item_title">
                MEMBER RATES
              </div>
              <div className="guestroomContainer_rooms_navbar_item_price">
                from LKR 11,500 per night
              </div>
            </NavLink>
            <NavLink
              to="/booking/guestrooms/packagerates"
              className="guestroomContainer_rooms_navbar_item"
            >
              <div className="guestroomContainer_rooms_navbar_item_title">
                PACKAGES RATES
              </div>
              <div className="guestroomContainer_rooms_navbar_item_price">
                from LKR 17,500 per night
              </div>
            </NavLink>
          </nav>
          <Routes>
            <Route path="/standardrates" element={<StandardRates />} />
            <Route path="/memberrates" element={<MemberRates />} />
            <Route path="/packagerates" element={<PackageRates />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default GuestRooms;
