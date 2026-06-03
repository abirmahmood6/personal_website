import React from "react";

const ProjectCard = ({ project = {} }) => {
  const { title, description, techStack = [], github, liveDemo, featured, accent = "#475569", privateNote } = project;

  return (
    <article className="project-card" aria-labelledby={`project-${title}`}>
      <div className="project-card-stripe" style={{ background: accent }} />
      <div className="project-card-body">
        <header className="project-card-header">
          {featured && (
            <div className="project-card-meta">
              <span className="project-featured-dot" style={{ background: accent }} />
            </div>
          )}
          <h3 id={`project-${title}`} className="project-title">{title}</h3>
        </header>

        <p className="project-desc">{description}</p>

        {privateNote && (
          <p className="project-private-note">{privateNote}</p>
        )}

        <div className="project-tech-row">
          {techStack.map((tech) => (
            <span key={tech} className="project-tech-tag">{tech}</span>
          ))}
        </div>

        <footer className="project-card-footer">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn project-link-btn--primary"
            >
              Live Demo
            </a>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
