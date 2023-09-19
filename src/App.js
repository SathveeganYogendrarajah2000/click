import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.min.css";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Booking from "./screens/Booking";
import DineIn from "./screens/DineIn";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import FindReservation from "./screens/FindReservation";
import CheckoutPage from "./screens/CheckoutPage";
import UserProfile from "./screens/UserProfile";
import { useState } from "react";
import FloatingChatButton from "./screens/components/FloatingChatButton";
import Chatbot from "./screens/components/Chatbot";
import FoodForm from "./screens/FoodForm";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = (isOpen) => {
    setIsChatbotOpen(isOpen);
    console.log(isOpen);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking/*" element={<Booking />} />
          <Route path="/checkout/:roomId" element={<CheckoutPage />} />
          <Route path="/dinein/*" element={<DineIn />} />
          <Route path="/dinein/findReservation" element={<FindReservation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/foodform" element={<FoodForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <FloatingChatButton onClick={() => toggleChatbot(!isChatbotOpen)} />
      {/* <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} /> */}
      <Chatbot isOpen={isChatbotOpen} />
    </div>
  );
}

export default App;
