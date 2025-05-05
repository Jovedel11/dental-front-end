import { useNavigate } from "react-router-dom";
import usableForm from "../../../hooks/usableForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useUserContext } from "../../../contexts/UserProvider";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";

const Login = () => {
  const { users, login } = useUserContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = usableForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("Staff users:", users.staff);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const staff = users.staff.find(
        (u) =>
          u.email === data.email &&
          u.password === data.password &&
          u.role === "staff"
      );

      if (staff) {
        login(staff);
        navigate(`/dashboard/staff/${staff.id}`);
      } else {
        toast.error("Invalid email or password", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("An unexpected error occurred", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-panel">
        {/* Right side login form */}
        <motion.div
          className="login-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="login-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="icon-container"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LogIn size={48} />
            </motion.div>
            <h1>Welcome Back!</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Access your personalized dental care portal
            </motion.p>
          </motion.div>

          <div className="login-form">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="loading-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="form-group">
                    <label>Email Address</label>
                    <motion.div
                      className="input-field"
                      whileFocus={{
                        boxShadow: "0 0 0 2px rgba(15, 98, 254, 0.2)",
                        backgroundColor: "#fff",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="input-icon" />
                      <input
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
                    </motion.div>
                    <AnimatePresence>
                      {errors.email && (
                        <motion.span
                          className="error-text"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {errors.email.message}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="form-group">
                    <label>Password</label>
                    <motion.div
                      className="input-field"
                      whileFocus={{
                        boxShadow: "0 0 0 2px rgba(15, 98, 254, 0.2)",
                        backgroundColor: "#fff",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Lock className="input-icon" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Minimum 8 characters",
                          },
                        })}
                      />
                    </motion.div>
                    <AnimatePresence>
                      {errors.password && (
                        <motion.span
                          className="error-text"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          {errors.password.message}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.button
                    disabled={isLoading}
                    type="submit"
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner" />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <LogIn size={18} />
                        Sign In
                      </>
                    )}
                  </motion.button>
                </motion.div>

                <motion.div
                  className="forgot-password"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <motion.span
                    onClick={() =>
                      toast.info("Password recovery feature coming soon!", {
                        position: "top-center",
                        autoClose: 3000,
                        theme: "colored",
                      })
                    }
                    whileHover={{
                      scale: 1.02,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Forgot password?
                  </motion.span>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
