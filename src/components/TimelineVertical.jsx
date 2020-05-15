import React, { Component } from 'react';

import './TimelineVertical.css';

export default class TimelineVertical extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div>
        <div className="hello-bar">
                <div className="row center">
                    Ethan Thompson's Year-in-Review
                </div>
              </div>

              <div className="row">
                <div className="timeline">
                  <div className="line">
                    <div className="start">
                        2014
                    </div>
                    <div className="end">
                        2015
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/64601.png" alt="" />
                    </div>
                    <div className="date">
                        January
                    </div>
                    <div className="details">
                        I found out you can buy a Twinkie maker
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/48301.png" alt="" />
                    </div>
                    <div className="date">
                        February
                    </div>
                    <div className="details">
                        My tookus froze while I cleaned off my car
                    </div>

                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/65082.png" alt="" />
                    </div>
                    <div className="date">
                        March
                    </div>
                    <div className="details">
                      I was the best man in my friend Chenaniah's wedding
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/34022.png" alt="" />
                    </div>
                    <div className="date">
                        April
                    </div>
                    <div className="details">
                        I bought my first set of Field Note's
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/61291.png" alt="" />
                    </div>
                    <div className="date">
                        May
                    </div>
                    <div className="details">
                        I turned 20
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/66315.png" alt="" />
                    </div>
                    <div className="date">
                        June
                    </div>
                    <div className="details">
                        I purchased my Baratza Encore coffee grinder
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/43349.png" alt="" />
                    </div>
                    <div className="date">
                        July
                    </div>
                    <div className="details">
                        I tried my first standing desk for more then a day
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/59919.png" alt="" />
                    </div>
                    <div className="date">
                        August
                    </div>
                    <div className="details">
                        I visited Vero Beach and my soon-to-be employer
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/59801.png" alt="" />
                    </div>
                    <div className="date">
                        September
                    </div>
                    <div className="details">
                        Left my job at Word of Life
                    </div>
                  </div>
                  <div className="event">
                    <div className="icon">
                    <img src="http://cdn.flaticon.com/png/256/23656.png" alt="" />
                    </div>
                    <div className="date">
                        October
                    </div>
                    <div className="details">
                        Bought my first Apple computer
                    </div>
                  </div>
                  <div className="event">
                      <div className="icon">
                      <img src="http://cdn.flaticon.com/png/256/65202.png" alt="" />
                      </div>
                      <div className="date">
                          November
                      </div>
                      <div className="details">
                          Spent my first holiday in Florida
                      </div>
                  </div>
                  <div className="event">
                      <div className="icon">
                      <img src="http://cdn.flaticon.com/png/256/62238.png" alt="" />
                      </div>
                      <div className="date">
                          December
                      </div>
                      <div className="details">
                          Enjoyed time at home in New York with my family
                      </div>
                  </div>
                </div>
              </div>
      </div>
      
    )
  }
}