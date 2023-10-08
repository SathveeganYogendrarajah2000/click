import chatLogo from "../../assets/comment-dots-regular.svg";
const FloatingChatButton = ({ onClick }) => {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "10px", 
    right: "20px", 
    background: "#aa7938", 
    color: "#fff", 
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000", // Ensure the button is above other content
    opacity: "0.8",
    borderRadius: "10px",
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <img src={chatLogo} alt="Chat bot" width={25} />
    </div>
  );
};

export default FloatingChatButton;
