import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import pic1 from "../assets/images/findReservFood01.jpeg";
import pic2 from "../assets/images/findReservFood02.jpeg";
import pic3 from "../assets/images/findReservFood03.jpeg";
import pic4 from "../assets/images/findReservFood04.jpeg";
import pic5 from "../assets/images/findReservFood05.jpeg";
import { useState } from "react";
import {db} from "../../src/firebase.js";
import { deleteDoc, doc ,getDoc,getDocs,collection,query,where,updateDoc} from "firebase/firestore";

const FindReservation = () => {
  const [confNum,setConfNum]=useState("");
  const [reservationData, setReservationData]=useState(null);
  //get the reference of the document which is corresponding for given confirmation number
  
  const handleCancel = async (e)=>{
    try{
      //code for increment the available table for particular timeslot
      const tablesRef = collection(db,"tables_availability");
      const tableQuery = query(tablesRef, where("date", "==",  reservationData.resDate));
      //alert(" tablequery got");
      getDocs(tableQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const resultDoc = querySnapshot.docs[0];
          const resultDocRef = querySnapshot.docs[0].ref;
          const fieldValue = resultDoc.data()[reservationData.resTime];

          if (fieldValue < 20) {
            const updateObject = {
              [reservationData.resTime]: fieldValue + 1
            };

            return updateDoc(resultDocRef, updateObject);
          }
        } else {
          alert("empty querysnapshot.");
        }
      })
      .catch((error) => {
        console.error("Error querying Firestore:", error);
      });
      // code for Delete the document
      const docRef = doc(db,"reservations",confNum);
      deleteDoc(docRef)
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error deleting document: ", error);
      }); 
    }
    catch(error){
      alert("Error occured:"+error);
    }
    setConfNum("");
    setReservationData(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(!confNum){
        alert("Required field incomplete.");
        return;
      }
      else{
        const docRef = doc(db,"reservations",confNum);
        //get the document snapshot using the reference
        const docSnap = await getDoc(docRef);
        //check if the document belongs to confirmation number exists or not
        if (docSnap.exists()){
          setReservationData(docSnap.data());
        }
        else{
          alert(" confirmation number you entered is wrong!")
        }
      }
    }
    catch(error) {
      alert('Error in fetching data:'+ error);
    };    
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
            onChange={(e)=>setConfNum(e.target.value)}
            required
          />
        </div>
        
        <button onClick={handleSubmit} className="findReserv_form_btn">
          Find Reservations
        </button>
        <div>
          {reservationData ? (
            <div style={{marginTop:"20px", marginBottom:"20px"}}>
              <h2>Your Reservation Details</h2>
              <div style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}>
                <span style={{textAlign:"left"}}>Name </span>
                <span style={{textAlign:"left"}}>:  {reservationData.customerName}</span>
                <span  style={{textAlign:"left"}}>Email </span>
                <span style={{textAlign:"left"}}>:  {reservationData.customerEmail}</span>
                <span style={{textAlign:"left"}}>Number of guests </span>
                <span style={{textAlign:"left"}}>:  {reservationData.numOfGuests}</span>
                <span style={{textAlign:"left"}}>contact number   </span>
                <span style={{textAlign:"left"}}>:  {reservationData.customerContactNum}</span>
                <span style={{textAlign:"left"}}>reservation Date  </span>
                <span style={{textAlign:"left"}}>:  {reservationData.resDate}</span>
                <span style={{textAlign:"left"}}>reservation Timeslot </span>
                <span style={{textAlign:"left"}}>:  {reservationData.resTime}</span>
              </div>           
              <p style={{textAlign:"justufy", marginTop:"20px"}}>If any details are incorrect please cancel the reservation and make a new reservation </p>
              <button onClick={handleCancel} className="findReserv_form_btn">
                Cancel Reservation
              </button>
            </div>
          ) : (
            <p>you can see your reservation details here...</p>
          )}
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default FindReservation;
