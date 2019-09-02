import React, { Component } from 'react';
import "./CarouselOverlayGeneral.css";

export default class CarouselOverlayGeneral extends Component{
  constructor(props) {
    super(props);

    
    
    const id_val = (props.data.id != null) ? props.data.id : "demo";

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
    this.carousel_images = this.state.data.images.map((img,i)=>{
      if (i === 0) {
        return(
          <div className="carousel-item active carousel-center">
            {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
            <img className="w3-margin-top " src={img.src} alt={img.src} width={this.props.width}  height={this.props.height} /> 
            {/* <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>    */}
          </div>
            )
      }
      else {
        return(
          <div className="carousel-item carousel-center">
            {/* <img src={require(i.toString())} alt={toString(i)} width="100%" height="auto"/> */}
            <img className="w3-margin-top" src={img.src} alt={img.src} width={this.props.width} height={this.props.height} /> 
            {/* <div className="carousel-caption d-xs-block d-sm-none d-xl-block">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>    */}
          </div>
        )
    }})
    this.indicators = this.state.data.images.map((img, idx)=> {
      if (idx === 0) {
        return(<li data-target={"#" + this.state.id} data-slide-to={idx} className="active" style={{backgroundColor: this.props.colorAccent}}></li>)

      }
      else {
        return(<li data-target={"#" + this.state.id} data-slide-to={idx} style={{backgroundColor: this.props.colorAccent}}></li>)
        
      }})
    return (
      <div id="container-50" className="container d-flex ">
        <div id={this.state.id} className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        {this.indicators}

        </ul>
        <div className="carousel-inner border shadow p-3 mb-5">
          {this.carousel_images}
        
        </div>
        <a className="carousel-control-prev" href={"#" + this.state.id} data-slide="prev">
          {/* <span className="carousel-control-prev-icon "  style={{color: "#000"}}></span> */}
          <i className="fa fa-chevron-left fa-3x" style={{color: this.props.colorAccent}} ></i>
        </a>
        <a className="carousel-control-next" href={"#" + this.state.id} data-slide="next">
          <i className="fa fa-chevron-right fa-3x" style={{color: this.props.colorAccent}}></i>
        </a>
      </div>
      </div>
      
    )
  }
}