import { useState , useEffect} from "react";
import {db} from "../../src/firebase.js";
import { getDocs,collection,query,where, deleteDoc, updateDoc} from "firebase/firestore";
import "../css/Dining.css";

const FindReservation = ({user,onClose}) => {
  const uid = user.uid;
  const [reservationData, setReservationData]=useState(null);
  const currentDate = new Date();
 
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
          const resData = {
            ref: doc.ref,  // Include the document reference
            data: doc.data(),  // Include the document data
          };
          Reservations.push(resData);
        }
        
        //sort the reservations in the descending order
        setReservationData([...Reservations].sort((a, b) => new Date(b.data.resDate) - new Date(a.data.resDate)));
      }
      catch (error) {
        console.error("Error fetching reservation data:", error);
      }
    };
    fetchReservationData();
  }, [uid]);
  

  const handleCancel = async (reservationRef) => {
    // Display a confirmation dialog to the user.
    const userConfirmed = window.confirm("Are you sure you want to cancel this reservation?");
    if (userConfirmed) {
      try {
        await deleteDoc(reservationRef);
         //code for increment the available table for particular timeslot
        const tablesRef = collection(db,"tables_availability");
        const tableQuery = query(tablesRef, where("date", "==",  reservationData.data.resDate));
        //alert(" tablequery got");
        getDocs(tableQuery)
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const resultDoc = querySnapshot.docs[0];
            const resultDocRef = querySnapshot.docs[0].ref;
            const fieldValue = resultDoc.data()[reservationData.data.resTime];

            if (fieldValue < 20) {
              const updateObject = {
                [reservationData.data.resTime]: fieldValue + 1
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
        alert("Reservation canceled successfully");
      } 
      catch (error) {
        console.error("Error canceling reservation:", error);
      }
    } else {
      console.log("Cancellation was not confirmed by the user.");
    }
    setReservationData((reservationData) => {
      return reservationData.filter((reservation) => reservation.ref !== reservationRef);
    });
  };
 
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
                  <th className="dining_table_th">Cancel</th>
                </tr>
              </thead>
              <tbody className="dining_table_tbody">
                {reservationData.map(( reservation, index) => (
                  <tr key={index}>
                    <td className="dining_table_td">{reservation.data.resDate}</td>
                    <td className="dining_table_td">{reservation.data.resTime}</td>
                    <td className="dining_table_td">{reservation.data.numOfGuests}</td>
                    <td className="dining_table_td">{reservation.data.tableID}</td>
                    <td className="dining_table_td_comment">{reservation.data.comment}</td>
                    <td >
                      {new Date(reservation.data.resDate) > currentDate ? (
                      <button className="dining_button" onClick={() => handleCancel(reservation.ref)}>
                        Cancel
                      </button>
                      ) : null}
                    </td>
                    
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
        className="dining_button"
         onClick = {onClose}>
        close
      </button>
     
   
    </div>
  );
};

export default FindReservation;
