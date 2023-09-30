import { NavLink } from "react-router-dom";

import bedType from "../../assets/images/bedType.png";
import maximumOccoumpany from "../../assets/images/maximumOccoumpany.png";
import { useSearchData } from "./SearchDataContext";

const RoomBookingCard = (props) => {
  const { searchData } = useSearchData();
  
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
            Double glazed windows to ensure its sound proof
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

          <div className="roombookingcardContainer_details_c2_row2">
            <NavLink to={`/checkout/${props.roomID}`}>
              <button className="button-2 roombookingcardContainer_details_c2_row2_btn">
                VIEW RATES
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingCard;
