import NavBar from './components/NavBar';
import "../css/about.css"
import Footer from './components/Footer';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div>
      <h1 className='about_contentHeading1'>About Us</h1>
      <h2 className="about_contentHeading2" >Your Gateway to Exceptional Dining and Comfort</h2>
      <h4 className="about_contentHeading4">At CLICK, we take immense pride in providing our guests with not just a meal but a memorable experience.
      Whether you're a culinary enthusiast or someone seeking a cozy retreat, we offer the perfect blend of hospitality and gastronomy.
      Your feedback, questions, or simply a friendly chat are all important to us. Here's how you can reach out to CLICK:</h4>
      <h3 className="about_contentHeading3">Get in Touch:</h3>
      
      <h4 className="about_contentHeading4">Address: Insert Hotel and Restaurant Address Here</h4>
      <h4 className="about_contentHeading4">Phone: Insert Contact Number</h4>
      <h4 className="about_contentHeading4">Email: Insert Contact Email Address</h4>
      <h3 className="about_contentHeading3">Follow Us:</h3>
      <h4 className="about_contentHeading4">Connect with us on social media platforms such as Facebook, Instagram, and Twitter.
      We love engaging with our guests and sharing our passion for good food and a comfortable stay.</h4>
      <h3 className="about_contentHeading3">Online Reservation:</h3>
      <h4 className="about_contentHeading4">Planning a visit to CLICK is just a few clicks away. Use our user-friendly online reservation system to secure
       your table at your preferred date and time. We recommend making reservations in advance, especially during peak dining hours.</h4>
      <h3 className="about_contentHeading3">Feedback and Suggestions:</h3>
      <h4 className="about_contentHeading4">Your feedback helps us continuously improve our services. If you've recently dined with us or stayed at our hotel,
      please take a moment to share your thoughts. We value your opinions, and they contribute to the refinement of our offerings.</h4>
      <h3 className="about_contentHeading3">Visit Us:</h3>
      <h4 className="about_contentHeading4">The best way to experience CLICK is in person. Come visit us at our conveniently located establishment and indulge 
      in the delightful ambiance, delectable dishes, and top-notch service that define us.</h4>
      <h4 className="about_contentHeading4">At CLICK, we believe that the key to a great dining and lodging experience is open communication. Whether you're a returning 
      guest or visiting us for the first time, your satisfaction is our priority. Feel free to reach out to us through any of the 
      provided channels, and we look forward to serving you soon. Your journey to exquisite dining and comfort starts with a CLICK.</h4>
      <h2 className="about_contentHeading2">Thank you for choosing CLICK as your destination for exceptional cuisine and relaxation. We can't wait to welcome you!</h2>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
