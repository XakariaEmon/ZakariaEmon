import React from "react";

/**
 * A reusable component for section titles with a decorative accent.
 */
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12 lg:mb-16">
    <h2 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
    <p className="text-lg text-base-content/70 mb-4">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
  </div>
);

export default SectionTitle;
