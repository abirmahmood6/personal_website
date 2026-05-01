import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, techStack, github, liveDemo, status, year, featured } = project;

  return (
    <div className={`project-card relative flex flex-col gap-4 rounded-2xl border p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? "border-indigo-500 bg-gradient-to-br from-indigo-950 to-slate-900" : "border-slate-700 bg-slate-900"}`}>

      <div className="card-header flex items-center justify-between">
        <div className="card-meta flex items-center gap-2">
          <span className={`status-badge rounded-full px-2.5 py-0.5 text-xs font-semibold ${status === "In Progress" ? "bg-amber-400/15 text-amber-400" : "bg-emerald-400/15 text-emerald-400"}`}>
            {status}
          </span>
          <span className="year text-xs text-slate-500">{year}</span>
        </div>
        {featured && (
          <span className="featured-badge rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-semibold text-indigo-300">
            ★ Featured
          </span>
        )}
      </div>

      <h3 className="card-title text-lg font-bold text-white">{title}</h3>
      <p className="card-description mt-1 text-sm leading-relaxed text-slate-400">{description}</p>

      <div className="tech-stack flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tech-tag rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
            {tech}
          </span>
        ))}
      </div>

      <div className="card-links mt-auto flex gap-3 pt-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="github-btn flex-1 rounded-lg border border-slate-600 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:border-slate-400 hover:text-white">
          GitHub
        </a>
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="demo-btn flex-1 rounded-lg bg-indigo-600 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-500">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
