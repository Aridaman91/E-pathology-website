import React from 'react';
import './Navbar.css';
import img from '../Image/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation(); // Get the current URL path

  return (
    <div className='navbar'>
      <Link to='/' className="leftsidenavbar" aria-label="Home">
        <img src={img} className='imglogonavbar' alt="Company Logo" />
      </Link>
      <div className="rightsidenavbar">
        <div className={`first ${location.pathname === '/about' ? 'active-link' : ''}`}>
          <Link to='/about' aria-label="About Us">About Us</Link>
        </div>
        <div className={`second ${location.pathname === '/reports' ? 'active-link' : ''}`}>
          <Link to='/reports' aria-label="Reports">Reports</Link>
        </div>
        <div className={`third ${location.pathname === '/Newtest' ? 'active-link' : ''}`}>
          <Link to='/Newtest' aria-label="New Test">New Test</Link>
        </div>
        <div className={`fourth ${location.pathname === '/Dg' ? 'active-link' : ''}`}>
          <Link to='/Dg' aria-label="Add Test">Add Test</Link>
        </div>
        <div className="login-button">
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
