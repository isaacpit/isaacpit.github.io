import React, { Component } from 'react';

import './Bio.css';

export default class Bio extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="bio-container">
        <div className="bio-header">
          <h4>About me</h4>
        </div>
        <div className="bio-content">
          <div className="w3-third avi-container" >
            <img className="avi-circle img-thumbnail mx-auto d-block" src={require("./../images/me_tamu.jpg")} alt="" />
          </div>

          <div className="w3-third avi-container" >
            <h2>Howdy, my name is Isaac Pitblado</h2>
            <p>
              I am a student at Texas A&M University, currently in my final year of Computer Science. 
            </p>
          </div>
        </div>
        
        
        

      </div>
    )
  }
}