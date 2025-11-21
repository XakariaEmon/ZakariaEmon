import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="My Projects" subtitle="A selection of my work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="card bg-base-100 shadow-lg border border-base-content/10 overflow-hidden transition-all duration-300 hover:shadow-primary/20"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="text-base-content/80 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="badge badge-secondary badge-outline"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    Source Code
                    <Code className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
