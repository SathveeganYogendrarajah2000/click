import chatLogo from '../../assets/comment-dots-regular.svg';
const FloatingChatButton = ({ onClick }) => {
  const buttonStyle = {
    'text-align': 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '10px', // Adjust as needed for the desired vertical position
    right: '20px', // Adjust as needed for the desired horizontal position
    background: '#aa7938', // Button background color
    color: '#fff', // Button text color
    // padding: '10px 20px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '1000', // Ensure the button is above other content
    opacity: '0.8',
    'border-radius': '10px',
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <img src={chatLogo} alt="Chat bot" width={25} />
    </div>
  );
};

export default FloatingChatButton;
