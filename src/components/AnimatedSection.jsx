import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sectionVariant } from "../utils/animations";

/**
 * A wrapper component to apply section-level animations.
 */
const AnimatedSection = ({ children, id, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={controls}
      className={`py-20 lg:py-28 px-4 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
