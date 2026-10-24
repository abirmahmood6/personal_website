import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects_data";

const Projects = () => {
  return (
    <section className="page-shell">
      <div className="container space-y-12">
        <div className="section-heading-group">
          <p className="eyebrow">Selected work</p>
          <h1 className="section-heading">Projects</h1>
          <p className="section-copy">
            A selection of apps and tools I've built — from campus products to internal dashboards.
          </p>
        </div>

        <div className="project-grid">
          {projectData.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;