import React, { Component } from 'react';
import CarouselOverlay from './CarouselOverlay';

import CarouselOverlayGeneral from './CarouselOverlayGeneral';

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
      <div> 
        {/* <div className="card-deck">
          <div className="card">
            <CarouselOverlayGeneral id="carousel-1" data={this.props.data}/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div> */}
        {/* <div className="card-deck">
          <div className="card">
            <CarouselOverlayGeneral id="carousel-2" data={this.props.data}/>
            <div className="card-body">
              }
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card">
            <CarouselOverlayGeneral id="carousel-3" data={this.props.data}/>
            <div className="card-body">
              
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div> */}
      </div>
      
    )
  }
}