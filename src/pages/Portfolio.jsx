import React, { Component } from 'react';
import HalfCol from '../components/HalfCol';
import Bio from '../components/Bio';
import Navbar from '../components/NavbarOld';
import NavbarAlt from '../components/NavbarAlt';
import Footer from '../components/Footer';
import TimelineVertical2 from '../components/TimelineVertical2';
import CarouselOverlay from '../components/CarouselOverlay';
import PortfolioContainer from '../components/PortfolioContainer';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <div className="block1"> 
          <NavbarAlt/>
          <Bio id="Bio"/>
        </div>
        <TimelineVertical2/>

        <HalfCol id="Focus">

        </HalfCol>
        <PortfolioContainer data={this.props.data}/>
        
        <Footer/>

      </div>
    )
  }


}