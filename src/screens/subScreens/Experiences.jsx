import { NavLink } from "react-router-dom";

const Experiences = () => {
  return (
    <div className="experienceContainer">
      <h1 className="experienceContainer_heading">Welcome to HRMIS</h1>
      <h2 className="experienceContainer_subHeading">
        Elevate Your Hotel and Restaurant Management
      </h2>
      <p className="experienceContainer_description">
        Discover how our Hotel and Restaurant Management Information System
        (HRMIS) can revolutionize your hospitality business and take guest
        satisfaction to new heights.
      </p>
      <h2 className="experienceContainer_keyFeatures">Key Features</h2>
      <p className="experienceContainer_featureText">
        Explore the robust features that make HRMIS the ideal choice for your
        hotel and restaurant:
      </p>
      <ul className="experienceContainer_featureList">
        <li className="experienceContainer_featureItem">
          Reservations:
          <span className="experienceContainer_featureItem_text">
            Effortlessly manage room and table bookings.
          </span>
        </li>
        <li className="experienceContainer_featureItem">
          Inventory Control:
          <span className="experienceContainer_featureItem_text">
            Optimize stock levels and reduce waste.
          </span>
        </li>
        <li className="experienceContainer_featureItem">
          Point of Sale:
          <span className="experienceContainer_featureItem_text">
            Streamline restaurant transactions.
          </span>
        </li>
        <li className="experienceContainer_featureItem">
          Guest Profiles:
          <span className="experienceContainer_featureItem_text">
            Personalize the guest experience.
          </span>
        </li>
        <li className="experienceContainer_featureItem">
          Analytics:
          <span className="experienceContainer_featureItem_text">
            Make data-driven decisions.
          </span>
        </li>
      </ul>
      <h2 className="experienceContainer_benefits">
        Benefits for Your Business
      </h2>
      <p className="experienceContainer_benefitsText">
        Unlock a range of benefits by integrating HRMIS into your operations:
      </p>
      <ul className="experienceContainer_benefitsList">
        <li className="experienceContainer_benefitsItem">
          Improved Efficiency:
          <span className="experienceContainer_benefitsItem_text">
            Automate manual tasks and reduce errors.
          </span>
        </li>
        <li className="experienceContainer_benefitsItem">
          Enhanced Guest Experience:
          <span className="experienceContainer_benefitsItem_text">
            Tailor services to individual preferences.
          </span>
        </li>
        <li className="experienceContainer_benefitsItem">
          Cost Savings:
          <span className="experienceContainer_benefitsItem_text">
            Reduce waste and improve resource allocation.
          </span>
        </li>
        <li className="experienceContainer_benefitsItem">
          Real-Time Insights:
          <span className="experienceContainer_benefitsItem_text">
            Make informed decisions with up-to-the-minute data.
          </span>
        </li>
        <li className="experienceContainer_benefitsItem">
          Competitive Advantage:
          <span className="experienceContainer_benefitsItem_text">
            Stay ahead in a competitive industry.
          </span>
        </li>
      </ul>
      <h2 className="experienceContainer_performance">Performance Metrics</h2>
      <p className="experienceContainer_performanceText">
        See the numbers that matter:
      </p>
      <ul className="experienceContainer_performanceList">
        <li className="experienceContainer_performanceItem">
          Room Occupancy:
          <span className="experienceContainer_performanceItem_text">
            Increased by 25%
          </span>
        </li>
        <li className="experienceContainer_performanceItem">
          Restaurant Revenue:
          <span className="experienceContainer_performanceItem_text">
            Grew by 20%
          </span>
        </li>
        <li className="experienceContainer_performanceItem">
          Guest Satisfaction:
          <span className="experienceContainer_performanceItem_text">
            Improved by 30%
          </span>
        </li>
      </ul>
      <h1 className="experienceContainer_support">24/7 Support</h1>
      <p className="experienceContainer_supportText">
        Our dedicated support team is available round-the-clock to assist you.
      </p>

      <h2 className="experienceContainer_faq">FAQs</h2>
      <p className="experienceContainer_faqText">
        Have questions? We have answers.
      </p>
      <NavLink className="experienceContainer_faqLink" to="/booking/overview">
        Read FAQs
      </NavLink>
    </div>
  );
};

export default Experiences;
