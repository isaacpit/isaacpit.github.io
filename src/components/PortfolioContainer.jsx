import React, { Component } from 'react';
import CarouselOverlay from './CarouselOverlay';

import CarouselOverlayGeneral from './CarouselOverlayGeneral';

import './PortfolioContainer.css';

const GITHUB_URL = "https://github.com/isaacpit";

class PortfolioItem extends Component{
  constructor(props) {
    super(props);

    
    if (!this.props.data.link) {
      console.log("entering");
      this.props.data.link = GITHUB_URL;
    }

    console.log('data: ');console.log(this.props);
    console.log('images: ');console.log(this.props.data.images);
    var images = this.props.data.images;

    // custom hack job for double carousel
    if (this.props.data.images_desktop != null) {
      // var desktop_data = this.props.data;
      var copied_desktop_data = JSON.parse(JSON.stringify(this.props.data));
      copied_desktop_data.images = this.props.data.images_desktop; // replace images with desktop images
      this.state = {
        data_desktop: copied_desktop_data
      }
    }


  }
  render() {
    return (
      <div className="card-deck w3-padding-16 " style={{backgroundColor: this.props.colorBg}} >
          <div className="card border-0" style={{backgroundColor: this.props.colorBg}}>
            <CarouselOverlayGeneral cardColor={this.props.cardColor} colorAccent={this.props.colorAccent} height={this.props.height} width={this.props.width} id={this.props.id} data={this.props.data} desktopWidth={this.props.desktopWidth} desktopHeight={this.props.desktopHeight}/>
            {/* secondary carousel if data is supplied */}
            {
              this.props.data.images_desktop != null && <CarouselOverlayGeneral cardColor={this.props.cardColor} colorAccent={this.props.colorAccent} height={this.props.height} width={this.props.width} id={this.props.data.desktop_id} data={this.state.data_desktop} desktopWidth={this.props.desktopWidth} desktopHeight={this.props.desktopHeight}/>
            }
            <div className="card-body w3-content">
              <h4 className="card-title text-center">{this.props.data.title}</h4>
              <p className="card-text text-center" style={{minHeight:"45px"}}>{this.props.data.desc}</p>
              {
                this.props.data.desc2 != null && <p className="card-text text-center">{this.props.data.desc2}</p>
              }
              <a href={this.props.data.link}><p className="text-center text-muted"> click <img src={this.props.repoImg} height="24px" width="24px"/> to go to {this.props.data.title}'s Github page</p></a>
              
            </div>
            <div className="card-footer">
              <small className="text-muted">{this.props.data.footer}</small>
              
              <div className="container">
                <div className="row">
                  {this.props.data.logos.map((i, idx) => 
                    <div className="col d-flex flex-row justify-content-center " style={{maxHeight: "inherit"}}>
                      
                      <div className = "d-flex flex-column align-items-center justify-content-center"> 
                        <img key={idx} width="50px" height="50px" src={i.src} alt={i.alt}/>
                        <p className="text-muted p-2">{i.alt}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>  
              
            </div>
          </div>
        </div>
    )
  }
}

class PortfolioItemNoCarousel extends Component{
  constructor(props) {
    super(props);

    
    if (!this.props.data.link) {
      console.log("entering");
      this.props.data.link = GITHUB_URL;
    }

    console.log('data: ');console.log(this.props);
  }
  render() {
    return (
      <div className="card-deck w3-padding-16 " style={{backgroundColor: this.props.colorBg}} >
          <div className="card border-0" style={{backgroundColor: this.props.colorBg}}>
            <div id="container-50" className="container d-flex " >
              
            </div>
            <div id="container-50" className="container d-flex " >
              <div className="carousel slide" data-ride="carousel" data-interval="3000">
              
              <div className="carousel-inner border shadow p-3 mb-5" style={{backgroundColor: this.props.cardColor}}>
                <a href={this.props.data.link}><p className="text-center text-muted"><img className="w3-margin-top" src={this.props.data.imageCard} height="auto" width="50%" style={{minWidth: "400px"}} /></p></a>
              
              </div>
              
            </div>
            </div>
            
            <div className="card-body w3-content">
            
              
              <h4 className="card-title text-center">{this.props.data.title}</h4>
              <p className="card-text text-center">{this.props.data.desc}</p>
              <a href={this.props.data.link}><p className="text-center text-muted"> click <img src={this.props.data.imageCard} height="24px" width="auto"/> to go to the page</p></a>

              
            </div>
            <div className="card-footer">
              <small className="text-muted">{this.props.data.footer}</small>
              
              <div className="container">
                <div className="row">
                  {this.props.data.logos.map((i, idx) => 
                    <div className="col d-flex flex-row justify-content-center " style={{maxHeight: "inherit"}}>
                      
                      <div className = "d-flex flex-column align-items-center justify-content-center"> 
                        <img key={idx} width="50px" height="50px" src={i.src} alt={i.alt}/>
                        <p className="text-muted p-2">{i.alt}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>  
              
            </div>
          </div>
        </div>
    )
  }
}

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
      <div id="Portfolio"> 
        <div className="d-flex justify-content-center">
          <h3>Portfolio</h3>
        </div>
        
      
      <PortfolioItem cardColor={this.props.data.colors.white} colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple3} data={this.props.data.dataCompetitiveQuizzer} id={this.props.data.dataCompetitiveQuizzer.id} repoImg={this.props.data.repoImg} width="auto" height="450px"/>
      <PortfolioItem cardColor={this.props.data.colors.white} colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple4} data={this.props.data.dataRazaWebsite} id={this.props.data.dataRazaWebsite.id} repoImg={this.props.data.repoImg} width="auto" height="450px" desktopWidth="90%" desktopHeight="auto"/>
      <PortfolioItem cardColor={this.props.data.colors.white} colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple3} data={this.props.data.dataBenefits} id={this.props.data.dataBenefits.id} repoImg={this.props.data.repoImg} width="auto" height="450px"/>
      <PortfolioItem cardColor={this.props.data.colors.white} colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple2} data={this.props.data.dataVrpiano} id={this.props.data.dataVrpiano.id} repoImg={this.props.data.repoImg} width="100%" height="auto"/>
      <PortfolioItem cardColor={this.props.data.colors.white} colorAccent={this.props.data.colors.purpleAccent} colorBg={this.props.data.colors.purple} data={this.props.data.dataWarseas} id={this.props.data.dataWarseas.id} repoImg={this.props.data.repoImg} width="100%" height="auto"/>

      
      
        
      </div>
      
    )
  }
}