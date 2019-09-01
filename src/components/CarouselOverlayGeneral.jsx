import React, { Component } from 'react';
import "./CarouselOverlayGeneral.css";

export default class CarouselOverlayGeneral extends Component{
  constructor(props) {
    super(props);

    
    
    const id_val = (props.id != null) ? props.id : "demo";
    console.log('entered');
    this.props.data.images.map((i) => 
      console.log(i)
    );
    // const pics = this.props.data.images.map((i) => 
    // // console.log(i),
    // // <div id={i}>

    // // </div>
    // // <div className="carousel-item active carousel-center">
    // // {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
    // //   <img src={require(i)} alt={i} width="100%" height="auto"/> 
    // //   <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
    // //     <h3>{this.props.data.title}</h3>
    // //     <p>{this.props.data.desc}</p>
    // //     </div>   
    // //   </div>
      
    // );

    this.state = {
      // used for distinguishing carousels from one another
      id: id_val, 
      data: this.props.data,
    }

  }

  render() {
    console.log("data: ->");console.log(this.state.data.images);
    const thumbnailimg = this.state.data.images.map((img,i)=>{
      if (i === 0) {
        return(
          <div className="carousel-item active carousel-center">
            {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
            <img src={img.src} alt={img.src} width="100%" height="auto"/> 
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>   
          </div>
            )
      }
      else {
        return(
          <div className="carousel-item carousel-center">
            {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
            <img src={img.src} alt={img.src} width="100%" height="auto"/> 
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>   
          </div>
        )
    }})
    const indicators = this.state.data.images.map((img, idx)=> {
      if (idx === 0) {
        return(<li data-target={"#" + this.state.id} data-slide-to={idx} className="active"></li>)

      }
      else {
        return(<li data-target={"#" + this.state.id} data-slide-to={idx}></li>)
        
      }})
    return (
      <div id="container-50" className="container">
        <div id={this.state.id} className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        {indicators}
          {/* <li data-target={"#" + this.state.id} data-slide-to="0" className="active"></li>
          <li data-target={"#" + this.state.id} data-slide-to="1"></li>
          <li data-target={"#" + this.state.id} data-slide-to="2"></li>  */}
        </ul>
        <div className="carousel-inner">
          {thumbnailimg}
        
          {/* {this.props.data.images.map((item) => 
              console.log(item)
            )} */}
          {/* {this.props.data.images.map((item) => 
            // console.log("i: " + i.toString()),
            <div className="carousel-item active carousel-center">
              {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
            {/* <img src={require(item.toString())} alt={item.toString()} width="100%" height="auto"/> 
              <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.desc}</p>
              </div>   
            </div>
          )} } */}
          {/* <div className="carousel-item active carousel-center">
            <img src={require("./../images/la.jpg")} alt="Los Angeles" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>   
          </div>

          <div className="carousel-item active carousel-center">
            <img src={require("./../images/la.jpg")} alt="Los Angeles" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>   
          </div>

          <div className="carousel-item">
            <img src={require("./../images/chicago.jpg")} alt="Chicago" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={require("./../images/ny.jpg")} alt="New York" width="100%" height="auto"/>
            <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>   
          </div> */}
        </div>
        <a className="carousel-control-prev" href={"#" + this.state.id} data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href={"#" + this.state.id} data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      </div>
      
    )
  }
}