import React, { Component } from 'react';

import './Bio.css';

export default class Bio extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="bio-container" style={{backgroundColor: this.props.bgColor}}>
        <div style={{backgroundColor: "white"}} className="d-flex justify-content-center">
          <h3>About me</h3>
        </div>
        <div className="bio-content" >
          <div className="w3-third avi-container" >
            <img className="avi-circle img-thumbnail mx-auto d-block" src={require("./../images/me_tamu.jpg")} alt="" />
          </div>

          <div className="w3-third avi-container" >
            <h1>Howdy, my name is Isaac Pitblado</h1>
            <p style={{fontSize: "1.25em"}}>
              I am a student at Texas A&M University studying Computer Science with minors in Game Development and Cyber Security.
            </p>
            <p style={{fontSize: "1.25em"}}>
              I am also a peer teacher at Texas A&M University for the Computer Systems course. In my free time, I enjoy playing basketball.
            </p>
            <p style={{fontSize: "1.25em"}}>
              My notable work experience is a software engineer internship with American Express
              and an application development internship with Kinder Morgan.
            </p>
          </div>
        </div>
        
        
        

      </div>
    )
  }
}