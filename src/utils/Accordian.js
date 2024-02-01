import { useState } from "react";
import { plus, minus } from "../constants";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="accordian_main  bg-slate-200 m-10  p-6 rounded-xl">
  <div className="flex items-center  justify-between">
    <div>
      <h2 className="text-2xl font-bold" style={{ fontSize: "20px" }}>
        {title}
      </h2>
    </div>
    {isVisible ? (
      <button onClick={() => setIsVisible(false)} className="flex-shrink-0">
        <img className="h-[26px] w-[26px] rounded-full " src={minus} alt="hide" />
      </button>
    ) : (
      <button onClick={() => setIsVisible(true)} className="flex-shrink-0">
        <img className="h-[26px] w-[26px] rounded-full " src={plus} alt="show" />
      </button>
    )}
  </div >
  {isVisible && (
    <div >
      <p className="text-slate-500 mt-2 font-semibold" style={{ fontSize: "16px" }}>
        {description}
      </p>
    </div>
  )}
</div>

  );
};

const Accordion = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const handleSetVisibleSection = (section) => {
    setVisibleSection(section === visibleSection ? "" : section);
  };

  return (
    <div className="w-[944px] ">
      <Section
        title={"Can I cancel my subscrition?"}
        description={
          "You can cancel your plan whenever you'd like. You will be downgraded to free plan. You won't be locked out of any projects that have paid plans."
        }
        isVisible={visibleSection === "Can I cancel my subscrition?"}
        setIsVisible={() =>
          handleSetVisibleSection("Can I cancel my subscrition?")
        }
      />

      <Section
        title={"What happens when my trial ends?"}
        description={
          "When your trial period ends, your account will automatically be downgraded to our free plan, with limited features andfunctionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform"
        }
        isVisible={visibleSection === "What happens when my trial ends?"}
        setIsVisible={() =>
          handleSetVisibleSection("What happens when my trial ends?")
        }
      />
      <Section
        title={"What payment methods do you offer?"}
        description={
          "We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers"
        }
        isVisible={visibleSection === "What payment methods do you offer?"}
        setIsVisible={() =>
          handleSetVisibleSection("What payment methods do you offer?")
        }
      />
      <Section
        title={"What is your refund policy?"}
        description={
          "Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a fullrefund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the `Help` section in your account or email us at support@Milton.com, and we'llbe happy to assist you"
        }
        isVisible={visibleSection === "What is your refund policy?"}
        setIsVisible={() =>
          handleSetVisibleSection("What is your refund policy?")
        }
      />
      <Section
        title={"Do you offer discounts to educational institutions ?"}
        description={
          "Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we willprovide you with more information on our exclusive educational pricing options"
        }
        isVisible={
          visibleSection ===
          "Do you offer discounts to educational institutions ?"
        }
        setIsVisible={() =>
          handleSetVisibleSection(
            "Do you offer discounts to educational institutions ?"
          )
        }
      />
    </div>
  );
};

export default Accordion;
