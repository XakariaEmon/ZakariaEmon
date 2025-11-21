import React from "react";
import { Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/skills";

/**
 * About Section Component
 * Features bio text and a grid of skill icons.
 */
export const About = () => {
  return (
    <AnimatedSection id="about" className="bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="About Me" subtitle="My background and skills" />
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Bio Text */}
          <div className="lg:w-1/2 text-lg text-base-content/80 text-center lg:text-left">
            <p className="mb-4">
              Hello! I’m Md Zakaria Hossen Emon, a SQA Engineer with a strong interest in ensuring software quality and smooth user experiences. 
              I have hands-on experience in designing and executing test cases, validating outputs, identifying and reporting bugs, and preparing clear documentation.
               I am also learning Playwright automation to enhance test efficiency and coverage.
            </p>
            <p>
              I’m a motivated and detail-oriented QA professional who focuses on continuous learning and aims to contribute to building reliable, user-focused software.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              My Toolkit
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-lg shadow-sm aspect-square
                             border border-transparent hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8" />
                  </span>
                  <p className="mt-2 text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
