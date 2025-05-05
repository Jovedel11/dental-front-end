import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaMapMarkedAlt,
  FaComments,
  FaClinicMedical,
} from "react-icons/fa";
import "./Service.css";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="system-overview"
    >
      <div className="container">
        <div className="system-header">
          <h2 className="system-title">
            <span className="title-decorator"></span>
            Clinic Management Ecosystem
          </h2>
          <p className="system-tagline">
            Transforming Dental Care Through Digital Innovation
          </p>
        </div>

        <motion.div
          className="system-card main-description"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="system-icon">
            <FaClinicMedical />
          </div>
          <h3>Comprehensive Practice Solution</h3>
          <p className="lead-text">
            Our integrated platform revolutionizes dental practice management by
            combining patient empowerment tools with advanced clinic operations
            features in one seamless ecosystem.
          </p>
        </motion.div>

        <div className="feature-grid">
          {[
            {
              icon: <FaMobileAlt />,
              title: "Digital Appointment Management",
              items: [
                "Real-time online booking",
                "Automated SMS/Email reminders",
                "Calendar synchronization",
                "Waitlist management",
              ],
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Smart Clinic Navigation",
              items: [
                "Live clinic location tracking",
                "Real-time availability updates",
                "Interactive practice map",
                "Accessibility features",
              ],
            },
            {
              icon: <FaComments />,
              title: "Patient Engagement Suite",
              items: [
                "Secure messaging portal",
                "Treatment feedback system",
                "Educational resources",
                "Automated follow-ups",
              ],
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <ul className="feature-list">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="value-proposition">
          <div className="value-content">
            <h3>Strategic Advantages</h3>
            <div className="value-grid">
              <div className="value-item">
                <h4>For Patients</h4>
                <p>
                  24/7 access to dental services
                  <br />
                  Transparent process tracking
                  <br />
                  Reduced waiting times
                  <br />
                  Enhanced care experience
                </p>
              </div>
              <div className="value-item">
                <h4>For Clinics</h4>
                <p>
                  Optimized scheduling
                  <br />
                  Digital workflow automation
                  <br />
                  Patient satisfaction metrics
                  <br />
                  Operational analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Powered By Modern Technologies</h3>
          <div className="tech-badges">
            <span>React.js</span>
            <span>Supabase</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
