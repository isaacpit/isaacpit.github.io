import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import {  Link } from "react-router-dom";


class Error extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Error 404</h1>
            <p className="lead">Back to <a href="/">home</a></p>
            
          </div>
        </div>  
      </div>
  
    );
  }
}

export default Error
