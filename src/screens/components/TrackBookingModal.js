import React from "react"; // Don't forget to import React
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const TrackBookingModal = ({ user, onClose }) => {
  const uid = user.uid;
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingQuery = query(
          collection(db, "bookings"),
          where("userID", "==", uid)
        );
        const bookingSnapshot = await getDocs(bookingQuery);

        const bookings = [];

        for (const doc of bookingSnapshot.docs) {
          const booking = doc.data();
          const roomData = await fetchRoomData(booking.roomID);
          bookings.push({ booking, roomData });
        }

        setBookingData(bookings);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    const fetchRoomData = async (roomID) => {
      try {
        const roomDoc = await getDocs(collection(db, "rooms", roomID));
        if (!roomDoc.empty) {
          return roomDoc.docs[0].data();
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
      return null;
    };

    fetchBookingData();
  }, [uid]);

  return (
    <div className="trackModalContainer">
      <button className="trackModalContainer_closeButton" onClick={onClose}>
        Close
      </button>

      <table className="trackModalContainer_bookingTable">
        <thead>
          <tr>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Total Price</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map(({ booking, roomData }, index) => (
            <tr key={index}>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{booking.totalPrice}</td>
              <td>{booking.adults}</td>
              <td>{booking.children}</td>
              <td>{roomData ? roomData.name : "N/A"}</td>
              <td>{roomData ? roomData.description : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackBookingModal;
