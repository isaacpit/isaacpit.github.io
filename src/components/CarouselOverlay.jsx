import React, { Component } from 'react';
import "./CarouselOverlay.css";

export default class CarouselOverlay extends Component{
  constructor(props) {
    super(props);

    
    
    const id_val = (props.id != null) ? props.id : "demo";
    
    this.state = {
      // used for distinguishing carousels from one another
      id: id_val, 
    }

  }

  render() {
    return (
      <div id="container-50" className="container">
        <div id={this.state.id} className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target={"#" + this.state.id} data-slide-to="0" className="active"></li>
          <li data-target={"#" + this.state.id} data-slide-to="1"></li>
          <li data-target={"#" + this.state.id} data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-center">
            <img src={require("./../images/la.jpg")} alt="Los Angeles" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={require("./../images/chicago.jpg")} alt="Chicago" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={require("./../images/ny.jpg")} alt="New York" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href={"#" + this.state.id} data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href={"#" + this.state.id} data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      </div>
      
    )
  }
}