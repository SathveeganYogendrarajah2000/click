import "../../css/offers.css";
import "../../css/Dining.css";
import foodOffer from "../../assets/images/offers_1.jpg";
import roomOffer from "../../assets/images/hotelRoomOffer.jpg";
import defaultOffer from "../../assets/images/offers_2.jpg";
//import offers_3 from "../../assets/images/offers_3.jpg";
import { useState, useEffect } from "react";
import { collection,getDocs } from "firebase/firestore";
import {db} from "../../../src/firebase.js";

function Offers(){
  const [offers, setOffers] = useState([]);

  // Function to get the image URL based on offer type
  function getImageForOfferType(offerType) {
    if (offerType === "Food") {
      return foodOffer ;
    } 
    else if (offerType === "Room") {
      return roomOffer ;
    } 
    else {
      return defaultOffer ;
    }
  } 
  
  useEffect(() => {
    // Create a reference to your Firestore collection
    const offersRef = collection(db, 'offerDetails');

    // Fetch offer documents
    getDocs(offersRef)
      .then((querySnapshot) => {
        const offerData = [];
        querySnapshot.forEach((doc) => {
          // Extract data from each document
          const offer = doc.data();
          offerData.push(offer);
        });
        setOffers(offerData);
      })
      .catch((error) => {
        console.error('Error fetching offers: ', error);
      });
  }, []);

  return (   
      <div className="offers_contentContainer">
        <h1 className="dining_FindRes">Offers</h1>
        <h2 className="offers_contentHeading2">CLICK at Colombo</h2>
        <p className="offers_contentparagraph"> Discover an array of enticing offers that have been thoughtfully designed to enhance your stay and dining experience at our hotel and restaurant. Whether you're planning a romantic getaway, a family vacation, or a memorable celebration, our exclusive offers cater to all your desires. </p>
        <h3 className="offers_contentHeading3" >Offer details</h3>
        <p className="offers_contentparagraph">Feast like royalty at our weekend brunch at Shang Palace which 
        promises a vibrant selection of unimited 
        authentic Chinese dishes featuring intricate delicacies 
        including the finest dim sums, variety of meats and 
        seafood along with a tempting choice of rice and noodles.</p>
        <p className="offers_contentparagraph"> <b>Family Fun : </b>Treat your family to a well-deserved break. Our family-friendly offers include spacious accommodations, activities for all ages, and dining options that cater to even the pickiest eaters.</p>
        <p className="offers_contentparagraph"> <b>Special Occasions : </b> Make your special occasions truly extraordinary. Whether it's a birthday, anniversary, or any other milestone, our celebration packages ensure your event is celebrated in style.</p>
        <p className="offers_contentparagraph">The food may also be paired with a variety of Chinese spirits and cocktails especially for the Yum Cha brunch Yum Cha is served every Saturday, Sunday and on all Public Holidays from 12.00pm till 3.00pm</p>
        <p className="offers_contentparagraph">Contact us at(94) 788 8288 for reservations or more information.</p>
        <p className="offers_contentparagraph">These offers are available for a limited time, so be sure to check back frequently for new promotions and deals. We're committed to making your stay with us as memorable as possible, and our exclusive offers are designed to provide you with exceptional value and unparalleled experiences.
        Visit our Offers page to explore the full range of packages and promotions. We look forward to welcoming you to our hotel and restaurant, where every offer is a gateway to a world of luxury, adventure, and indulgence.</p>
        <h3 className="offers_contentHeading3">Recommended Offers</h3>
        <div className="offers_Container">
          {offers.map((offer, index) => (
            <div key={index} className="offers_update">
              {/* Render an image based on the offer type */}
              <img src={getImageForOfferType(offer.on)} alt={offer.on} style={{width:"100px",height:"100px",borderRadius:"50%",boxShadow :" 0 0 5px rgba(0, 0, 0, 0.5)"}}  />
              {/* Display offer details */}
              <p className="offers_details"> {offer.on} offer   </p>
              <p className="offers_details"> type : {offer.type}  </p>
              <p className="offers_details">  {offer.startDate} to  {offer.endDate} </p>
              <p className="offers_details"> on {offer.percentage}% </p>
              
            </div>
          ))}
        </div>
      </div>
      
  );
};

export default Offers;


