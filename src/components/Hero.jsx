import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { heroVariant, itemVariant } from "../utils/animations";

/**
 * Hero Section Component
 * Features photo, title, social links, and animated intro.
 */
export const Hero = () => {
  return (
    <section
      id="hero"
      className="hero min-h-[calc(100vh-80px)] bg-base-100 relative"
    >
      {/* Background gradient effect - More subtle */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-3xl"></div>
      </div>

      <motion.div
        className="hero-content flex-col lg:flex-row-reverse gap-12 z-10"
        variants={heroVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Image */}
        <motion.div variants={itemVariant} className="text-center">
          <img
            src="https://i.ibb.co/JRGytPQw/Md-Zakaria-Hossen-Emon.jpg"
            alt="Zakaria Emon"
            className="w-64 h-64 lg:w-96 lg:h-96 rounded-full shadow-2xl object-cover"
          />
        </motion.div>

        {/* Hero Text Content */}
        <div className="text-center lg:text-left max-w-lg">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold"
            variants={itemVariant}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pb-2">
              Zakaria Emon
            </span>
          </motion.h1>
          <motion.p
            className="py-6 text-xl lg:text-2xl font-medium text-base-content/70"
            variants={itemVariant}
          >
            SQA Engineer
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start gap-4"
            variants={itemVariant}
          >
            <a
              href="https://github.com/XakariaEmon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/zakariaemon/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:jh.emon00@gmail.com"
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
            >
              <Mail className="w-7 h-7" />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={itemVariant}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/117LqSKfoz-iD-c32rAMTOrzFR5LQwQmv/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
