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
            <img id="self-portraint-main" className="avi-circle img-thumbnail mx-auto d-block" src={require("./../images/lifePics/me.jpeg")} alt="Self portrait at band practice" />
          </div>

          <div className="w3-third avi-container" >
            <h1>Howdy, my name is Isaac Pitblado</h1>
            <p style={{fontSize: "1.25em"}}>
              I am a Texas A&M University Aggie alum who graduated with a BS in Computer Science with minors in Game Development and Cyber Security.
            </p>
            <p style={{fontSize: "1.25em"}}>
              I am a software engineer @ Integral Ad Science developing in a Java Spring Cloud micro service context enhancing and creating various dashboards and custom reporting functions. I have been working fully remotely for 2 years now.
            </p>
            <p style={{fontSize: "1.25em"}}>
              My team's emphasis is to increase value add from our integrations with social media partners such as Facebook, Twitter, TikTok, and Youtube in an effort to transform customer needs into direct lines of service into IAS's Signal platform.
            </p>
          </div>
        </div>
        
        
        

      </div>
    )
  }
}