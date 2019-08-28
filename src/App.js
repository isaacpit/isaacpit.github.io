import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import ThemeSwitcher from './pages/ThemeSwitcher';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/test" component={ThemeSwitcher}/>
          
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
