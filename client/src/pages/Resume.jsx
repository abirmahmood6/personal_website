import React from 'react'

const Resume = () => {
  return (
    <section className="page-shell resume-page">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-orange-600 font-semibold uppercase tracking-[0.24em] mb-3">Resume</p>
          <h1 className="section-heading">Professional Experience</h1>
          <p className="section-copy">
            Download the resume below or preview the printable version for a clean, structured overview of my software engineering background.
          </p>
        </div>

        <div className="resume-section">
          <div className="resume-card resume-card-centered">
            <div className="resume-card-header">
              <span className="resume-card-title">Resume</span>
              <div className="resume-card-actions">
                <button className="resume-btn outline" onClick={() => window.print()}>Print</button>
                <a className="resume-btn filled" href="/Resume__Abir_Mahmood.pdf" download>Download</a>
              </div>
            </div>
            <div className="resume-preview">
              <iframe
                src="/Resume__Abir_Mahmood.pdf"
                title="Resume"
                className="resume-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

