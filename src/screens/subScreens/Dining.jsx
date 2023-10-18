import "../../css/Dining.css";
import pic1 from "../../assets/images/findReservFood01.jpeg";
import pic2 from "../../assets/images/findReservFood02.jpeg";
import pic3 from "../../assets/images/findReservFood03.jpeg";
import pic4 from "../../assets/images/findReservFood04.jpeg";
import pic5 from "../../assets/images/findReservFood05.jpeg";
import ReservationForm from "../components/ReservationForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import FindReservation from "../FindReservation";
import { useState, useEffect } from "react";

// function for display dining page
function Dining() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  // Clean up the subscription when the component unmounts
  return () => unsubscribe();
  }, []);

  //const navigate = useNavigate();
  return (
    <div className="reservationForm_container">
      <div className="dining_Container">
        {user !== null && (
          <button className="dining_FindRes" onClick={() => {
            setShowModal(true);
          }}>
            Find Reservations
          </button>
        )}
        {/* Display the modal when showModal is true */}
        {showModal && (
          <FindReservation user={user} onClose={() => setShowModal(false)} />
        )}
        
        <h1 className="dining_Heading">CLICK</h1>

        <p className="dining_Paragraph">
          Savor the art of detectable cuisine at our restaurant.Elevate your
          taste journey with a perfect blend of taste, prepared with passion and
          served with excellence. Experience a cuilinary escape that delights
          the senses.
        </p>

        <p className="dining_Paragraph">
          Indulge in a gastronomic adventure at our restaurant, where every dish
          tells a story of creativity and craftsmanship. From locally sourced
          ingredients to exquisite presentations, we're dedicated to offering a
          dining experience that transcends expectations. Immerse yourself in an
          ambiance that celebrates cuilinary innovation and hospitality.
        </p>

        <h3 className="dining_CenterHeading">Pictures from our users</h3>
    
        <div className="findReserv_gallery">
          <img src={pic1} alt="Pic 1" />
          <img src={pic2} alt="Pic 2" />
          <img src={pic3} alt="Pic 3" />
          <img src={pic4} alt="Pic 4" />
          <img src={pic5} alt="Pic 5" />
        </div>

        
        <h2 className="dining_CenterHeading">Main Course</h2>
        <h3 className="dining_Heading">Starters</h3>
        <h4 className="dining_ContentHeading">Imported Salmon Steak</h4>
        <p className="dining_ContentDetail">
          Base de arroz aguacate, salmon noruego, semillas de sesame, edamome,
          wakame y soja light
        </p>
        <h4 className="dining_ContentHeading">Poke bol</h4>
        <p className="dining_ContentDetail">
          Queso de cobra light, datiles, jamon serrano y rucula
        </p>
        <h4 className="dining_ContentHeading">Ensalada Cesar</h4>
        <p className="dining_ContentDetail">
          lechuga, tomate, espinacas, pollo asado, picatostes, queso proteinico
          y salsa cesar 0%
        </p>
        <h3 className="dining_Heading">Main Course</h3>
        <h4 className="dining_ContentHeading">Oriental</h4>
      </div>
      <ReservationForm/>
    </div>  
  );
}
export default Dining;
