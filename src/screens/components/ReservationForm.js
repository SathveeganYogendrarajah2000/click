import React, { useState, useEffect } from "react";
import "../../css/ReservationForm.css";
import { db } from "../../../src/firebase.js";
import { collection,  addDoc,  query, where, getDocs, updateDoc} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";


function ReservationForm (){
  // Define state variables for the form fields
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [name,setName]= useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] =useState("");
  const [timeslot, setTimeslot] =useState("");
  const [comments, setComments] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // get the tommorrow date to restrict the date object values for current and past dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  
  //get references for the cillections "reservations" and "tables_availability"
  const reservationRef = collection(db,'reservations');
  let fieldValue = 20;

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsButtonDisabled(false);
        setEmail(user.email);     
        fetchUserData(user.uid);  
      } else {
        setUser(null);
        
      }
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
    }, []);

    const fetchUserData = async (uid) => {
      const userDataCollection = collection(db, "users"); 
      const q = query(userDataCollection, where("uid", "==", uid));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setName(userData.firstName);
         
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

  // Event handler to update the timeslot state variable when the dropdown value changes
  const handleTimeSlotChange = (e) => {
    setTime(e.target.value);
    const value =e.target.value;
    // Map the selected value to the corresponding timeslot
    switch (value) {
      case '08am-11am':
        setTimeslot('timeslot_1');
        break;
      case '11am-02pm':
        setTimeslot('timeslot_2');
        break;
      case '02pm-05pm':
        setTimeslot('timeslot_3');
        break;
      case '05pm-08pm':
        setTimeslot('timeslot_4');
        break;  
      case '08pm-11pm':
        setTimeslot('timeslot_5');
        break;  
      default:
        setTimeslot(''); // Reset timeslot if no valid selection
        break;
    };
  };
  // assumed 20 tables allocated for reservation purposes
  const tableAvailabilityData ={
    date: date,
    timeslot_1:20,
    timeslot_2:20,
    timeslot_3:20,
    timeslot_4:20,
    timeslot_5:20,
  };

  // Function to handle form submission
  const handleReserveNow = async (e) => {
    e.preventDefault();
    
    try {
      // Check if any of the required fields are empty
      if (!guests || !date || !time) {
        alert('Required Fields Incomplete. Please Fill.');
        return;
      }
      else{
        const tablesRef = collection(db,"tables_availability");
        // Create a query to filter documents where the "date" field matches the date
        const tableQuery = query(tablesRef, where("date", "==", date));
        const querySnapshot = await getDocs(tableQuery);
        if (!querySnapshot.empty){
          const resultRef = querySnapshot.docs[0];
          const resultDoc = querySnapshot.docs[0].ref; // Get the DocumentReference
          fieldValue = resultRef.data()[timeslot]; 
          //alert(`result ID: ${resultRef.id} fieldvalue: ${fieldValue} `);
          if (fieldValue > 0){
            // Decrement the specified field by 1
            const updateObject = {
              [timeslot] : fieldValue - 1
            };
            // Update the document with the decrement operation
            await updateDoc(resultDoc, updateObject);
            //alert("Document successfully updated with decrement!");
            //alert(`result ID: ${resultRef.id} ${fieldValue} `);
          }
          else{
            alert("No available tables for the given timeslot.") ;
            setIsButtonDisabled(false);
            return;
          }          
        }
        else{
          
          tableAvailabilityData[timeslot]= 19;
          await addDoc(tablesRef, tableAvailabilityData);
        }  
        // Create a reservation data object using form details
        // Create a reservation data object using form details
        const reservationData = {
          numOfGuests: guests,
          resDate: date,
          resTime: timeslot,
          tableID : 21-fieldValue,
          comment:comments,
          userID : user.uid,
          
        };
        // Add reservation data document to the "reservations" collection
        await addDoc(reservationRef, reservationData);
        alert(`Reservation Added Successfully. Check Details in Find Reservations page...`);
      
      }
        
    }
    // display alert message if reservation document didn't add to firestore database
    catch (error) {
      alert("Reservation Adding Error. Please Retry.");
    }
     
    // set the fields to their default values  
    setGuests(1);
    setDate("");
    setTime("");
    setTimeslot("");
    setComments("");
    
  };


  // return the customer reservation form with various fields
  return (
      <form className="reservation-form" disabled={isButtonDisabled}>
        <h2 className="reservationForm_heading">Reservation</h2>
        <div>
          <label className="reservationForm_label" htmlFor="name">
            Your Name
          </label>
          <input
            className="reservationForm_input"
            type="text"
            id="name"
            value={name}
            disabled ="true"
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="email">
            Your Email
          </label>
          <input
            className="reservationForm_input"
            type="email"
            id="email"
            value={email}
            disabled ="true"
          />
        </div>
       
        <div>
          <label className="reservationForm_label" htmlFor="guests">
            Number of Guests
          </label>
          <input
            className="reservationForm_input"
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            min="1"
            max ="12"
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="date">
            Date of Reservation
          </label>
          <input
            className="reservationForm_input"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={tomorrowFormatted} 
            required
          />
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="time">
            Reservation Time
          </label>
          <select 
            className="reservationForm_select"
            id="time"
            value={time}
            onChange={handleTimeSlotChange}
            required>
            <option value="">Select a Timeslot</option>
            <option value="08am-11am">08am-11am</option>
            <option value="11am-02pm">11am-02pm</option>
            <option value="02pm-05pm">02pm-05pm</option>
            <option value="05pm-08pm">05pm-08pm</option>
            <option value="08pm-11pm">08pm-11pm</option>
          </select>
        </div>
        <div>
          <label className="reservationForm_label" htmlFor="comments">
            Comments
          </label>
          <input
            className="reservationForm_inputComment"
            type="text"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            
          />
        </div>
        
        <button
          type="submit"
          className={isButtonDisabled ? 'reservation-formDisabledButton' : 'reservation-formButton'}
          onClick={handleReserveNow} 
          
        >
          Reserve Now
        </button>
        <p style={{fontStyle:"italic",color:"red"}} >Please SignIn to make a reservation.</p>
      </form>
   
  );
};
export default ReservationForm;
