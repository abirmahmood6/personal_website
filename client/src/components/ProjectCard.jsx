import React from "react";

const ProjectCard = ({ project = {} }) => {
  const { title, description, techStack = [], github, liveDemo, status, year, featured } = project;

  return (
    <article
      className={`w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg ${
        featured ? "ring-1 ring-indigo-200" : ""
      }`}
      aria-labelledby={`project-${title}`}
    >
      <div className="p-6 flex flex-col h-full">
        <header className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 id={`project-${title}`} className="text-lg font-semibold text-slate-900 truncate">
              {title}
            </h3>
            {year && <div className="mt-1 text-xs text-slate-500">{year}</div>}
          </div>

          {status && (
            <div className="flex-shrink-0">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                status === "In Progress" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
              }`}>{status}</span>
            </div>
          )}
        </header>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="text-xs bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <footer className="mt-auto flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              GitHub
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md hover:scale-[1.02] transition"
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
