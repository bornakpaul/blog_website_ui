import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Born Tech Logo" />
        </div>
        <div className="links">
          <Link className='link' to="/?category=technology">
            <h2>Technology</h2>
          </Link>
          <Link className='link' to="/?category=cinema">
            <h2>Cinema</h2>
          </Link>
          <Link className='link' to="/?category=anime">
            <h2>Anime</h2>
          </Link>
          <Link className='link' to="/?category=food">
            <h2>Food</h2>
          </Link>
          <span>Bornak</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
