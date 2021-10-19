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

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <div className="block1"> 
          <NavbarAlt/>
          <Bio id="Bio" bgColor={this.props.data.colors.purple}/>
        </div>
        

        <TimelineSimple bgColor={this.props.data.colors.purple2} cardColor={this.props.data.colors.white} id="Timeline"/>
        <PortfolioContainer cardColor={this.props.data.colors.white} data={this.props.data} id={this.props.id}/>

        {/* <HalfCol bgColor={this.props.data.colors.yellow} cardColor={this.props.data.colors.white} id="Focus"/> */}
        {/* <TimelineVertical2/> */}
        <Footer/>

      </div>
    )
  }


}