// custom hook to handle search logic
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  const handleSearch = (rooms, availabilityData) => {
    let filteredRooms = rooms;

    if (roomType) {
      filteredRooms = filteredRooms.filter((room) => room.type === roomType);
    }

    if (checkInDate && checkOutDate) {
      filteredRooms = filteredRooms.filter((room) => {
        const roomAvailability = availabilityData[room.id];
        return (
          roomAvailability &&
          roomAvailability.checkAvailability(checkInDate, checkOutDate)
        );
      });
    }

    const totalCapacity = parseInt(adults, 10) + parseInt(children, 10);

    if (totalCapacity > 0) {
      filteredRooms = filteredRooms.filter(
        (room) => room.capacity >= totalCapacity
      );
    }

    // Now, filteredRooms contains the rooms that meet all criteria.
    console.log("Filtered Rooms:", filteredRooms);
    navigate("/booking/guestrooms/standardrates");
  };

  return {
    roomType,
    setRoomType,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    adults,
    setAdults,
    children,
    setChildren,
    handleSearch,
  };
};

export default useSearch;
