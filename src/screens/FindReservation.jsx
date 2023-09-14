import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import pic1 from "../assets/images/findReservFood01.jpeg";
import pic2 from "../assets/images/findReservFood02.jpeg";
import pic3 from "../assets/images/findReservFood03.jpeg";
import pic4 from "../assets/images/findReservFood04.jpeg";
import pic5 from "../assets/images/findReservFood05.jpeg";

const FindReservation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your reservation has been found!");
  };
  return (
    <div className="findReserv">
      <NavBar />
      <div className="findReserv_gallery">
        <img src={pic1} alt="Pic 1" />
        <img src={pic2} alt="Pic 2" />
        <img src={pic3} alt="Pic 3" />
        <img src={pic4} alt="Pic 4" />
        <img src={pic5} alt="Pic 5" />
      </div>

      <form action="" className="findReserv_form">
        <h1 className="findReserv_form_formTitle">Find Reservations</h1>
        <div className="findReserv_form_describe">
          Please enter your details below to find your reservation.
        </div>
        <div className="findReserv_form_inputSec">
          <label htmlFor="findReservInput01" className="findReserv_form_label">
            Confirmation Number *
          </label>
          <input
            type="text"
            id="findReservInput01"
            className="findReserv_form_input"
            required
          />
        </div>
        <div className="findReserv_form_inputSec">
          <label htmlFor="findReservInput01" className="findReserv_form_label">
            Family Name / Surname *
          </label>
          <input
            type="text"
            id="findReservInput01"
            className="findReserv_form_input"
            required
          />
        </div>
        <button onSubmit={handleSubmit} className="findReserv_form_btn">
          Find Reservations
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FindReservation;
