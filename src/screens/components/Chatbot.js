// import React, { useEffect, useRef, useState } from "react";

// const Chatbot = ({ isOpen, toggleChatbot }) => {
//   const chatbotStyle = {
//     display: isOpen ? "block" : "none",
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     zIndex: "1000",
//   };

//   const chatbotRef = useRef(null);

//   useEffect(() => {
//     const handleDocumentClick = (event) => {
//       // Check if the click event target is the chatbot or a descendant of it
//       if (chatbotRef.current && chatbotRef.current.contains(event.target)) {
//         return;
//       }

//       // Click outside of the chatbot, close it
//       toggleChatbot(false);
//     };

//     // Add the event listener when the chatbot is open
//     if (isOpen) {
//       document.addEventListener("click", handleDocumentClick);
//     } else {
//       // Remove the event listener when the chatbot is closed
//       document.removeEventListener("click", handleDocumentClick);
//     }

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, [isOpen, toggleChatbot]);

//   return (
//     <div ref={chatbotRef} style={chatbotStyle}>
//       {/* Your iframe code here */}
//       <iframe
//         title="chatbot"
//         allow="microphone;"
//         width="350"
//         height="430"
//         src="https://console.dialogflow.com/api-client/demo/embedded/b03404e7-69c4-435b-92a2-3c2d464fb635"
//       ></iframe>
//     </div>
//   );
// };

// export default Chatbot;

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
