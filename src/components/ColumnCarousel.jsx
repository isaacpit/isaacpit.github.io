import React, { Component } from 'react';
import CarouselOverlay from './CarouselOverlay';


export default class Carousel2Column extends Component {

  render() {
    return (
      <div className="card-deck">
        <div className="card">
          <CarouselOverlay id="carousel-1"/>
          <div className="card-body">
            {/* <img className="card-img-top" src={require("./../images/img_avatar1.png")} alt="Card image cap"/> */}
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          {/* <img className="card-img-top" src={require("./../images/img_avatar1.png")} alt="Card image cap"/> */}
          <CarouselOverlay id="carousel-2"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        {/* <div className="card">
          <CarouselOverlay id="carousel-3"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div> */}
      </div>
    )
  }
}