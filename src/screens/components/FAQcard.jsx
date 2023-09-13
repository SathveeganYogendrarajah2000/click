const FAQcard = (props) => {
  return (
    <div className="faqCardContainer">
      <div className="faqCardContainer_faq">
        <div className="faqCardContainer_faq_question">{props.question}</div>
        <div className="faqCardContainer_faq_answer">
          {props.answer.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="faqCardContainer_img">
        <img
          className="faqCardContainer_img_image"
          src={props.imgPath}
          alt="faq"
        />
      </div>
    </div>
  );
};

export default FAQcard;
