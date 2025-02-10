// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Fashion Blog</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/post">Post a Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Log In</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
