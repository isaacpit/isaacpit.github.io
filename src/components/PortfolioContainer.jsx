import React, { Component } from 'react';
import CarouselOverlay from './CarouselOverlay';

import CarouselOverlayGeneral from './CarouselOverlayGeneral';

import './PortfolioContainer.css';

class PortfolioItem extends Component{
  constructor(props) {
    super(props);
    console.log("id: ");console.log(this.props.id);
  }
  render() {
    return (
      <div className="card-deck w3-padding-16 " style={{backgroundColor: this.props.colorBg}} >
          <div className="card border-0" style={{backgroundColor: this.props.colorBg}}>
            <CarouselOverlayGeneral colorAccent={this.props.colorAccent} height={this.props.height} width={this.props.width} id={this.props.id} data={this.props.data}/>
            <div className="card-body w3-content">
              <h5 className="card-title text-center">{this.props.data.title}</h5>
              <p className="card-text text-center">{this.props.data.desc}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{this.props.data.footer}</small>
            </div>
          </div>
        </div>
    )
  }
}

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
      <div id="Portfolio"> 
      <h4>Portfolio</h4>
      
      <PortfolioItem colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple} data={this.props.data.data2} id={this.props.data.data2.id} width="auto" height="450px"/>
      <PortfolioItem colorAccent={this.props.data.colors.whiteAccent} colorBg={this.props.data.colors.white} data={this.props.data.data3} id={this.props.data.data3.id} width="100%" height="auto"/>
      <PortfolioItem colorAccent={this.props.data.colors.blueAccent} colorBg={this.props.data.colors.blue} data={this.props.data.data1} id={this.props.data.data1.id} width="100%" height="auto"/>
        
        
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