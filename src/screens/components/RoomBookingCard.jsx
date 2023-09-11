import bedType from "../../assets/images/bedType.png";
import maximumOccoumpany from "../../assets/images/maximumOccoumpany.png";

const RoomBookingCard = (props) => {
  return (
    <div className="roombookingcardContainer">
      <div className="roombookingcardContainer_image">
        <img
          className="roombookingcardContainer_image_picture-web"
          alt="Room image"
          src={props.roomImage}
        />
      </div>
      <div className="roombookingcardContainer_details">
        <div className="roombookingcardContainer_details_c1">
          <div className="heading-luxury">Luxury Room Facade View</div>
          <div className="p">
            <p className="elegant-and-warm">
              Elegant and warm color palettes, combined with textured
              furnishings, give the rooms a sophisticated style that feels
              personally inviting and cozy
            </p>
          </div>
          <div className="div-row">
            <div className="overlap-group">
              <div className="div-col-2">
                <div className="div-image-container">
                  <img className="img" alt="Bedtype png" src={bedType} />
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-3">KING/TWIN</div>
                </div>
              </div>
            </div>
            <div className="div-col-wrapper">
              <div className="div-col-3">
                <div className="div-image-container">
                  <img
                    className="img"
                    alt="Maximumoccoumpany"
                    src={maximumOccoumpany}
                  />
                </div>
                <div className="span-room-selling">
                  <div className="text-wrapper-3">Up to 4 guests</div>
                </div>
              </div>
            </div>
            <div className="div-room-property-wrapper">
              <div className="div-room-property">
                <div className="star-png" />
                <p className="text-wrapper-3">
                  Double glazed windows to ensure its sound proof
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="div-room-rate-wrap roombookingcardContainer_details_c2">
          <div className="overlap">
            <div className="div-rate-card-actual">
              <div className="text-wrapper-4">$</div>
              <div className="text-wrapper-5">125</div>
              <div className="text-wrapper-6">*</div>
            </div>
            <div className="text-wrapper-7">Starting Rate/Night</div>
          </div>
          <div className="div-rate-card-2">
            <div className="last-room-svg">
              <div className="group-wrapper">
                <div className="group">
                  <div className="text-wrapper-8">Last few rooms available</div>
                  <img className="vector" alt="Vector" src="vector.svg" />
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">Last few rooms available</div>
          </div>
          <button className="button-2">
            <div className="text-wrapper-10">VIEW RATES</div>
            <img className="icon-2" alt="Icon" src="image.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingCard;
