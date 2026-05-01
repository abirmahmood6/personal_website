import React from 'react'
import Navbar from '../components/Navbar';
import "../App.css";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="myImage">
        <img src="" alt="" />
      </div>
      {/* uaw GRID to design the two parts */}
      <div className="aboutMe">
        <h1>Personal Website</h1>
        <p>Under Construction 🚧</p>
      </div>
    </div>
  )
}

export default Home
