import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarTemplate.css';

export default class NavbarTemplate extends Component {
  render() {
    return (
    //   <div classNameName="bs-example">
    //     <nav classNameName="navbar navbar-expand-md navbar-light bg-light">
    //         <a href="#" classNameName="navbar-brand">
    //             {/* <img src="/examples/images/logo.svg" height="28" alt="CoolBrand"/> */}
    //             <i classNameName="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"28px"}}></i>
    //         </a>
    //         <button type="button" classNameName="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    //             <span classNameName="navbar-toggler-icon"></span>
    //         </button>

    //         <div classNameName="collapse navbar-collapse" id="navbarCollapse">
    //             <div classNameName="navbar-nav">
    //                 <a href="#" classNameName="nav-item nav-link active">Home</a>
    //                 <a href="#" classNameName="nav-item nav-link">Profile</a>
    //                 <a href="#" classNameName="nav-item nav-link">Messages</a>
    //                 <a href="#" classNameName="nav-item nav-link disabled" tabindex="-1">Reports</a>
    //             </div>
    //             <div classNameName="navbar-nav ml-auto">
    //                 <a href="#" classNameName="nav-item nav-link">Login</a>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    );
  }
}

