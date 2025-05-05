import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./NavBar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="navbar"
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="navbar__logo">
            <img
              src="/images/logo.png"
              alt="Clinic Logo"
              className="navbar__logo-img"
            />
            <span className="navbar__logo-text">DentServe SJDM</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                navbar__link 
                ${isActive ? "navbar__link--active" : ""}
              `}
            >
              {link.label}
              <motion.div
                className="navbar__underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="navbar__auth">
          <Link to={"/login"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar__btn navbar__btn--login"
            >
              Log In
            </motion.button>
          </Link>
          <Link to={"/signup"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar__btn navbar__btn--signup"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`navbar__hamburger ${
              isMenuOpen ? "navbar__hamburger--open" : ""
            }`}
          />
          <div
            className={`navbar__hamburger ${
              isMenuOpen ? "navbar__hamburger--open" : ""
            }`}
          />
          <div
            className={`navbar__hamburger ${
              isMenuOpen ? "navbar__hamburger--open" : ""
            }`}
          />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="navbar__mobile"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    navbar__mobile-link 
                    ${isActive ? "navbar__mobile-link--active" : ""}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="navbar__mobile-auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="navbar__mobile-btn"
                >
                  Log In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="navbar__mobile-btn"
                >
                  Sign Up
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default NavBar;
