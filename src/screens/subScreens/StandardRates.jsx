import React, { useEffect, useState } from "react";
import RoomBookingCard from "../components/RoomBookingCard";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSearchData } from "../components/SearchDataContext";

const StandardRates = () => {
  const [roomsDetails, setRoomsDetails] = useState([]);
  const { searchData } = useSearchData();
  const { roomType, adults, children, inputFieldUpdated } = searchData;
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rooms"));
        const roomData = [];
        querySnapshot.forEach((doc) => {
          roomData.push(doc.data());
        });
        setRoomsDetails(roomData);
        setOriginalData(roomData); // Save the original data
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
          const filteredData = originalData.filter((bookingCard) => {
            const matchRoomType = bookingCard.type.trim() === roomType.trim();
            const matchCapacity =
              bookingCard.capacity >=
              parseInt(adults, 10) + parseInt(children, 10);

            return matchRoomType && matchCapacity;
          });

          setRoomsDetails(filteredData);
        } else {
          setRoomsDetails(originalData); // Reset to original data
        }
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setLoading(false); // Set loading to false in case of an error
        console.error("Error fetching data:", error);
      }
    };

    filterData();
  }, [inputFieldUpdated, roomType, adults, children, originalData]);

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
