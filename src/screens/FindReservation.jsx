import { useState , useEffect} from "react";
import {db} from "../../src/firebase.js";
import { getDocs,collection,query,where} from "firebase/firestore";
import "../css/Dining.css";

const FindReservation = ({user,onClose}) => {
  const uid = user.uid;
  const [reservationData, setReservationData]=useState(null);
 
  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const ReservationQuery = query(
          collection(db, "reservations"),
          where("userID", "==", uid)
        );
        const ReservationSnapshot = await getDocs(ReservationQuery);
        const Reservations = [];
        for (const doc of ReservationSnapshot.docs) {
          const resData = doc.data();
          Reservations.push(resData);
        }
        setReservationData(Reservations);
      }
      catch (error) {
        console.error("Error fetching reservation data:", error);
      }
    };
    fetchReservationData();
  }, [uid]);
  
  /*
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
      const docRef = doc(db, "reservations", confNum); // confNum is the document ID
      try {
        await deleteDoc(docRef);
        alert("Document successfully deleted.");
      } catch (error) {
        console.error("Error deleting document:", error);
      }

    }
    catch(error){
      alert("Error occured:"+error);
    }
    setConfNum("");
    setReservationData(null);
  }
*/
  

  return (
    <div className="dining_findReserv">
        <div>
          {reservationData ? (
            <div style={{marginTop:"20px", marginBottom:"20px"}}>
              <p>Here you can see your reservation details</p>
              <table className="dining_table">
              <thead className="dining_table_thead">
                <tr>
                  <th className="dining_table_th">Reservation Date</th>
                  <th className="dining_table_th">Reservation timeslot</th>
                  <th className="dining_table_th">Number of Guests</th>
                  <th className="dining_table_th">table Number</th>
                  <th className="dining_table_th">Comments</th>
                </tr>
              </thead>
              <tbody className="dining_table_tbody">
                {reservationData.map(( reservation, index) => (
                  <tr key={index}>
                    <td className="dining_table_td">{reservation.resDate}</td>
                    <td className="dining_table_td">{reservation.resTime}</td>
                    <td className="dining_table_td">{reservation.numOfGuests}</td>
                    <td className="dining_table_td">{reservation.tableID}</td>
                    <td className="dining_table_td_comment">{reservation.comment}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          ) : (
            <p>you can see your reservation details here...</p>
          )}
        </div>
        <button 
        style={{
          
          width:"80px", 
          height:"40px",    
          backgroundColor:"red", 
          borderRadius:"6px", 
          border:"none", 
          fontSize:"18px",
          color:"white"}} 
        onClick = {onClose}>
        close
      </button>
     
   
    </div>
  );
};

export default FindReservation;
