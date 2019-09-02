import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import ThemeSwitcher from './pages/ThemeSwitcher';
import ProfileCard from './components/ProfileCard';
import CarouselOverlay from './components/CarouselOverlay';
import Portfolio from './pages/Portfolio';
import Timeline from './components/Timeline';
import TimelineVertical from './components/TimelineVertical';
import Carousel2Column from './components/Carousel2Column';
import ThirdsCol from './components/ThirdsCol';
import ColumnBs from './components/ColumnBs';
import ColumnCarousel from './components/ColumnCarousel';
import TimelineHorizontal from './components/TimelineHorizontal';
import TimelineVertical2 from './components/TimelineVertical2';
import BootstrapSite from './components/bs_site/BootstrapSite';
import HalfCol from './components/HalfCol';
import CarouselOverlayGeneral from './components/CarouselOverlayGeneral';
// import Data from './../constants/data';




const data = { 
  colors: {
    blue: "#D1F3F9",
    yellow: "#FFFDBC",
    purple:  "#E8EDFF",
    brown: "#F2DFD7",
    pink: "#FEF9FF",
    white: "#ffffff",
    blueAccent: "#ACC7CC",
    yellowAccent: "#FFF696",
    purpleAccent:  "#C1D1FF",
    brownAccent: "#FFCDBA",
    pinkAccent: "#EED3FF",
    whiteAccent: "#555555",
  },
  data1: {
    images: [
      { id: 1, src: require('./images/warseas1.png'), title: 'foo', description: 'bar' },
      { id: 2, src: require('./images/warseas2.png'), title: 'foo', description: 'bar' },
      { id: 3, src: require('./images/warseas3.png'), title: 'foo', description: 'bar' },
    ],
    title: "War of the Seas",
    desc: "Developed a multiplayer network Battleship-like game complete with movement and special attacks to spice things up.",
    id: "carousel-1",
    footer: "Created fall 2018",
    bgColor: "#aaa",
  },
  data2: {
    images: [
      { id: 1, src: require('./images/amex1.png'), title: 'foo', description: 'bar' },
      { id: 2, src: require('./images/amex2.png'), title: 'foo', description: 'bar' },
      { id: 3, src: require('./images/amex5.png'), title: 'foo', description: 'bar' },
    ],
    title: "Colleague Benefits Locator",
    desc: "Developed during 24 hour hackathon at American Express. Lead team to create an Android application which displayed local discounts. ",
    id: "carousel-2",
    footer: "Created summer 2019",
  },
  data3: {
    images: [
      { id: 1, src: require('./images/vr-piano10.png'), title: 'foo', description: 'bar' },
      { id: 2, src: require('./images/vr-piano9.png'), title: 'foo', description: 'bar' },
      { id: 3, src: require('./images/vr-piano8.png'), title: 'foo', description: 'bar' },
      { id: 4, src: require('./images/vr-piano5.png'), title: 'foo', description: 'bar' },
      { id: 5, src: require('./images/vr-piano4.png'), title: 'foo', description: 'bar' },
      { id: 6, src: require('./images/vr-piano2.png'), title: 'foo', description: 'bar' },
      
    ],
    title: "Chord Wars",
    desc: "Created a space-themed virtual reality video game based on learning music theory. Aliens representing major, minor, and diminished chords fly at the player and the player must rock out to defeat the aliens.",
    id: "carousel-3",
    footer: "Created spring 2019",
  }
}
  

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Portfolio}/> */}
          <Route exact path="/" render={(props) => <Portfolio {...props} id="first" data={data}/>}/>
          <Route path="/old" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/test" component={ThemeSwitcher}/>
          <Route path="/profilecard" component={ProfileCard}/>
          <Route path="/carouseloverlay" component={CarouselOverlay}/>
          <Route path="/timeline" component={Timeline}/>
          <Route path="/timelinevertical" component={TimelineVertical}/>
          <Route path="/carousel2col" component={Carousel2Column}/>
          <Route path="/thirds" component={ThirdsCol}/>
          <Route path="/columnbs" component={ColumnBs}/>
          <Route path="/columncarousel" component={ColumnCarousel}/>
          <Route path="/timelinehorizontal" component={TimelineHorizontal}/>
          <Route path="/timelinevertical2" component={TimelineVertical2}/>
          <Route path="/bootstrapsite" component={BootstrapSite}/>
          <Route path="/halfs" component={HalfCol}/>
          <Route path="/carouseloverlaygeneral" render={(props) => <CarouselOverlayGeneral {...props} id="first" data={data.data2} />}/>
          
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
