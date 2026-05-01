import React from 'react'
import Navbar from '../components/Navbar';
import "../App.css";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />

      {/* uaw GRID to design the two parts */}
      <h1>Personal Website</h1>
      <div className='aboutMe'>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
        <img src="myPic.png" alt="Abir Mahmood's Picture" className='myImage' />
      </div>
    </div>
  )
}

export default Home
