import { useInView } from "react-intersection-observer";
import "./Wrapper.css";

const FadeInWrapper = ({ children, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "fade-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
