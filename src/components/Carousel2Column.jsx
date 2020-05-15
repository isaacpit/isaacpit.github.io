import React, { Component } from 'react';
import "./Carousel2Column.css";
import CarouselOverlay from './CarouselOverlay';

export default class Carousel2Column extends Component{
  render() {
    return (
      <div className="container">
        
        <div className="row" id="my-container" >
          <div className="col">
            <CarouselOverlay/>
          </div>
          <div className="col">
            <CarouselOverlay/>
          </div>
        </div>

      </div>
      
    )
  }
}