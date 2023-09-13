// custom hook to handle search logic
import { useState } from "react";

const useSearch = () => {
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Room Type:", roomType);
    console.log("Check-In Date:", checkInDate);
    console.log("Check-Out Date:", checkOutDate);
    console.log("Adults:", adults);
    console.log("Children:", children);
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
