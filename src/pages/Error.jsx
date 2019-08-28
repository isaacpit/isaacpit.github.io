import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
            alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
            alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
            alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
  }
}

export default Home
