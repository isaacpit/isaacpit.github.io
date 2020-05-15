import React, { Component } from 'react';
import "./ProfileCard.css";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="card centered" style={{width:"400px"}}>
          <img className="card-img-top" src={require("./../images/img_avatar1.png")} alt="Card image" style={{width:"90%"}}/>
          <div className="card-body">
            <h4 className="card-title">Isaac Pitblado</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" className="btn btn-primary stretched-link">See Profile</a>
          </div>
        </div>
        <div className="card" style={{width:"400px"}}>
          <img className="card-img-top" src={require("./../images/img_avatar1.png")} alt="Card image" style={{width:"100%"}}/>
          <div className="card-body">
            <h4 className="card-title">Isaac Pitblado</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" className="btn btn-primary stretched-link">See Profile</a>
          </div>
        </div>
      </div>
      
    );
  }
}


export default ProfileCard;
