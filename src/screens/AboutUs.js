import NavBar from "./components/NavBar";
import "../css/aboutUs.css";
import Footer from "./components/Footer";
import get_in_touch from "../assets/images/Get-In-Touch-headline.png";
import follow_us from "../assets/images/follow-us.png";
import online_res from "../assets/images/online-reservations.jpg";
import visit_us from "../assets/images/plan-visit-sign.png";
import feedback from "../assets/images/Feedback.png";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="aboutUs">
        <div className="aboutUs_about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="aboutUs_row">
          <div className="aboutUs_row_column">
            <div className="aboutUs_row_column_card">
              {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%" /> */}
              <div class="aboutUs_row_column_card_container">
                <h2>Harsha</h2>
                <p className="aboutUs_row_column_card_container_title">
                  CEO & Founder
                </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="aboutUs_row_column">
            <div className="aboutUs_row_column_card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%" /> */}
              <div className="aboutUs_row_column_card_container">
                <h2>Sathveegan</h2>
                <p className="aboutUs_row_column_card_container_title">
                  Art Director
                </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="aboutUs_row_column">
            <div className="aboutUs_row_column_card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
              <div className="aboutUs_row_column_card_container">
                <h2>Sathurgini</h2>
                <p className="aboutUs_row_column_card_container_title">
                  Designer
                </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="aboutUs_contentHeading1">
        Your Gateway to Exceptional Dining and Comfort
      </h1>
      <div className="aboutUs_content_container_out">
        <p className="aboutUs_contentHeading4">
          At CLICK, we take immense pride in providing our guests with not just
          a meal but a memorable experience. Whether you're a culinary
          enthusiast or someone seeking a cozy retreat, we offer the perfect
          blend of hospitality and gastronomy. Your feedback, questions, or
          simply a friendly chat are all important to us. Here's how you can
          reach out to CLICK:
        </p>

        <div className="aboutUs_content_container_mid">
          <div className="aboutUs_content_container_in">
            <img
              src={get_in_touch}
              alt="getInTouch"
              className="aboutUs_content_container_image"
            />
            <h3 className="aboutUs_contentHeading3">Get in Touch:</h3>
            <p className="aboutUs_contentHeading4">
              Address: Insert Hotel and Restaurant Address Here
            </p>
            <p className="aboutUs_contentHeading4">
              Phone: Insert Contact Number
            </p>
            <p className="aboutUs_contentHeading4">
              Email: Insert Contact Email Address
            </p>
          </div>

          <div className="aboutUs_content_container_in">
            <img
              src={follow_us}
              alt="followUs"
              className="aboutUs_content_container_image"
            />
            <h3 className="aboutUs_contentHeading3">Follow Us:</h3>
            <p className="aboutUs_contentHeading4">
              Connect with us on social media platforms such as Facebook,
              Instagram, and Twitter. We love engaging with our guests and
              sharing our passion for good food and a comfortable stay.
            </p>
          </div>

          <div className="aboutUs_content_container_in">
            <img
              src={online_res}
              alt="onlineRes"
              className="aboutUs_content_container_image"
            />
            <h3 className="aboutUs_contentHeading3">Online Reservation:</h3>
            <p className="aboutUs_contentHeading4">
              Planning a visit to CLICK is just a few clicks away. Use our
              user-friendly online reservation system to secure your table at
              your preferred date and time. We recommend making reservations in
              advance, especially during peak dining hours.
            </p>
          </div>

          <div className="aboutUs_content_container_in">
            <img
              src={feedback}
              alt="Feedback"
              className="aboutUs_content_container_image"
            />
            <h3 className="aboutUs_contentHeading3">
              Feedback and Suggestions:
            </h3>
            <p className="aboutUs_contentHeading4">
              Your feedback helps us continuously improve our services. If
              you've recently dined with us or stayed at our hotel, please take
              a moment to share your thoughts. We value your opinions, and they
              contribute to the refinement of our offerings.
            </p>
          </div>

          <div className="aboutUs_content_container_in">
            <img
              src={visit_us}
              alt="visitUs"
              className="aboutUs_content_container_image"
            />
            <h3 className="aboutUs_contentHeading3">Visit Us:</h3>
            <p className="aboutUs_contentHeading4">
              The best way to experience CLICK is in person. Come visit us at
              our conveniently located establishment and indulge in the
              delightful ambiance, delectable dishes, and top-notch service that
              define us.
            </p>
          </div>
        </div>

        <h4 className="aboutUs_contentHeading4">
          At CLICK, we believe that the key to a great dining and lodging
          experience is open communication. Whether you're a returning guest or
          visiting us for the first time, your satisfaction is our priority.
          Feel free to reach out to us through any of the provided channels, and
          we look forward to serving you soon. Your journey to exquisite dining
          and comfort starts with a CLICK.
        </h4>
      </div>
      <h2 className="aboutUs_contentHeading1">
        Thank you for choosing CLICK as your destination for exceptional cuisine
        and relaxation. We can't wait to welcome you!
      </h2>
      <Footer />
    </>
  );
};

export default AboutUs;
