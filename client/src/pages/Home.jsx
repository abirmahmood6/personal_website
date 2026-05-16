import React, { useState } from 'react'
import "../App.css"

const certifications = [
  {
    title: "CodePath Advanced Web Development Certificate",
    organization: "CodePath",
    description: "Advanced training in full-stack web engineering, application architecture, and production-ready deployment.",
    details: [
      "Built React applications with modern state management and API integration.",
      "Implemented scalable backend services using Node.js and Express.",
      "Learned best practices for testing, deployment, and team collaboration.",
    ],
    link: "https://www.codepath.org/",
  },
  {
    title: "AI/ML Certificate",
    organization: "Cornell Tech",
    description: "Applied artificial intelligence and machine learning principles for software engineering workflows.",
    details: [
      "Developed model-driven solutions with a focus on real-world product impact.",
      "Explored ML pipelines, evaluation metrics, and deployment considerations.",
      "Gained hands-on experience with data processing and algorithm selection.",
    ],
    link: "https://tech.cornell.edu/",
  },
]

const experience = [
  {
    role: "Software Engineering Intern",
    company: "Dockware",
    duration: "Summer 2025",
    description: "Delivered product-facing features and improved team velocity with clean React and Node.js solutions.",
    responsibilities: [
      "Built customer-facing application features with React and Chakra UI.",
      "Collaborated with backend engineers to optimize REST APIs and data flows.",
      "Improved monitoring and reliability across deployed services.",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    role: "Technical Product Intern",
    company: "NYU CS Labs",
    duration: "Summer 2024",
    description: "Built an operational dashboard that improved collaboration and reduced manual reporting overhead.",
    responsibilities: [
      "Designed a dashboard to monitor program metrics and student progress.",
      "Streamlined data ingestion from shared resources and APIs.",
      "Enhanced usability with clear visual hierarchy and responsive layouts.",
    ],
    technologies: ["JavaScript", "React", "Airtable", "Google Sheets"],
  },
]

const Home = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (content) => setActiveModal(content)
  const closeModal = () => setActiveModal(null)

  return (
    <section className="page-shell">
      <div className="container space-y-16">
        <div className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="text-orange-600 font-semibold uppercase tracking-[0.24em]">
                Software Engineering Portfolio
              </p>
              <h1 className="section-heading">Hi, I'm Abir</h1>
              <p className="section-copy">
                A senior at <span className="text-violet-600 font-semibold">New York University (NYU)</span> studying Computer Science.
                I’m currently interning at <span className="text-orange-600 font-semibold">Dockware</span>, building production-ready
                applications with a strong focus on clean code, scalable architecture, and user-centered product outcomes.
              </p>
            </div>

            <img src="myPic.png" alt="Abir Mahmood" className="profile-image" />
          </div>
        </div>

        <section className="section-block">
          <div className="section-heading-group">
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading">Relevant internships</h2>
            <p className="section-copy">
              Internship experience focused on product delivery, system reliability, and collaborative engineering.
            </p>
          </div>

          <div className="project-grid">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="cursor-pointer w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
                onClick={() => openModal({ type: 'experience', data: item })}
                onKeyDown={(event) => event.key === 'Enter' && openModal({ type: 'experience', data: item })}
                tabIndex={0}
                role="button"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item.company}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mt-2">{item.duration}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading-group">
            <p className="eyebrow">Certifications</p>
            <h2 className="section-heading">Certifications</h2>
            <p className="section-copy">
              Professional certificates that reinforce my development experience and full-stack engineering focus.
            </p>
          </div>

          <div className="project-grid">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="cursor-pointer w-full h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
                onClick={() => openModal({ type: 'certification', data: cert })}
                onKeyDown={(event) => event.key === 'Enter' && openModal({ type: 'certification', data: cert })}
                tabIndex={0}
                role="button"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 h-40 rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                    <span className="text-sm uppercase tracking-[0.24em]">Certificate image</span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{cert.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{cert.organization}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{cert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="modal-kicker">{activeModal.type === 'certification' ? 'Certification' : 'Experience'}</p>
                <h3 className="modal-title">
                  {activeModal.type === 'certification'
                    ? activeModal.data.title
                    : activeModal.data.role}
                </h3>
                <p className="modal-subtitle">
                  {activeModal.type === 'certification'
                    ? activeModal.data.organization
                    : `${activeModal.data.company} · ${activeModal.data.duration}`}
                </p>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
            </div>
            <div className="modal-content">
              <p className="text-slate-700 mb-4">{activeModal.data.description}</p>
              {activeModal.type === 'certification' && activeModal.data.details && (
                <div className="modal-section">
                  <h4 className="modal-section-title">What I learned</h4>
                  <ul className="modal-list">
                    {activeModal.data.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeModal.type === 'experience' && activeModal.data.responsibilities && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Responsibilities</h4>
                  <ul className="modal-list">
                    {activeModal.data.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeModal.type === 'experience' && activeModal.data.technologies && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Technologies</h4>
                  <div className="modal-tags">
                    {activeModal.data.technologies.map((tech) => (
                      <span key={tech} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {activeModal.type === 'certification' && activeModal.data.link && (
                <div className="modal-section">
                  <a href={activeModal.data.link} target="_blank" rel="noreferrer" className="modal-link">
                    View certificate details
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
