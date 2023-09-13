import React from "react";

const Footer = () => {
  return (
    <div className="Box">
      <h1 style={{ color: "#d28422", textAlign: "center", marginTop: "-50px" }}>
        CLICK The Luxurious Hotel in SriLanka
      </h1>
      <div className="Box_Container">
        <div className="Box_Container_Row">
          <div className="Box_Container_Row_Column">
            <div className="Box_Container_Row_Heading">About Us</div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Aim
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Vision
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Testimonials
            </div>
          </div>
          <div className="Box_Container_Row_Column">
            <div className="Box_Container_Row_Heading">Services</div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Writing
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Internships
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Coding
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Teaching
            </div>
          </div>
          <div className="Box_Container_Row_Column">
            <div className="Box_Container_Row_Heading">Contact Us</div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Phone 01
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Phone 02
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              Address
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              SriLanka
            </div>
          </div>
          <div className="Box_Container_Row_Column">
            <div className="Box_Container_Row_Heading">Social Media</div>
            <div className="Box_Container_Row_FooterLink" href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </div>
            <div className="Box_Container_Row_FooterLink" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
