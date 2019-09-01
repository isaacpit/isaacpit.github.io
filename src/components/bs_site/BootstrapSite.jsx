import React, { Component } from 'react';

import './BootstrapSite.css';

export default class BootstrapSite extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Company</h1> 
          <p>We specialize in blablabla</p> 
          <form className="conatiner-fluid">
            <div className="input-group ">
              <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
              <div className="input-group-btn">
                <button type="button" className="btn btn-danger">Subscribe</button>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Company Page</h2>
              <h4>Lorem ipsum..</h4>      
              <p>Lorem ipsum..</p>
              <button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-globe logo"></span>
            </div>
            <div className="col-sm-8">
              <h2>Our Values</h2>
              <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
              <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center">
          <h2>SERVICES</h2>
          <h4>What we offer</h4>
          <br/>
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-off logo-small"></span>
              <h4>POWER</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-heart logo-small"></span>
              <h4>LOVE</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-lock logo-small"></span>
              <h4>JOB DONE</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <br/><br/>
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-leaf logo-small"></span>
              <h4>GREEN</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-certificate logo-small"></span>
              <h4>CERTIFIED</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-wrench logo-small"></span>
              <h4 style={{color:"#303030"}}>HARD WORK</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center bg-grey">
          <h2>Portfolio</h2><br/>
          <h4>What we have created</h4>
          <div className="row text-center">
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={require("./../../images/la.jpg")} alt="Paris" width="400" height="300"/>
                <p><strong>Paris</strong></p>
                <p>Yes, we built Paris</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={require("./../../images/la.jpg")} alt="New York" width="400" height="300"/>
                <p><strong>New York</strong></p>
                <p>We built New York</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img src={require("./../../images/la.jpg")} alt="San Francisco" width="400" height="300"/>
                <p><strong>San Francisco</strong></p>
                <p>Yes, San Fran is ours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}