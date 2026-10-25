import React, { useState } from 'react'
import "../App.css"
import RecommendationsCarousel from '../components/RecommendationsCarousel'

const certifications = [
  {
    title: "CodePath Advanced Web Development Certificate (Honors)",
    organization: "CodePath",
    image: "/cert-codepath.png",
    description: "Hands-on training in full-stack web development through real projects — React, Node.js, and everything in between.",
  },
  {
    title: "Machine Learning Foundations",
    organization: "Cornell Tech",
    image: "/cert-cornell.png",
    description: "An introduction to how AI and machine learning fit into real software — covering model design, data pipelines, and practical engineering tradeoffs.",
  },
  {
    title: "Phi Theta Kappa Honor Society",
    organization: "Phi Theta Kappa — Alpha Kappa Chapter",
    image: "/cert-ptk.png",
    description: "Inducted into the Phi Theta Kappa Honor Society in recognition of academic excellence. PTK is the largest honor society in American higher education.",
  },
]

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Dockware",
    logo: "/logos/dockware.png",
    duration: "Summer – Fall 2026",
    dateRange: "May 2026 – Present",
    location: "Tulsa, OK · On-site",
    color: "#f97316",
    description: "Migrating browser tests to Playwright (cutting CI from ~45 to ~8 minutes), improving vision mission review reliability, and shipping full-stack features for an internal ops platform that plans and ships computer-vision hardware installs.",
    responsibilities: [
      "Migrated a customer-facing web app's browser tests from Cypress to Playwright across auth, shipments, admin, and compliance flows (12+ PRs), cutting CI from ~45 minutes originally to ~8 minutes per PR and removing Cypress from the stack.",
      "Improved reliability of vision mission review by fixing cloud image loading (API payload first, object storage fallback), adding shareable tags/notes/filters for debugging missions, and hardening a Gemini vision-label pipeline to detect gibberish OCR fields, retry once, and keep valid fields so bad model output doesn't corrupt production data.",
      "Shipped full-stack features for an internal ops platform used to plan and ship computer-vision hardware installs (React, TypeScript, Hono, PostgreSQL, S3)—including shipment/manufacture tracking, packing lists, readiness checklists, interactive timelines, and multi-file document uploads with audit logging.",
    ],
    technologies: ["React", "TypeScript", "Hono", "PostgreSQL", "Playwright", "S3"],
  },
  {
    role: "AI & Data Automation Intern",
    company: "TCC Skills Lab",
    logo: "/logos/tcc-skills-lab.png",
    duration: "Spring 2026",
    dateRange: "Jan 2026 – Apr 2026",
    location: "Tulsa, OK · On-site",
    color: "#0d9488",
    description: "Built and deployed a full-stack analytics dashboard for 100+ workforce learners, engineered a Coursera data pipeline that collapsed a 6-step CSV process into one upload, and cut ~4 hours/week of manual data entry via Airtable automation.",
    responsibilities: [
      "Built and deployed a full-stack internal analytics dashboard (React, Vite, Tailwind CSS, Vercel) for a 4-person team tracking 100+ workforce learners—replacing spreadsheet workflows and weekly status meetings with a real-time, self-serve view of KPIs (completions, hires, at-risk flags).",
      "Engineered a Google Apps Script pipeline that merges 3 Coursera CSV exports, deduplicates learners by email, classifies engagement status, and serves live data to the React app via a JSON API—cutting a 6-step manual CSV process down to a single file upload with scheduled triggers and regex-based file detection.",
      "Integrated the Airtable API and auto-categorized learners into active/inactive/at-risk views, eliminating ~4 hours/week of manual data entry after validating 300+ learner records for reporting integrity.",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Vercel", "Airtable API", "Google Apps Script"],
  },
  {
    role: "Software Engineer Intern",
    company: "SpeakHire",
    logo: "/logos/speakhire.png",
    duration: "Summer 2023",
    dateRange: "Jul 2023 – Sep 2023",
    location: "Remote",
    color: "#2563eb",
    description: "Engineered a mentor-student matchmaking algorithm that increased successful matches by 62%, and built a full admin dashboard from scratch with D3.js visualizations across 50+ mentoring sessions.",
    responsibilities: [
      "Implemented a mentor-student matchmaking algorithm using React and TypeScript, increasing successful matches by 62%.",
      "Built an administrator dashboard from 0→1 using React, Material UI, and TypeScript to provide actionable insights into mentorship program effectiveness.",
      "Integrated D3.js visualizations to transform attendance data from 50+ mentoring sessions into interactive analytics and trend reporting.",
    ],
    technologies: ["React", "TypeScript", "Material UI", "D3.js"],
  },
]

