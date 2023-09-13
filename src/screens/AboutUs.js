import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="aboutUs">
        <div class="aboutUs_about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div class="aboutUs_row">
          <div class="aboutUs_row_column">
            <div class="aboutUs_row_column_card">
              {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%" /> */}
              <div class="aboutUs_row_column_card_container">
                <h2>Harsha</h2>
                <p class="aboutUs_row_column_card_container_title">
                  CEO & Founder
                </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button class="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div class="aboutUs_row_column">
            <div class="aboutUs_row_column_card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%" /> */}
              <div class="aboutUs_row_column_card_container">
                <h2>Sathveegan</h2>
                <p class="aboutUs_row_column_card_container_title">
                  Art Director
                </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button class="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div class="aboutUs_row_column">
            <div class="aboutUs_row_column_card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%" /> */}
              <div class="aboutUs_row_column_card_container">
                <h2>Sathurgini</h2>
                <p class="aboutUs_row_column_card_container_title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button class="aboutUs_row_column_card_container_button">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
