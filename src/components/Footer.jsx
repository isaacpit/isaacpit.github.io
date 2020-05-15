import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-light">
        <div className="container d-flex justify-content-center align-items-center">
          
          <a href="https://github.com/isaacpit"> 
            <div className="d-flex flex-row justify-content-start align-items-center">
              <p id="footerTxt">Click for more of my projects</p>  
              <img src="https://img.icons8.com/ios-filled/100/000000/github.png" width="25px"></img>
            </div>
          </a>
          
          <span className="text-muted"><p>Developed by Isaac Pitblado &#169; {new Date().getFullYear()}</p></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
