import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarOld.css';

class Navbar extends Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
  }
}

export default Navbar;
