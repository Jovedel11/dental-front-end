import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return children;
};

export default SmoothScroll;
