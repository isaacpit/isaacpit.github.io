import React, { Component } from 'react';
import './TimelineSimple.css';

export default class TimelineSimple extends Component {
  constructor(props){
    super(props);

    this.cardSize = "240px";
  }

  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: this.props.bgColor}}>
        <div id="experience-header" style={{backgroundColor: "white"}} className="d-flex justify-content-center">
          <h3 id="titleExperience">Experience Timeline</h3>
        </div>
        
        <div className="container d-flex" >
          <div className="w3-row-padding  w3-center w3-margin-top ">
          <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img id="iaslogo" className="year" style={{width:120}} src={require("./../images/lifePics/ias-logo.jpg")}></img>
                <h4 id="yearias">March 2022 - Present</h4> 
                <h3 className="title">Software Engineer</h3>
                <div className="container">
                  <p className="description">
                    Currently, I enhance IAS custom reporting and dashboards for digital advertising metrics, specifically working on partner integrations with walled gardens such as Facebook, Twitter, Youtube, and TikTok. I develop on a Spring Cloud architecture using Java for source code, MySQL and Snowflake for DB queries, and Groovy + Spock + PowerMock + Docker test continers for unit/integration tests.
                  </p>
                </div>
                
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img id="visalogo" className="year" src={require("./../images/visalogo.jpg")}></img>
                <h4 id="yearvisa">October 2020 - March 2022</h4> 
                <h3 className="title">Software Engineer</h3>
                <div className="container">
                  <p className="description">
                  Supported a multi-component Java Spring web server application for the Visa Digital Commerce App (VDCA) which provides a scalable and secure white label mobile banking payment app solution. Delivered Jax-RS REST API suites to mobile-application and release-engineering stakeholders. Coupled external team’s payment solutions with internal business logic and SQL tables to enable our backend service’s features
                  </p>
                </div>
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img id="amexlogo" className="year" style={{width:120}} src={require("./../images/amexlogo.png")}></img>
                <h4 id="yearamex">2019 Summer</h4> 
                <h3 className="title">Software Engineer Intern</h3>
                <div className="container">
                  <p className="description">
                    Developed full stack Android application for testing the American Express SafeKey® security solution. Collaborated on agile team to move American Express SafeKey® application from db2 database to Couchbase.
                  </p>
                </div>
                
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img id="kmlogo" className="year" src="http://seekvectorlogo.com/wp-content/uploads/2018/01/kinder-morgan-vector-logo.png"></img>
                <h4 id="yearkm">2018 Summer</h4> 
                <h3 className="title">Application Development Intern</h3>
                <div className="container">
                  <p className="description">
                  Developed a full stack .NET application to enhance and expedite code migration process. Worked with end-users to improve and replace current processes regarding development pipeline.
                  </p>
                </div>
                
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img id="tamulogo" className="year" src={require("./../images/tamulogo.png")}></img>
                <h4 id="yeartamu">2018 Spring to Present</h4> 
                <h3 className="title">Computer Science Peer Teacher</h3>
                <div className="container">
                  <p className="description">
                  Aid students’ understanding in upper to lower level courses in C++, Python, and Computer Systems.
                  </p>
                </div>
                
              </div> 
            </div>
       
            
            
          </div>
        </div>
        
      </div>
    )
  }
}