const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_content_one">
          <h3>Athena</h3>
          <p>
            <strong>Address:</strong>
          </p>
          <address>
            123 Placeholder Street,
            <br /> Cityville,
            <br /> State Province,
            <br /> Country
          </address>
          <p>
            <strong>Phone Number:</strong> (123) 456-7890
          </p>
        </div>
        <div className="footer_content_two">
          <p>© 2021 RAthena</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="footer_content_three">
            <div className="join">JOIN</div>
            <p>Join with us</p>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
