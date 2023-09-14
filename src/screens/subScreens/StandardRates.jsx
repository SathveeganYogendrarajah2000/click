import RoomBookingCard from "../components/RoomBookingCard";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const StandardRates = () => {
  const [roomsDetails, setRoomsDetails] = useState([]); // Initialize state to hold data

  useEffect(() => {
    // Use an asynchronous function inside useEffect to fetch data
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rooms"));
        const roomData = [];
        querySnapshot.forEach((doc) => {
          roomData.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        setRoomsDetails(roomData); // Set the data in state when fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to fetch data

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to fetch data once on component mount
  return (
    <div className="guestroomContainer_rooms_standardrates">
      {/* {console.log(querySnapshot.data())} */}
      {roomsDetails.map((bookingCard, index) => (
        <RoomBookingCard
          key={index} // Use a unique key for each card (typically an ID)
          imagePath={bookingCard.imagePath}
          name={bookingCard.name}
          description={bookingCard.description}
          type={bookingCard.type}
          capacity={bookingCard.capacity}
          price={bookingCard.price}
          roomID={bookingCard.roomID}
        />
      ))}
    </div>
  );
};

export default StandardRates;
