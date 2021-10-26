import React, { Component } from 'react';

import './TimelineVertical2.css';

// credit: https://bootsnipp.com/snippets/prmge

export default class TimelineVertical2 extends Component {
  constructor(props) {
  super(props);
  
  }

  render() {
  return (
    <div>
      <div >
        
        <div className="container">
          <h4 style={{marginBottom: "0px"}}>Experience Timeline</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline4">
              <div className="timeline">
                  <a href="#" className="timeline-content">
                    {/* <span className="year">2019 <img src={require("./../images/amexlogo.png")} width="100px"></img></span> */}

                    <img id="visalogo" className="year" src={require("./../images/visalogo.jpg")}></img>
                    <h3 id="yearvisa">October 2020 - Present</h3> 
                    
                    <div className="inner-content">
                      <h3 className="title">Software Engineer</h3>
                      <p className="description">
                      Supported a multi-component Java Spring web server application for the Visa Digital Commerce App (VDCA) which provides a scalable and secure white label mobile banking payment app solution. Delivered Jax-RS REST API suites to mobile-application and release-engineering stakeholders. Coupled external team’s payment solutions with internal business logic and SQL tables to enable our backend service’s features
                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    {/* <span className="year">2019 <img src={require("./../images/amexlogo.png")} width="100px"></img></span> */}

                    <img id="amexlogo" className="year" src={require("./../images/amexlogo.png")}></img>
                    <h3 id="yearamex">2019 Summer</h3> 
                    
                    <div className="inner-content">
                      <h3 className="title">Software Engineer Intern</h3>
                      <p className="description">
                        Developed full stack Android application for testing the American Express SafeKey® security solution. Collaborated on agile team to move American Express SafeKey® application from db2 database to Couchbase.

                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    {/* <span className="year">2017  <a><img src="http://seekvectorlogo.com/wp-content/uploads/2018/01/kinder-morgan-vector-logo.png" width="100px"/></a></span> */}
                    <img id="kmlogo" className="year" src="http://seekvectorlogo.com/wp-content/uploads/2018/01/kinder-morgan-vector-logo.png"></img>
                    <h3 id="yearkm">2018 Summer</h3>

                    <div className="inner-content">
                      <h3 className="title">Application Development Intern</h3>
                      <p className="description">
                        Developed a full stack .NET application to enhance and expedite code migration process. Worked with end-users to improve and replace current processes regarding development pipeline.

                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <img id="tamulogo" className="year" src={require("./../images/tamulogo.png")}></img>
                  
                    <h3 id="yeartamu">2018 Spring</h3>
                    <div className="inner-content">
                      <h3 className="title">Peer Teacher</h3>
                      <p className="description">
                        Aid students’ understanding in upper to lower level courses in C++, Python, and Computer Systems.
                      </p>
                    </div>
                  </a>
                </div>
                {/* <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">2015</span>
                    <div className="inner-content">
                      <h3 className="title">Web Developer</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}