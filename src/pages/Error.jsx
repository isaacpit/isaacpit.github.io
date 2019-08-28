import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("./la.jpg")} alt="Los Angeles" width="1100" height="500"/>
          </div>
          <div class="carousel-item">
            <img src={require("./chicago.jpg")} alt="Chicago" width="1100" height="500"/>
          </div>
          <div class="carousel-item">
            <img src={require("./ny.jpg")} alt="New York" width="1100" height="500"/>
          </div>
        </div>
        
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Home
