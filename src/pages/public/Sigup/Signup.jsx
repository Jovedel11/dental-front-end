import { useUserContext } from "../../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Check,
  UserPlus,
  Eye,
  EyeOff,
  ChevronDown,
} from "lucide-react";
import usableForm from "../../../hooks/usableForm";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import "./Signup.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Signup = () => {
  const { signup, patients } = useUserContext();
  const { register, handleSubmit, errors, passwords, reset } = usableForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const lastId =
      patients.length > 0 ? Math.max(...datas.map((p) => p.id)) : 0;
    const newId = lastId + 1;

    const patient = {
      id: newId,
      email: data.email,
      name: data.fullname,
      password: data.password,
      phone: data.phone,
      birthdate: data.birthdate,
      address: data.address,
      gender: data.gender,
      checkbox: data.checkbox,
      role: "patient",
    };

    signup(patient);
    navigate(`/patient/${patient.id}`);
    reset();
    setIsLoading(false);
  };

  return (
    <motion.div
      className="signup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="signup__background"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="signup__shape"
            variants={itemVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="signup__container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="signup__content">
          <motion.div
            className="signup__header"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="signup__badge" variants={itemVariants}>
              <UserPlus size={40} className="signup__badge-icon" />
              <motion.div
                className="signup__badge-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
            <motion.h1 className="signup__title" variants={itemVariants}>
              Join Our Dental Community
            </motion.h1>
            <motion.p className="signup__subtitle" variants={itemVariants}>
              Begin your journey to optimal oral health with these benefits:
            </motion.p>
            <motion.div
              className="signup__benefits"
              variants={containerVariants}
            >
              {[
                "Instant appointment access",
                "Personalized care tracking",
                "Priority clinic notifications",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="signup__benefit"
                  variants={itemVariants}
                >
                  <Check size={16} /> {benefit}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="signup__form-wrapper">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="signup__progress"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                />
              )}
            </AnimatePresence>

            <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
              {/* Personal Info Section */}
              <motion.fieldset
                className="signup__fieldset"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.legend
                  className="signup__legend"
                  variants={itemVariants}
                >
                  <UserPlus size={18} />
                  Personal Information
                </motion.legend>

                {/* Full Name */}
                <div className="signup__input-group">
                  <label className="signup__label">Full Name</label>
                  <div className="signup__input-wrapper">
                    <input
                      className="signup__input"
                      type="text"
                      placeholder="Juan Dela Cruz"
                      {...register("fullname", {
                        required: "Full name is required",
                      })}
                    />
                  </div>
                  {errors.fullname && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.fullname.message}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="signup__input-group">
                  <label className="signup__label">Phone Number</label>
                  <div className="signup__input-wrapper">
                    <input
                      className="signup__input"
                      type="tel"
                      placeholder="09XX-XXX-XXXX"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^09\d{9}$/,
                          message: "Invalid phone number format",
                        },
                      })}
                    />
                    <span className="signup__input-hint">
                      Format: 09123456789
                    </span>
                  </div>
                  {errors.phone && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Birthdate */}
                <div className="signup__input-group">
                  <label className="signup__label">Birthdate</label>
                  <DatePicker
                    className="signup__input"
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setValue("birthdate", date, { shouldValidate: true });
                    }}
                    placeholderText="Select your birthdate"
                    dateFormat="yyyy-MM-dd"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={new Date()}
                  />
                  {errors.birthdate && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.birthdate.message}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="signup__input-group">
                  <label className="signup__label">Address</label>
                  <div className="signup__input-wrapper">
                    <input
                      className="signup__input"
                      type="text"
                      placeholder="Your Address"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                  </div>
                  {errors.address && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.address.message}
                    </span>
                  )}
                </div>

                {/* Gender */}
                <div className="signup__input-group">
                  <label className="signup__label">Gender</label>
                  <div className="signup__select-wrapper">
                    <select
                      className="signup__select"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="signup__select-arrow" />
                  </div>
                  {errors.gender && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </motion.fieldset>

              {/* Account Info Section */}
              <motion.fieldset
                className="signup__fieldset"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.legend
                  className="signup__legend"
                  variants={itemVariants}
                >
                  <Lock size={18} />
                  Account Security
                </motion.legend>

                {/* Email */}
                <div className="signup__input-group">
                  <label className="signup__label">Email Address</label>
                  <div className="signup__input-wrapper">
                    <Mail className="signup__input-icon" />
                    <input
                      className="signup__input"
                      type="email"
                      placeholder="hello@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="signup__input-group">
                  <label className="signup__label">Password</label>
                  <div className="signup__input-wrapper">
                    <Lock className="signup__input-icon" />
                    <input
                      className="signup__input"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                          message: "Include uppercase, lowercase and number",
                        },
                      })}
                    />
                    <button
                      className="signup__toggle"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="signup__input-group">
                  <label className="signup__label">Confirm Password</label>
                  <div className="signup__input-wrapper">
                    <Lock className="signup__input-icon" />
                    <input
                      className="signup__input"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("confirm", {
                        required: "Confirm your password",
                        validate: (value) =>
                          value === passwords || "Passwords do not match",
                      })}
                    />
                  </div>
                  {errors.confirm && (
                    <span className="signup__error">
                      <AlertCircle size={14} />
                      {errors.confirm.message}
                    </span>
                  )}
                </div>
              </motion.fieldset>

              <motion.div className="signup__terms" variants={itemVariants}>
                <div className="signup__checkbox-group">
                  <input
                    type="checkbox"
                    id="terms-checkbox"
                    className="signup__checkbox"
                    {...register("checkbox", {
                      required: "You must accept the terms",
                    })}
                  />
                  <label
                    htmlFor="terms-checkbox"
                    className="signup__check-label"
                  >
                    <motion.span
                      className="signup__check-box"
                      animate={{
                        backgroundColor: errors.checkbox
                          ? "#fee2e2"
                          : "#f8fafc",
                        borderColor: errors.checkbox ? "#dc3545" : "#cbd5e1",
                      }}
                    >
                      <Check className="signup__check-icon" />
                    </motion.span>
                    I agree to the terms
                  </label>
                </div>
                <AnimatePresence>
                  {errors.checkbox && (
                    <motion.span
                      className="signup__error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AlertCircle size={14} />
                      {errors.checkbox.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                className="signup__submit-btn"
                disabled={isLoading}
                type="submit"
                variants={itemVariants}
                whileHover={!isLoading ? { scale: 1.05 } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="signup__spinner"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                    Securing Your Account...
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    Create Free Account
                  </>
                )}
              </motion.button>

              <motion.p
                className="signup__login-prompt"
                variants={itemVariants}
              >
                Already have an account?{" "}
                <motion.a href="/login" whileHover={{ scale: 1.05 }}>
                  Log in here
                </motion.a>
              </motion.p>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
