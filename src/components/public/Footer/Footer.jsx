import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="elegant-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">DentalCare</h2>
            <p className="footer-tagline">Premium Dental Solutions</p>
            <div className="social-links">
              <a href="#">
                <FaFacebook className="social-icon" />
              </a>
              <a href="#">
                <FaTwitter className="social-icon" />
              </a>
              <a href="#">
                <FaInstagram className="social-icon" />
              </a>
              <a href="#">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Dentists</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              <li>
                <a href="#">General Dentistry</a>
              </li>
              <li>
                <a href="#">Cosmetic Dentistry</a>
              </li>
              <li>
                <a href="#">Orthodontics</a>
              </li>
              <li>
                <a href="#">Emergency Care</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt /> 123 Dental Street, Health City
              </li>
              <li>
                <FaPhone /> (123) 456-7890
              </li>
              <li>
                <FaEnvelope /> contact@dentalcare.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 DentalCare. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
