import React, { Component } from 'react';
import { MrKatTimeline } from "../components/ForFunTimeline";
import NavbarAlt from '../components/NavbarAlt';

export const BandOnlyPage = ({bgColor, cardColor}) => {
  return (
    
    <div className="w3-margin-bottom">
      <div className="block1"> 
          <NavbarAlt/>
          <div style={{backgroundColor: "white"}} className="d-flex justify-content-center">
            <h3>Mr. Kat Band Page</h3>
          </div>
      </div>
      <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{backgroundColor: bgColor}}>
      
        <MrKatTimeline 
          caption="We are Mr. Kat, a College Station grown band. We are looking to gig in the Austin, San Antonio, College Station, Dallas area. Our band members are: Kat (vocals and guitar), Isaac (guitar), Johnny (drums), and Victor (bass). Here's some of our demos."
          bgColor={bgColor}
          cardColor={cardColor}
        />
      </div>
    </div>
  );
}