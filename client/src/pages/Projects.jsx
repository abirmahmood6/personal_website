import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects_data";

const Projects = () => {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold uppercase tracking-[0.24em] mb-3">Selected Work</p>
          <h1 className="section-heading">Projects</h1>
          <p className="section-copy">
            A curated collection of recent projects demonstrating clean engineering, product-driven design, and practical full-stack impact.
          </p>
        </div>

        <div className="project-grid">
          {projectData.map((item) => (
            <div key={item.id} className="project-card-shell">
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;