import React from 'react'
import "../App.css";

const Home = () => {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="text-orange-600 font-semibold uppercase tracking-[0.24em]">Software Engineering Portfolio</p>
              <h1 className="section-heading">Hi, I'm Abir</h1>
              <p className="section-copy">
                A senior at <span className="text-violet-600 font-semibold">New York University (NYU)</span> studying Computer Science. I'm currently interning at <span className="text-orange-600 font-semibold">Dockware</span> as a Software Engineer, where I build real-world applications, enjoy full-stack development, and turn ideas into clean, functional products. I’m also interested in product management in tech and how engineering connects with product thinking.
              </p>
            </div>

            <img src="myPic.png" alt="Abir Mahmood" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
