const FloatingChatButton = ({ onClick }) => {
  const buttonStyle = {
    "text-align": "center",
    position: "fixed",
    width: "350px",
    bottom: "10px", // Adjust as needed for the desired vertical position
    right: "20px", // Adjust as needed for the desired horizontal position
    background: "#007bff", // Button background color
    color: "#fff", // Button text color
    padding: "10px 20px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000", // Ensure the button is above other content
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      Chat
    </div>
  );
};

export default FloatingChatButton;
