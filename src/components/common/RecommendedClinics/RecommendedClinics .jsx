import { useState } from "react";
import {
  FaClinicMedical,
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./RecommendedClinics.css";

const RecommendedClinics = ({ clinics }) => {
  const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

  return (
    <section className="recommended-clinic">
      <div className="recommended-clinic__header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="recommended-clinic__title"
        >
          Premium Dental Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="recommended-clinic__subtitle"
        >
          Verified Excellence in Dental Care
        </motion.p>
      </div>

      <div className="recommended-clinic__grid">
        {clinics.map((clinic) => (
          <motion.div
            key={clinic.id}
            className="recommended-clinic__card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Clinic Image Section */}
            <div className="recommended-clinic__image-container">
              <img
                src={clinic.imageUrl}
                alt={clinic.name}
                className="recommended-clinic__image"
              />
              <div className="recommended-clinic__badge">
                <FaStar className="recommended-clinic__icon--star" />
                <span>Top Rated</span>
              </div>
            </div>

            <div className="recommended-clinic__card-header">
              <h3 className="recommended-clinic__name">{clinic.name}</h3>

              <div className="recommended-clinic__availability">
                <div className="recommended-clinic__availability-meter">
                  <motion.div
                    className="recommended-clinic__availability-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${clinic.availability}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className="recommended-clinic__availability-text">
                  {clinic.availability}% Availability
                </span>
              </div>
            </div>

            <div className="recommended-clinic__details">
              <div className="recommended-clinic__detail-item">
                <FaMapMarkerAlt className="recommended-clinic__icon" />
                <p className="recommended-clinic__address">{clinic.address}</p>
              </div>

              <div className="recommended-clinic__detail-item">
                <FaClock className="recommended-clinic__icon" />
                <p>{clinic.operating_hours}</p>
              </div>
            </div>

            <div className="recommended-clinic__services">
              <h4 className="recommended-clinic__services-title">
                Specialized Services
              </h4>
              <div className="recommended-clinic__services-list">
                {clinic.services.slice(0, 4).map((service, index) => (
                  <motion.div
                    key={index}
                    className="recommended-clinic__service-item"
                    onClick={() =>
                      setExpandedServiceIndex(
                        expandedServiceIndex === index ? null : index
                      )
                    }
                    whileHover={{ y: -2 }}
                  >
                    <div className="recommended-clinic__service-header">
                      <motion.div
                        animate={{
                          rotate: expandedServiceIndex === index ? 180 : 0,
                        }}
                      >
                        <FaChevronDown className="recommended-clinic__icon--expand" />
                      </motion.div>
                      <span className="recommended-clinic__service-name">
                        {service.split(":")[0].trim()}
                      </span>
                    </div>
                    {expandedServiceIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="recommended-clinic__service-details"
                      >
                        {service.split(":")[1].trim()}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              className="recommended-clinic__cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaClinicMedical className="recommended-clinic__icon--cta" />
              Schedule Consultation
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedClinics;
