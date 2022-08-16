import React, { Component } from 'react';
import HalfCol from '../components/HalfCol';
import Bio from '../components/Bio';
import Navbar from '../components/NavbarOld';
import NavbarAlt from '../components/NavbarAlt';
import Footer from '../components/Footer';
import TimelineVertical2 from '../components/TimelineVertical2';
import CarouselOverlay from '../components/CarouselOverlay';
import PortfolioContainer from '../components/PortfolioContainer';
import TimelineSimple from '../components/TimelineSimple';
import ForFunTimeline from '../components/ForFunTimeline';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <title>Isaac Pitblado's Portfolio</title>
        <div className="block1"> 
          <NavbarAlt/>
          <Bio id="Bio" bgColor={this.props.data.colors.purple}/>
        </div>
        

        <TimelineSimple bgColor={this.props.data.colors.purple2} cardColor={this.props.data.colors.white} id="SimpleTimeline"/>
        <PortfolioContainer cardColor={this.props.data.colors.white} data={this.props.data} id={this.props.id}/>
        <ForFunTimeline  bgColor={this.props.data.colors.purple2} cardColor={this.props.data.colors.white} id="ForFunTimeline"/>
        
        <Footer/>

      </div>
    )
  }


}