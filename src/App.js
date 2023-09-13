import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.min.css';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import Booking from './screens/Booking';
import DineIn from './screens/DineIn';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking/*" element={<Booking />} />
          <Route path="/dinein/*" element={<DineIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
