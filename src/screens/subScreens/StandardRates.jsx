import RoomBookingCard from "../components/RoomBookingCard";
import { db } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchData } from "../components/SearchDataContext";

const StandardRates = () => {
  const [roomsDetails, setRoomsDetails] = useState([]);
  const { searchData } = useSearchData();
  const { roomType, adults, children, inputFieldUpdated } = searchData;
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
        setLoading(false); // Set loading to false in case of an error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      try {
        if (inputFieldUpdated) {
          // Filter the data based on your criteria here
          const filteredData = roomsDetails.filter((bookingCard) => {
            const matchRoomType = bookingCard.type === roomType;
            const matchCapacity =
              bookingCard.capacity >=
              parseInt(adults, 10) + parseInt(children, 10);

            // Return true if all conditions match
            return matchRoomType && matchCapacity;
          });

          setRoomsDetails(filteredData);
        }
      } catch (error) {
        setLoading(false); // Set loading to false in case of an error
        console.error("Error fetching data:", error);
      }
    };

    filterData();
  }, [inputFieldUpdated, roomType, adults, children]);

  return (
    <div className="guestroomContainer_rooms_standardrates">
      {loading ? (
        <p>Loading...</p>
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
