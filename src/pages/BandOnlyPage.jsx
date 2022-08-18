import React, { Component } from 'react';
import { MrKatTimeline } from "../components/ForFunTimeline";
import NavbarAlt from '../components/NavbarAlt';
import './BandOnlyPage.css';

const ContactCard = ({href, text}) => {
  return (
      <a href={href} target="_blank">
        {/* <div className="col d-flex flex-row justify-content-center " style={{maxHeight: "inherit"}}> */}
          <div className = "d-flex flex-column align-items-center justify-content-center"> 
            <img width="50px" height="50px" src={"https://img.icons8.com/color/100/000000/instagram-new--v1.png"} alt={"Instagram"}/>
            <p className="p-2">{text}</p>
          </div>
        {/* </div> */}
      </a>
    
  );
}

const Contact = ({bgColor, cardColor}) => {
  return (
      <>
        <div style={{backgroundColor: 'white'}} className="d-flex justify-content-center">
          <h3>Contact Us</h3>
        </div>
        <p>Shoot us a DM on the band instagram page or email us at </p>
        <b>mrkat.mp3 AT gmail DOT com</b>
        <div className="d-flex justify-content-center align-items-center	" style={{backgroundColor: bgColor}}>
          {/* <div className="w3-card w3-padding-16	 d-flex flex-row align-items-center justify-content-center contact-card-container" style={{backgroundColor: cardColor}}> */}
            <ContactCard
              text="Mr. Kat Band Instagram"
              href="https://www.instagram.com/mrkatband/"
            />
        </div>
        
        
      </>
  );
}
export const BandOnlyPage = ({bgColor, cardColor}) => {
  return (
    
    <div className="w3-margin-bottom">
      <div className="block1"> 
          <NavbarAlt/>
          {/* <Contact bgColor={bgColor} cardColor={cardColor}/> */}
          <div style={{backgroundColor: "white"}} className="d-flex justify-content-center">
            <h3>Mr. Kat Band Page</h3>
          </div>
      </div>
      <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: bgColor}}>
      
        <MrKatTimeline 
          caption="We are Mr. Kat, a Texas grown band. We are looking to gig in the Austin, San Antonio, College Station, and Dallas area. Our band members are: Kat (vocals and guitar), Isaac (guitar), Johnny (drums), and Victor (bass). Here's some of our demos."
          bgColor={bgColor}
          cardColor={cardColor}
          
        >
          <Contact/>
        </MrKatTimeline>
        
      </div>
      
    </div>
  );
}