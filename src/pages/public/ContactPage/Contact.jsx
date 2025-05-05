import { MapPin, Phone, Mail, ClipboardList } from "lucide-react";
import usableForm from "../../../hooks/usableForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useUserData from "../../../hooks/useUserData";
import { toast } from "react-toastify";
import "./ContactPage.css";

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

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Contacts = () => {
  const location = useLocation();
  const { users } = useUserData();
  const { register, handleSubmit, errors, reset } = usableForm();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash === "#agreement") {
        const scrollToForm = () => {
          const element = document.getElementById("agreement");
          if (element) {
            const yOffset = -100;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          } else {
            requestAnimationFrame(scrollToForm);
          }
        };

        scrollToForm();
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [location.hash]);

  const onSubmit = async (data) => {
    try {
      const lastId =
        users.pendingstaff.length > 0
          ? Math.max(...users.pendingstaff.map((p) => p.id))
          : 0;
      const newId = lastId + 1;

      const formData = {
        id: newId,
        ...data,
        documents: Array.from(data.documents).map((file) => file.name),
      };

      const response = await fetch("http://localhost:3001/pending-staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", response);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        throw new Error("Failed to submit application");
      }

      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to submit application");
    }
  };

  const contactItems = [
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone Support",
      content: "(+63) 912 345 6789",
      sub: "Mon-Fri: 8AM - 5PM",
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      content: "support@san-josedental.com",
      sub: "Response within 24hrs",
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Office Address",
      content: "123 Dental Ave, San Jose City",
      sub: "Nueva Ecija, Philippines",
    },
  ];

  const services = [
    "General Dentistry",
    "Orthodontics",
    "Pediatric",
    "Surgery",
    "Implants",
    "Cosmetic Dentistry",
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      content: "Get featured in our network of trusted dental providers",
    },
    {
      title: "Smart Scheduling",
      content: "Advanced booking system with automated reminders",
    },
    {
      title: "Quality Assurance",
      content: "Maintain high standards through patient feedback",
    },
  ];

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-container">
          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Connect With Our Dental Network
          </motion.h1>
          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Partner with the leading dental care platform in Nueva Ecija.
            Whether you're a patient or practitioner, we're here to elevate
            dental care experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Cards Grid */}
      <motion.div
        className="contact-cards-grid"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          onscreen: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="contact-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-content">
              <motion.div whileHover={{ rotate: 20 }}>{item.icon}</motion.div>
              <h3>{item.title}</h3>
              <p className="card-main-text">{item.content}</p>
              <p className="card-sub-text">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Partnership Form */}
      <motion.section
        id="agreement"
        className="partnership-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div className="form-container">
          <motion.div
            className="form-header"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <ClipboardList className="form-icon" />
            <h2>Clinic Partnership Application</h2>
            <p>Join our network of trusted dental providers</p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="partner-form">
            {/* Clinic Info */}
            <motion.div
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-title">Clinic Information</h4>
              <div className="form-group grid-col-2">
                {[
                  {
                    label: "Clinic Name",
                    name: "clinicName",
                    type: "text",
                    placeholder: "e.g., San Jose Dental Care",
                    options: { required: "Clinic name is required" },
                  },
                  {
                    label: "Clinic Contact Number",
                    name: "phone",
                    type: "text",
                    placeholder: "e.g., 09123456789",
                    options: { required: "Phone number is required" },
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    className="form-field"
                    variants={formItemVariants}
                  >
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, field.options)}
                    />
                    {errors[field.name] && (
                      <span className="error-message">
                        {errors[field.name].message}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="form-group grid-col-2">
                {[
                  {
                    label: "Doctor's Full Name",
                    name: "doctorName",
                    type: "text",
                    placeholder: "e.g., Dr. Juan Dela Cruz",
                    options: { required: "Doctor's name is required" },
                  },
                  {
                    label: "Years in Practice",
                    name: "experience",
                    type: "number",
                    placeholder: "e.g., 5",
                    options: { min: 1 },
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    className="form-field"
                    variants={formItemVariants}
                  >
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, field.options)}
                    />
                    {errors[field.name] && (
                      <span className="error-message">
                        {errors[field.name].message}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-title">Services Offered</h4>
              <div className="services-grid">
                {services.map((service) => (
                  <motion.label
                    key={service}
                    className="service-option"
                    whileHover={{ scale: 1.05 }}
                  >
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                    />
                    <span>{service}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Location & Docs */}
            <motion.div
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-title">Location & Credentials</h4>
              <div className="form-group">
                {[
                  {
                    label: "Clinic Address",
                    name: "location",
                    type: "text",
                    placeholder: "e.g., 123 Dental Ave, San Jose City",
                    options: { required: "Location is required" },
                  },
                  {
                    label: "Upload Accreditation Documents",
                    name: "documents",
                    type: "file",
                    options: { required: "Documents are required" },
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    className="form-field"
                    variants={formItemVariants}
                  >
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      multiple={field.type === "file"}
                      placeholder={field.placeholder}
                      {...register(field.name, field.options)}
                    />
                    {errors[field.name] && (
                      <span className="error-message">
                        {errors[field.name].message}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Agreement */}
            <motion.div
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="form-field checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    {...register("agreement", {
                      required: "You must agree to proceed",
                    })}
                  />
                  I agree to the terms and conditions of partnership.
                </label>
                {errors.agreement && (
                  <span className="error-message">
                    {errors.agreement.message}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Partnership
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="benefits-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <h3>Why Partner With Us?</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4>{benefit.title}</h4>
              <p>{benefit.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Contacts;
