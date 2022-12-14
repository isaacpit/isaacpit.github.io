import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bio from './Bio';
import './NavbarAlt.css';

const InPageAnchors = ({text, searchId, statePushUrl}) => {


  return (
    <a className="navbar-link"
        href={statePushUrl}
        onClick={(e) => {
          let hero = document.getElementById(searchId);
          e.preventDefault();
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          // hero.scrollIntoView({ block: "start" });
          window.history.pushState("TEST", "TEST", statePushUrl);
        }}
      >
      {text}
    </a>
  );
  
}
const NavbarAlt = () => {

  const location = useLocation().pathname;
  const HOME = "/#/portfolio-web"; // changed from being root so we could put on instagram. instagram doens't play nice w/ hash URLs ... 
  const IS_HOME = location == "/portfolio-web";
  console.log("LOCATION=", location);
  console.log("IS_HOME=", IS_HOME);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href={HOME}>
        <img id="navbar-brand-logo" alt="mr-kat-band-logo" src={require("./../images/lifePics/mr-kat-logo.jpg")} /> 
      </a>
      
      <a id="navbar-brand-name" className="navbar-brand" href={HOME}>Isaac's Portfolio</a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

      
        <ul className="navbar-nav align-items-center justify-content-center">

          

          {IS_HOME &&
            <>
              <InPageAnchors 
                text="About Me"
                searchId="about-me-header"
                statePushUrl={HOME}
              />
              <InPageAnchors 
                text="Experience"
                searchId="experience-header"
                statePushUrl={HOME}
              />
              <InPageAnchors 
                text="Portfolio"
                searchId="portfolio-header"
                statePushUrl={HOME}
              />
              <InPageAnchors 
                text="After Hours"
                searchId="for-fun-header"
                statePushUrl={HOME}
              />
            
            </>
          }   
        
          <Link id="link-to-band-page" to="/mr-kat">Band Page</Link>

        </ul>
      </div>
    </nav>
  );
}

export default NavbarAlt;
