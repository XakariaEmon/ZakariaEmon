import React from "react";
import { Briefcase, Award, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/experiences";

/**
 * Experience Section Component
 * Features a vertical timeline using DaisyUI.
 */
const Experience = () => {
  const getIcon = (iconType) => {
    const iconProps = { className: "w-5 h-5" };
    switch (iconType) {
      case "briefcase":
        return <Briefcase {...iconProps} />;
      case "award":
        return <Award {...iconProps} />;
      case "book":
        return <BookOpen {...iconProps} />;
      default:
        return <Briefcase {...iconProps} />;
    }
  };

  return (
    <AnimatedSection id="experience">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="My Journey" subtitle="Experience & Education" />

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experiences.map((item, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg ring-4 ring-base-200">
                  <span className="text-white">{getIcon(item.iconType)}</span>
                </div>
              </div>
              <div
                className={`timeline-${index % 2 === 0 ? "start" : "end"} 
                            md:text-${index % 2 === 0 ? "end" : "start"} 
                            p-6 bg-base-100 rounded-lg shadow-lg border border-base-content/10 mx-4 mb-10`}
              >
                <time className="text-sm font-mono italic opacity-70">
                  {item.date}
                </time>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="font-medium text-primary">{item.company}</p>
                <p className="mt-2 text-base-content/80">{item.description}</p>
              </div>
              {index < experiences.length - 1 && (
                <hr className="bg-primary/50" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
