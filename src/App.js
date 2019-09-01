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
  images: [
    { id: 1, src: require('./images/la.jpg'), title: 'foo', description: 'bar' },
    { id: 2, src: require('./images/la.jpg'), title: 'foo', description: 'bar' },
    { id: 3, src: require('./images/la.jpg'), title: 'foo', description: 'bar' },
    { id: 4, src: require('./images/la.jpg'), title: 'foo', description: 'bar' },
    { id: 5, src: require('./images/la.jpg'), title: 'foo', description: 'bar' },
  ],
  title: "some title",
  desc: "some description"
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
          <Route path="/carouseloverlaygeneral" render={(props) => <CarouselOverlayGeneral {...props} id="first" data={data} />}/>
          
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
