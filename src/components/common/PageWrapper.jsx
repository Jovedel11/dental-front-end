import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ paddingTop: "80px" }}
  >
    {children}
  </motion.main>
);

export default PageWrapper;
