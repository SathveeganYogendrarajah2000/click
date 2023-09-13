import bedType from "../../Assets/images/bedType.png";
import maximumOccoumpany from "../../Assets/images/maximumOccoumpany.png";

const RoomCard = (props) => {
  return (
    <div className="roomcardContainer">
      <div className="roomcardContainer_image">
        <img
          className="roomcardContainer_image_picture-web"
          alt="Room"
          src={props.imagePath}
        />
      </div>
      <div className="roomcardContainer_details">
        <div className="roomcardContainer_details_c1">
          <div className="roomcardContainer_details_c1_heading">
            {props.name}
          </div>
          <p className="roomcardContainer_details_c1_description">
            {props.description}
          </p>
          <div className="roomcardContainer_details_c1_row1">
            <div className="roomcardContainer_details_c1_row1_feature">
              <img
                className="roomcardContainer_details_c1_row1_feature_img"
                alt="Bedtype png"
                src={bedType}
              />
              <div className="roomcardContainer_details_c1_row1_feature_text">
                {props.type}
              </div>
            </div>
            <div className="roomcardContainer_details_c1_row1_feature">
              <img
                className="roomcardContainer_details_c1_row1_feature_img"
                alt="Maximumoccoumpany"
                src={maximumOccoumpany}
              />
              <div className="roomcardContainer_details_c1_row1_feature_text">
                Up to {props.capacity} guests
              </div>
            </div>
          </div>
          <div className="roomcardContainer_details_c1_row2">
            Double glazed windows to ensure its sound proof
          </div>
        </div>
        <div className="div-room-rate-wrap roomcardContainer_details_c2">
          <div className="roomcardContainer_details_c2_row1">
            <div className="roomcardContainer_details_c2_row1_01">
              $ {props.price}*
            </div>
            <div className="roomcardContainer_details_c2_row1_02">
              Starting Rate/Night
            </div>
          </div>

          <div className="roomcardContainer_details_c2_row2">
            <button className="button-2 roomcardContainer_details_c2_row2_btn">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
