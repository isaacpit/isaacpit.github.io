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
      <div>
        
        <div className="container">
          <h4>Experience</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline4">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">2018</span>
                    <div className="inner-content">
                      <h3 className="title">Web Designer</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">2017</span>
                    <div className="inner-content">
                      <h3 className="title">Web Developer</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">2016</span>
                    <div className="inner-content">
                      <h3 className="title">Web Designer</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">2015</span>
                    <div className="inner-content">
                      <h3 className="title">Web Developer</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
  }
}