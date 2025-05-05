import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaEnvelope,
  FaComments,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaClinicMedical,
  FaUserShield,
} from "react-icons/fa";
import "./AboutPage.css";

// Animation variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const About = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const features = [
    {
      icon: <FaCalendarCheck />,
      title: "Intelligent Scheduling System",
      text: "24/7 booking with real-time clinic availability updates and instant confirmation",
      stat: "98% Appointment Accuracy",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Precision Clinic Matching",
      text: "AI-powered recommendations based on location, specialty, and patient reviews",
      stat: "2,500+ Partner Clinics",
    },
    {
      icon: <FaEnvelope />,
      title: "Smart Notification Suite",
      text: "Multi-channel reminders with integrated health preparation guidelines",
      stat: "92% Reduction in No-Shows",
    },
    {
      icon: <FaComments />,
      title: "Verified Feedback Ecosystem",
      text: "Dual-authenticated reviews ensuring genuine patient experiences",
      stat: "4.9/5 Average Rating",
    },
    {
      icon: <FaClinicMedical />,
      title: "Clinic Dashboard Analytics",
      text: "Visual insights on appointments, patient demographics, and clinic efficiency",
      stat: "85% User Engagement",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Real-Time Queue Tracking",
      text: "Minimize wait time uncertainty with live clinic queue visibility",
      stat: "50% Drop in Overcrowding",
    },
  ];

  const faqItems = [
    {
      question: "How do we ensure data privacy compliance?",
      answer:
        "We implement modern encryption standards and limit access to sensitive information, following local data privacy regulations.",
    },
    {
      question: "What makes your review system trustworthy?",
      answer:
        "All reviews are tied to real appointments, and only verified users can submit feedback.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="trust-badge"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <FaUserShield />
              <span>HIPAA-Aware Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Redefining Dental Care Coordination
            </motion.h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bridging <span className="highlight">patients</span> and
              <span className="highlight"> accredited professionals</span>{" "}
              through secure, intelligent healthcare technology
            </motion.p>

            <motion.div
              className="impact-stats"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  icon: <FaClinicMedical />,
                  value: "2,500+",
                  label: "Verified Clinics",
                },
                {
                  icon: <FaUserShield />,
                  value: "1M+",
                  label: "Secure Bookings",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.icon}
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="core-values section-bg"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <motion.div className="section-header" variants={fadeIn}>
            <h2>Enterprise-Grade Platform Features</h2>
            <p className="section-subtitle">
              Designed for modern dental healthcare needs
            </p>
          </motion.div>

          <motion.div
            className="values-grid"
            variants={{
              onscreen: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div className="value-icon" whileHover={{ rotate: 15 }}>
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <motion.div
                  className="feature-stat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span>{feature.stat}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section
        className="security-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="security-content"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div className="security-badge" variants={cardVariants}>
              <FaShieldAlt className="shield-icon" />
              <div className="badge-content">
                <span className="badge-title">Encrypted Data Handling</span>
                <span className="badge-subtitle">Patient Trust First</span>
              </div>
            </motion.div>

            <motion.div className="security-details" variants={fadeIn}>
              <h2>Committed to Your Privacy</h2>
              <motion.div
                className="security-features"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  "Encrypted communication protocols",
                  "Role-based access for clinic personnel",
                  "Routine security assessments",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    className="security-point"
                    variants={cardVariants}
                  >
                    <div className="point-icon">✓</div>
                    <p>{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="faq-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="section-header">
            <h2>Enterprise Knowledge Base</h2>
            <p className="section-subtitle">
              Answers to common and technical queries
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className={`faq-item ${
                  activeFaqIndex === index ? "active" : ""
                }`}
                layout
              >
                <motion.h3 onClick={() => toggleFaq(index)} layout>
                  {item.question}
                  <motion.span
                    animate={{ rotate: activeFaqIndex === index ? 180 : 0 }}
                  >
                    <FaChevronDown />
                  </motion.span>
                </motion.h3>

                <AnimatePresence>
                  {activeFaqIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
