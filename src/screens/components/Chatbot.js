const Chatbot = ({ isOpen }) => {
  const chatbotStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    bottom: "50px",
    right: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
  };

  return (
    <iframe
      title="chatbot"
      allow="microphone;"
      width="350"
      height="430"
      style={chatbotStyle}
      src="https://console.dialogflow.com/api-client/demo/embedded/b03404e7-69c4-435b-92a2-3c2d464fb635"
    ></iframe>
  );
};

export default Chatbot;
