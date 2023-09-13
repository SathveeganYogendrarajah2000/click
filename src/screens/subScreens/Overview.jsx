import FAQcard from "../components/FAQcard";

const Overview = () => {
  const faqData = [
    {
      question: "IS IT SAFE TO TRAVEL TO AND ABOUT SRI LANKA RIGHT NOW?",
      answer: [
        "Yes, Sri Lanka is a safe destination for tourists from all over the world and in fact, many are already in the island making memories for a lifetime.",
        "Over the past months, Sri Lankans frustrated with corruption sought to raise their voices against those responsible. Although this struggle was sensationally portrayed as widespread unrest, travellers within Sri Lanka and the tourism industry was not affected in any way. With the struggle fully ceasing, Sri Lanka is your perfect holiday destination.",
      ],
      imgPath:
        "https://www.jetwinghotels.com/wp-content/uploads/2019/09/free-visa-stock-847x760.jpg",
    },
    {
      question: "WHAT IS YOUR CANCELLATION POLICY?",
      answer: [
        "FLEXIBLE CANCELLATION POLICIES AVAILABLE",
        "We have offered both flexible and strict cancellation policies for your stays, depending on your stay dates, and the booking channel.",
        "Please read through our Terms and conditions for more details.",
      ],
      imgPath:
        "https://www.jetwinghotels.com/wp-content/uploads/2019/07/cancel-847x760.jpg",
    },
    {
      question:
        "WILL I BE ABLE TO TRAVEL AROUND SRI LANKA ONCE I ARRIVE IN THE COUNTRY?",
      answer: [
        "YES",
        "Sri Lanka experienced acute fuel shortages over the past months, resultant from the economic downturn. However, the public transport network of railways and buses are fully operational and can connect you from the airport to the commercial capital of Colombo and throughout the entire island to our family of hotels. In fact, most tourists prefer taking the trains around the country for the incredible experiences and stunning views they offer, especially in the hill country!",
        "There are many companies in Sri Lanka, will be happy to organize bespoke guided tours and planned itineraries around Sri Lanka. Simply visit www.lankatravels.com or drop an email to inquiries@lankatravels.com.",
        "For those looking to rent and drive a vehicle, a fuel quota ticket can be obtained at the airport.",
      ],
      imgPath:
        "https://www.jetwinghotels.com/wp-content/uploads/2019/07/normal-life-847x760-1.jpg",
    },
  ];

  return (
    <div className="overviewContainer">
      {faqData.map((faq, index) => (
        <FAQcard
          key={index} // Use a unique key for each card (typically an ID)
          question={faq.question}
          answer={faq.answer}
          imgPath={faq.imgPath}
        />
      ))}
    </div>
  );
};

export default Overview;
