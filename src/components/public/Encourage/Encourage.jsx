import React from "react";
import "./Encourage.css";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRegSmile, FaStar, FaTooth } from "react-icons/fa";
import { MdBarChart, MdOutlineHealthAndSafety } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Encourage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");

    setTimeout(() => {
      window.location.hash = "#agreement";

      const maxAttempts = 5;
      let attempts = 0;

      const scrollInterval = setInterval(() => {
        const element = document.getElementById("agreement");
        attempts++;

        if (element || attempts >= maxAttempts) {
          clearInterval(scrollInterval);
          if (element) {
            const yOffset = -100;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }, 100);
    }, 300);
  };

  return (
    <section className="card-section">
      {/* Section Header */}
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title"
        >
          Transforming Dental Care Experience
        </motion.h2>
        <p className="section-description">
          Join thousands who already improved their dental health through our
          platform
        </p>
      </div>

      <div className="cards-container">
        {/* Patient Card */}
        <motion.div
          className="card patient-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-header">
            <div className="icon-circle">
              <FaRegSmile size={32} />
            </div>
            <h2 className="card-title">Modern Patient Experience</h2>
          </div>

          <ul className="card-list">
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>AI-Powered Matching</h4>
                <p className="subtext">
                  Smart clinic recommendations based on your needs
                </p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Verified Professionals</h4>
                <p className="subtext">DOH-accredited practitioners only</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Digital Records</h4>
                <p className="subtext">Secure cloud-based dental history</p>
              </div>
            </li>
          </ul>

          <div className="stats-grid">
            <div className="stat-item">
              <FaTooth className="stat-icon" />
              <div>
                <h3>5,000+</h3>
                <p>Successful Treatments</p>
              </div>
            </div>
            <div className="stat-item">
              <MdOutlineHealthAndSafety className="stat-icon" />
              <div>
                <h3>98%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <button className="primary-btn">
            Start Your Journey <BsArrowRight className="arrow-icon" />
          </button>

          <div className="footer-note">
            <FaStar className="shield-icon" /> Certified Secure Platform
          </div>
        </motion.div>

        {/* Clinic Card */}
        <motion.div
          className="card clinic-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-header">
            <div className="icon-circle secondary">
              <MdBarChart size={32} />
            </div>
            <h2 className="card-title">Clinic Growth Solutions</h2>
          </div>

          <ul className="card-list">
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Smart Scheduling</h4>
                <p className="subtext">Automated appointment management</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Analytics Suite</h4>
                <p className="subtext">Real-time practice insights</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Automated Booking System</h4>
                <p className="subtext">Reduce no-shows with smart reminders</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Marketing Tools</h4>
                <p className="subtext">Patient acquisition campaigns</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <div>
                <h4>Premium Listing</h4>
                <p className="subtext">Increased visibility in searches</p>
              </div>
            </li>
          </ul>

          <div className="badge-group">
            <div className="badge">
              <FaStar /> Premium Partner Program
            </div>
            <div className="badge">
              <FaStar /> Certified Excellence
            </div>
          </div>

          <button className="primary-btn outline" onClick={handleNavigate}>
            Grow Your Practice <BsArrowRight className="arrow-icon" />
          </button>

          <div className="footer-note">
            <FaStar className="shield-icon" /> DOH-Accredited Network
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Encourage;
