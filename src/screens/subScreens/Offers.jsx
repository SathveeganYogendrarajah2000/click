import "../../css/offers.css";
import "../../css/Dining.css";
import offers_1 from "../../assets/images/offers_1.jpg";
import offers_2 from "../../assets/images/offers_2.jpg";
import offers_3 from "../../assets/images/offers_3.jpg";


function Offers(){
  function viewOffers(){
    return(
      <p>details</p>
    );
  };

  return (   
      <div className="offers_contentContainer">
        <h1 className="dining_FindRes">Offers</h1>
        <h2 className="offers_contentHeading2">CLICK at Colombo</h2>
        <p className="offers_contentparagraph"> Dining Available dates :  09 Jan 2023 - 30 Dec 2023 </p>
        <h3 className="offers_contentHeading3" >Offer details</h3>
        <p className="offers_contentparagraph">Feast like royalty at our weekend brunch at Shang Palace which 
        promises a vibrant selection of unimited 
        authentic Chinese dishes featuring intricate delicacies 
        including the finest dim sums, variety of meats and 
        seafood along with a tempting choice of rice and noodles.</p>
        <p className="offers_contentparagraph">Priced at LKR 9,150 nett per person.</p>
        <p className="offers_contentparagraph">The food may also be paired with a variety of Chinese spirits and cocktails especially for the Yum Cha brunch</p>
        <p className="offers_contentparagraph">Yum Cha is served every Saturday, Sunday and on all Public Holidays from 12.00pm till 3.00pm</p>
        <p className="offers_contentparagraph">View our Yum Cha menu here.</p>
        <p className="offers_contentparagraph">Contact us at(94) 788 8288 for reservations or more information.</p>
        <h3 className="offers_contentHeading3">Recommended Offers</h3>
        <div className="offers_imageContainer">
          <div className="offers_image">
            <img src={offers_1} alt="offers_1" width= "350px" height= "250px" />
            <div>
              <p style={{textAlign:"center"}}>Dining</p>
              <p style={{textAlign:"center"}}> 10 Jan 2023 - 30 Dec 2023</p>
              <p style={{textAlign:"center"}}>Daily Dinner Buffer at Central</p>
              <p style={{textAlign:"center"}}>Immerse your self in the most action-packed dinner buffet experience in the city.</p>
            </div>
            <button onClick={viewOffers} className="offers_button">View details</button>
          </div>
          <div className="offers_image">
            <img src={offers_2} alt="offers_2" width= "350px" height= "250px" />
            <div>
              <p style={{textAlign:"center"}}>Dining</p>
              <p style={{textAlign:"center"}}> 10 Jan 2023 - 30 Dec 2023</p>
              <p style={{textAlign:"center"}}>Daily Dinner Buffer at Central</p>
              <p style={{textAlign:"center"}}>Immerse your self in the most action-packed dinner buffet experience in the city.</p>
            </div>
            <button onClick={viewOffers} className="offers_button">View details</button>
          </div>
          <div className="offers_image">
            <img src={offers_3} alt="offers_3" width= "350px" height= "250px" />
            <div>
              <p style={{textAlign:"center"}}>Dining</p>
              <p style={{textAlign:"center"}}> 10 Jan 2023 - 30 Dec 2023</p>
              <p style={{textAlign:"center"}}>Daily Dinner Buffer at Central</p>
              <p style={{textAlign:"center"}}>Immerse your self in the most action-packed dinner buffet experience in the city.</p>
          
            </div>
            
            <button onClick={viewOffers} className="offers_button">View details</button>
           
            
          </div>
        </div>
      </div>
      
  );
};

export default Offers;


