import React from 'react'
import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-wrapper">
        <div className="resume-card">
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
  )
}

export default Resume