const Home = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  const openModal = (content) => setActiveModal(content)
  const closeModal = () => setActiveModal(null)

  return (
    <section className="page-shell">
      <div className="container space-y-16">

        {/* Hero / About */}
        <div className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="text-orange-600 font-semibold uppercase tracking-[0.24em]">
                Software Engineering Portfolio
              </p>
              <h1 className="section-heading">Hi, I'm Abir.</h1>
              <p className="section-copy">
                I'm a senior at{" "}
                <span className="highlight-pill highlight-pill--violet">New York University (NYU)</span>
                {" "}studying Computer Science. I was born in Queens, New York, and grew up in Bangladesh, which has given me the opportunity to experience different cultures and perspectives from an early age.
              </p>
              <p className="section-copy">
                Over the past few years, I've worked on a variety of projects and internships, including my current role at{" "}
                <span className="highlight-pill highlight-pill--orange">Dockware</span>
                . I enjoy building things, learning new technologies, and solving problems that have a real impact on the people using them.
              </p>
            </div>

            <img src="myPic.png" alt="Abir Mahmood" className="profile-image" />
          </div>
        </div>

        {/* Experience Section */}
        <section className="section-block">
          <div className="section-heading-group">
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading">Internship Experience</h2>
            <p className="section-copy">
              Places where I've had the chance to build real software, work alongside great people, and figure out what good engineering actually looks like.
            </p>
          </div>

          <div className="exp-stack">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="exp-card"
                style={{ '--card-accent': item.color }}
                onClick={() => openModal({ type: 'experience', data: item })}
                onKeyDown={(e) => e.key === 'Enter' && openModal({ type: 'experience', data: item })}
                tabIndex={0}
                role="button"
              >
                <div className="exp-card-stripe" />
                <div className="exp-card-content">
                  {/* Header: company + role (left) | logo (right) */}
                  <div className="exp-card-header">
                    <div className="exp-card-header-left">
                      <p className="exp-company-name">{item.company}</p>
                      <h3 className="exp-role">{item.role}</h3>
                    </div>
                    {item.logo && (
                      <div className="exp-logo-wrap">
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="exp-card-logo"
                        />
                      </div>
                    )}
                  </div>
                  {/* Meta: duration · location */}
                  <div className="exp-card-meta-row">
                    <span className="exp-duration">{item.duration}</span>
                    {item.dateRange && <span className="exp-daterange">{item.dateRange}</span>}
                    {item.location && <span className="exp-location">{item.location}</span>}
                  </div>
                  <p className="exp-desc">{item.description}</p>
                  <div className="exp-tech-row">
                    {item.technologies.map((t) => (
                      <span key={t} className="exp-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="section-block">
          <div className="section-heading-group">
            <p className="eyebrow">LinkedIn</p>
            <h2 className="section-heading">Recommendations</h2>
            <p className="section-copy">
              LinkedIn notes from people I&apos;ve worked with.
            </p>
          </div>

          <RecommendationsCarousel />
        </section>

        {/* Certifications Section */}
        <section className="section-block">
          <div className="section-heading-group">
            <p className="eyebrow">Credentials</p>
            <h2 className="section-heading">Certifications</h2>
            <p className="section-copy">
              Programs that pushed me to keep learning beyond what I was covering in class.
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="cert-card">
                <div
                  className={`cert-img-area${cert.image ? ' cert-img-clickable' : ''}`}
                  onClick={cert.image ? () => setLightboxImage(cert.image) : undefined}
                >
                  {cert.image
                    ? <img src={cert.image} alt={`${cert.organization} certificate`} className="cert-img" />
                    : (
                      <div className="cert-img-placeholder">
                        <span className="cert-img-placeholder-text">Certificate</span>
                      </div>
                    )
                  }
                </div>
                <div className="cert-card-body">
                  <p className="cert-org">{cert.organization}</p>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Experience Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="modal-kicker">Experience</p>
                <h3 className="modal-title">{activeModal.data.role}</h3>
                <p className="modal-subtitle">
                  {`${activeModal.data.company} · ${activeModal.data.duration}${activeModal.data.dateRange ? ` (${activeModal.data.dateRange})` : ''}`}
                </p>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            </div>
            <div className="modal-content">
              <p className="modal-body-text mb-4">{activeModal.data.description}</p>

              {activeModal.data.responsibilities && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Responsibilities</h4>
                  <ul className="modal-list">
                    {activeModal.data.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}

              {activeModal.data.location && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Location</h4>
                  <p className="modal-body-text">{activeModal.data.location}</p>
                </div>
              )}

              {activeModal.data.technologies && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Technologies</h4>
                  <div className="modal-tags">
                    {activeModal.data.technologies.map((tech) => (
                      <span key={tech} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close">×</button>
          <img
            src={lightboxImage}
            alt="Certificate"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Home
