import React, { Component } from 'react';


export default class HalfCol extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: this.props.bgColor}}>
        <h4>Focuses</h4>
        <div className="w3-content" width="50%" >
          <div className="w3-row-padding  w3-center w3-margin-top w3-padding-32 ">
            <div className="w3-half w3-margin-bottom">
              <div className="w3-card w3-container w3-padding-16	" style={{minHeight:"460px", backgroundColor: this.props.cardColor}}>
              <h3>Software Development</h3><br/>
              <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
              <p>Full stack</p>
              <p>Desktop, Mobile, Web</p>
              <p>Project oriented</p>
              </div>
            </div>

            <div className="w3-half w3-margin-bottom" >
              <div className="w3-card w3-container w3-padding-16	" style={{minHeight:"460px", backgroundColor: this.props.cardColor}}>
              <h3>Applied Disciplines</h3><br/>
              <i className="fa fa-connectdevelop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
              <p>Machine learning</p>
              <p>Computer graphics</p>
              <p>Game development</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
}