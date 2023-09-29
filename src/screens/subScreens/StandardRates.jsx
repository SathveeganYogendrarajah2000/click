import RoomBookingCard from "../components/RoomBookingCard";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchData } from "../components/SearchDataContext";

const StandardRates = () => {
  const [roomsDetails, setRoomsDetails] = useState([]);
  const { searchData } = useSearchData();
  const { roomType, checkInDate, checkOutDate, adults, children } = searchData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rooms"));
        const roomData = [];
        querySnapshot.forEach((doc) => {
          roomData.push(doc.data());
        });
        setRoomsDetails(roomData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="guestroomContainer_rooms_standardrates">
      {loading ? (
        <p>Loading...</p> // Display a loading message while data is being fetched
      ) : (
        roomsDetails.map((bookingCard, index) => (
          <RoomBookingCard
            key={index}
            imagePath={bookingCard.picturePath}
            name={bookingCard.name}
            description={bookingCard.description}
            type={bookingCard.type}
            capacity={bookingCard.capacity}
            price={bookingCard.price}
            roomID={bookingCard.roomID}
          />
        ))
      )}
    </div>
  );
};

export default StandardRates;
