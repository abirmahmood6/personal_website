import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'> Logo </div>
            <ul className='nav-links'>
                <Link to="/"> About Me  </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/resume"> Resume </Link>
                <Link to="/contact"> Contact </Link>
            </ul>
        </div>
    )
}

export default Navbar
