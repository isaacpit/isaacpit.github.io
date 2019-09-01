import React, { Component } from 'react';


export default class HalfCol extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="w3-content" width="50%">
          <div className="w3-row-padding w3-center w3-margin-top">
          <div className="w3-half">
            <div className="w3-card w3-container w3-padding-16	" style={{minHeight:"460px"}}>
            <h3>Software Development</h3><br/>
            <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
            <p>Built-in responsiveness</p>
            <p>Mobile first fluid grid</p>
            <p>Fits any screen sizes</p>
            <p>PC Tablet and Mobile</p>
            </div>
          </div>

          <div className="w3-half" >
            <div className="w3-card w3-container w3-padding-16	" style={{minHeight:"460px"}}>
            <h3>Dynamic Design</h3><br/>
            <i className="fa fa-css3 w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
            <p>Standard CSS only</p>
            <p>Easy to learn</p>
            <p>No need for jQuery</p>
            <p>No JavaScript library</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}