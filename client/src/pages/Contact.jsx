import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../App.css'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    handle: 'abir-mahmood1',
    href: 'https://www.linkedin.com/in/abir-mahmood1/',
    color: '#0A66C2',
    colorLight: 'rgba(10, 102, 194, 0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'abirmahmood6',
    href: 'https://github.com/abirmahmood6',
    color: '#24292e',
    colorLight: 'rgba(36, 41, 46, 0.08)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Message is required.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || '(No subject)',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="page-shell page-shell--compact">
      <div className="container">

        <div className="contact-heading-group">
          <p className="eyebrow">Get in touch</p>
          <h1 className="section-heading">Contact</h1>
          <p className="section-copy">
            Have a question, a project idea, or just want to connect? Fill out the form and I'll get back to you.
          </p>
        </div>

        <div className="contact-layout">

          {/* Left — Form */}
          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="contact-success-title">Message sent!</h2>
                <p className="contact-success-body">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button className="contact-reset-btn" onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className={`contact-input${errors.name ? ' contact-input--error' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="contact-error">{errors.name}</span>}
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={`contact-input${errors.email ? ' contact-input--error' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="contact-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="subject">
                    Subject <span className="contact-label-optional">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="contact-input"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className={`contact-input contact-textarea${errors.message ? ' contact-input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="contact-error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <p className="contact-submit-error">Something went wrong. Please try again or email me directly at am14384@nyu.edu.</p>
                )}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="contact-spinner" aria-hidden="true" />
                  ) : null}
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Right — Social */}
          <aside className="contact-sidebar">
            <h2 className="contact-sidebar-heading">Connect with me</h2>
            <div className="contact-social-stack">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-card"
                >
                  <div className="contact-social-stripe" style={{ background: link.color }} />
                  <span
                    className="contact-social-icon"
                    style={{ background: link.colorLight, color: link.color, border: 'none' }}
                  >
                    {link.icon}
                  </span>
                  <div className="contact-social-text">
                    <span className="contact-social-label">{link.label}</span>
                    <span className="contact-social-handle">{link.handle}</span>
                  </div>
                  <svg className="contact-social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  )
}

export default Contact
