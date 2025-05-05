import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Booking has never been this easy! The clinic matching system found me the perfect dentist in minutes.",
      author: "Maria Dela Cruz",
      role: "Freelance Designer",
      stars: 5,
      image: "/images/dven.png",
    },
    {
      quote:
        "As a senior citizen, I appreciate how user-friendly the platform is. Got my dental check-up booked without any hassle!",
      author: "Ricardo Santos",
      role: "Retired Teacher",
      stars: 5,
      image: "/images/per.png",
    },
    {
      quote:
        "Our clinic saw a 40% increase in new patients after joining the platform. The management tools are fantastic!",
      author: "Dr. Andrea Lim",
      role: "Dental Clinic Owner",
      stars: 5,
      image: "/images/niel.png",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>What Our Community Says</h2>
          <p>Real feedback from people who trust our platform</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="quote-mark">
                <FaQuoteLeft />
              </div>
              <div className="rating">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <div className="author-info">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="author-img"
                />
                <div className="author-details">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="disclaimer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          *Actual patient and clinic testimonials. Some images may be for
          illustration.
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
