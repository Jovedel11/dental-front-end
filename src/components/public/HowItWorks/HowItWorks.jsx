import { motion } from "framer-motion";
import { FaUserPlus, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Register Effortlessly",
      description:
        "Create your account in under 30 seconds via email or social media.",
      tooltip: "We prioritize your privacy and data security.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Schedule with Ease",
      description:
        "Select your preferred service, clinic location, and appointment time.",
      tooltip: "See real-time appointment availability.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Confirm and Arrive",
      description:
        "Receive instant booking confirmation and step-by-step directions.",
      tooltip: "We'll also send helpful appointment reminders.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <motion.div
          className="section-headers"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>Experience Seamless Dental Care</h2>
          <p>
            Your journey to a healthier smile begins with three simple steps.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="step-header">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">0{index + 1}</div>
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="tooltip">
                  <span className="tooltip-icon">i</span>
                  <span className="tooltip-text">{step.tooltip}</span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <FiArrowRight className="desktop-arrow" />
                  <div className="mobile-line"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Begin your personalized dental care journey today.
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
