import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero-section"
    >
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="hero-title">
          Precision Dental Care
          <span className="title-highlight">For Modern Lifestyles</span>
        </h1>

        <motion.div
          className="cta-wrapper"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-primary"
          >
            Book Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-secondary"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
