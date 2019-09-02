import React, { Component } from 'react';

import './Bio.css';

export default class Bio extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="bio-container" style={{backgroundColor: this.props.bgColor}}>
        <div className="bio-header">
          <h4>About me</h4>
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
          </div>
        </div>
        
        
        

      </div>
    )
  }
}