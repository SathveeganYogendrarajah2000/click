import React, { useState } from "react";
import RoomCard from "./RoomCard"; // Import your RoomCard component
import { Icon } from "@iconify-icon/react";

const Carousel = ({ roomData }) => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const nextRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === roomData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === 0 ? roomData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-container_button" onClick={prevRoom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g transform="translate(32 0) scale(-1 1)">
            <path fill="currentColor" d="M10 17V7l5 5l-5 5Z" />
          </g>
        </svg>
      </button>
      <RoomCard {...roomData[currentRoomIndex]} />
      <button className="carousel-container_button" onClick={nextRoom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path fill="currentColor" d="M10 17V7l5 5l-5 5Z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
