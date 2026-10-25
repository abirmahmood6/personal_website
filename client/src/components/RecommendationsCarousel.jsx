import React, { useRef, useState } from 'react'
import recommendations from '../data/recommendations_data'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const SWIPE_THRESHOLD = 50

const RecommendationsCarousel = () => {
  const [index, setIndex] = useState(0)
  const startX = useRef(null)
  const deltaX = useRef(0)
  const dragging = useRef(false)

  const count = recommendations.length
  const active = recommendations[index]

  const goTo = (nextIndex) => {
    const wrapped = ((nextIndex % count) + count) % count
    setIndex(wrapped)
  }

  const goNext = () => goTo(index + 1)
  const goPrev = () => goTo(index - 1)

  const finishDrag = () => {
    if (startX.current == null) return
    const delta = deltaX.current
    startX.current = null
    deltaX.current = 0
    dragging.current = false

    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta < 0) goNext()
    else goPrev()
  }

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    deltaX.current = 0
  }

  const onTouchMove = (e) => {
    if (startX.current == null) return
    deltaX.current = e.touches[0].clientX - startX.current
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    if (e.target.closest('a, button')) return
    dragging.current = true
    startX.current = e.clientX
    deltaX.current = 0
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragging.current || startX.current == null) return
    deltaX.current = e.clientX - startX.current
  }

  const onPointerUp = () => {
    if (!dragging.current) return
    finishDrag()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    }
  }

  return (
    <div className="recommendations-shell">
      <div
        className="recommendations-carousel"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="LinkedIn recommendations"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={finishDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <article
          className="recommendation-card recommendation-card--active"
          aria-live="polite"
          aria-atomic="true"
          key={active.id}
        >
          <div className="recommendation-card-top">
            <span className="recommendation-mark" aria-hidden="true">“</span>
            <a
              className="recommendation-linkedin"
              href={active.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${active.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          </div>
          <p className="recommendation-quote">{active.quote}</p>
          <div className="recommendation-author">
            <span className="recommendation-avatar" aria-hidden="true">
              {active.initials}
            </span>
            <div className="recommendation-author-text">
              <p className="recommendation-name">{active.name}</p>
              <p className="recommendation-title">{active.title}</p>
            </div>
          </div>
        </article>
      </div>

      <div className="recommendations-dots" role="tablist" aria-label="Recommendation slides">
        {recommendations.map((rec, i) => (
          <button
            key={rec.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show recommendation from ${rec.name}`}
            className={`recommendations-dot${i === index ? ' recommendations-dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendationsCarousel
