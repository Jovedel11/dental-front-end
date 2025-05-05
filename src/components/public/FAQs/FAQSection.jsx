import { useState } from "react";
import FadeInWrapper from "../Wrapper/Wrapper";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "Do I need an account to book?",
      answer:
        "No account required! Enjoy our guest booking feature for quick reservations. Optionally create an account to track your appointments and access exclusive features.",
    },
    {
      id: 2,
      question: "Is the booking free?",
      answer:
        "Our booking platform is completely free to use. You'll only be charged for services provided by the clinic, with full price transparency before confirmation.",
    },
    {
      id: 3,
      question: "Will I receive a confirmation?",
      answer:
        "Instant digital receipt! Receive SMS and email confirmation with appointment details, clinic location map, and preparation guidelines immediately after booking.",
    },
    {
      id: 4,
      question: "Can I reschedule or cancel appointments?",
      answer:
        "Flexible changes available! Modify or cancel appointments up to 24 hours prior through your confirmation link or patient dashboard, subject to clinic policies.",
    },
    {
      id: 5,
      question: "How do I know clinic availability?",
      answer:
        "Real-time availability updates! Color-coded indicators show clinic capacity: Green (Plenty), Amber (Limited), Red (Fully Booked).",
    },
    {
      id: 6,
      question: "What safety measures are in place?",
      answer:
        "All partner clinics maintain our strict Safety Certified standards. Look for the shield icon indicating enhanced sanitation protocols and staff certifications.",
    },
  ];

  return (
    <section className="faq-section">
      <FadeInWrapper>
        <div className="faq-section__header">
          <h2 className="faq-section__title">Patient Support Center</h2>
          <p className="faq-section__subtitle">
            Quick answers to common questions about appointments, clinics, and
            services
          </p>
        </div>
      </FadeInWrapper>

      <div className="faq-section__grid">
        {faqItems.map((item) => (
          <div
            className={`faq-item ${activeIndex === item.id ? "active" : ""}`}
            key={item.id}
            onClick={() =>
              setActiveIndex(activeIndex === item.id ? null : item.id)
            }
          >
            <div className="faq-item__question">
              <div className="faq-item__icon-container">
                <span className="faq-item__icon"></span>
              </div>
              <h3 className="faq-item__text">{item.question}</h3>
            </div>
            <div className="faq-item__answer">
              <p>{item.answer}</p>
              {item.id === 3 && (
                <div className="faq-extra-info">
                  <span className="info-icon">ℹ️</span>
                  <span>
                    Late cancellations may incur clinic-specific policies
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
