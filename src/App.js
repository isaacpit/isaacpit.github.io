import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import ThemeSwitcher from './pages/ThemeSwitcher';
import ProfileCard from './components/ProfileCard';
import CarouselOverlay from './components/CarouselOverlay';
import Portfolio from './pages/Portfolio';
import Timeline from './components/Timeline';
// import TimelineVertical from './components/TimelineVertical';
import Carousel2Column from './components/Carousel2Column';
import ThirdsCol from './components/ThirdsCol';
import ColumnBs from './components/ColumnBs';
import ColumnCarousel from './components/ColumnCarousel';
import TimelineHorizontal from './components/TimelineHorizontal';
// import TimelineVertical2 from './components/TimelineVertical2';
import TimelineVertical2 from './components/TimelineVertical2';
import BootstrapSite from './components/bs_site/BootstrapSite';
import HalfCol from './components/HalfCol';
import CarouselOverlayGeneral from './components/CarouselOverlayGeneral';
// import Data from './../constants/data';




const data = { 
  colors: {
    blue: "#d7ecfe",
    anotherBlue: "#e5edff",
    yellow: "#FFFDBC",
    red: "#ffd6da",
    purple:  "#d6deff",
    purple2: "#dde3ff",
    purple3: "#e4e9ff",
    purple4: "#ebeeff",
    anotherPurple: "#dff6f4",
    brown: "#F2DFD7",
    pink: "#FEF9FF",
    white: "#ffffff",
    blueAccent: "#ACC7CC",
    yellowAccent: "#FFF696",
    purpleAccent:  "#C1D1FF",
    brownAccent: "#FFCDBA",
    pinkAccent: "#EED3FF",
    whiteAccent: "#eee",
    grey: "#555",
  },
  repoImg: "https://img.icons8.com/ios-filled/400/000000/github.png",
  dataCompetitiveQuizzer: {
    images: [
      { id: 1, src: require('./images/quizzer_home.png'), title: 'foo', description: 'The home page of the application once a user signs in through Google OAuth.' },
      { id: 2, src: require('./images/quizzer_create_match.png'), title: 'foo', description: 'A user creating a match.' },
      { id: 3, src: require('./images/quizzer_quiz_selection.png'), title: 'foo', description: 'A user selecting which quiz to complete with friends.' },
      { id: 4, src: require('./images/quizzer_bigo_question.png'), title: 'foo', description: 'A big-o time complexity analysis question being answered.' },
      { id: 5, src: require('./images/quizzer_mult_question.png'), title: 'foo', description: 'A multipliation question being answered.' },
      { id: 6, src: require('./images/quizzer_results.png'), title: 'foo', description: 'The results of the quiz being viewed.' },
      { id: 7, src: require('./images/quizzer_mult_feedback.png'), title: 'foo', description: 'Feedback on a multiplication question.' },
      { id: 8, src: require('./images/quizzer_bigo_feedback.png'), title: 'foo', description: 'Feedback on a big-o question.' },
      { id: 9, src: require('./images/quizzer_bigo_feedback2.png'), title: 'foo', description: 'Affirmation on a correct big-o question.' },
      { id: 10, src: require('./images/quizzer_achievements.png'), title: 'foo', description: 'The list of achievements for profile customization unlockables.' },
      { id: 11, src: require('./images/quizzer_achievements2.png'), title: 'foo', description: 'Quite the extensive list of achievements.' },
      { id: 12, src: require('./images/quizzer_avatar_customization.png'), title: 'foo', description: 'A user\'s avatar being customized' },
      { id: 13, src: require('./images/quizzer_profile_screen.png'), title: 'foo', description: 'The profile screen where a user can change their profile info.' },
      { id: 14, src: require('./images/quizzer_profile_screen2.png'), title: 'foo', description: 'Another user\'s profile screen.' },
      
      
      
    ],
    title: "Qwiz: Competitive Quizzer",
    desc: `Competitive Quizzer or Qwiz is a portable learning tool for students. 
    This project is intended to be a tool for teachers to be able to supplement their students in learning foundational subjects that require lots of repetition and practice. 
    The application connects any number of users to 'matches' where users synchronously compete to finish a quiz on a given subject. The provided subjects we implemented are multiplication or big-o complexity analysis of code snippets.
    `,
    desc2: `The project was developed using C# and Unity for the client side. The client connected to a C# .NET server for synchronization amongst clients. The quiz data and profile data are stored in DynamoDB. The profile data is connected to a user's Google OAuth information. All networking communication was accomplished using custom TCP packets.  We simultaneously connected 15 users to a single quiz as our largest stress test.`,
    id: "carousel-1",
    link: "https://gitlab.com/kishanpa/CompetitiveQuizzer",
    
    footer: "Created Spring 2020",
    logos: [
      {
        src: "https://img.icons8.com/ios-filled/100/000000/unity.png",
        alt: "Unity",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png",
        alt: "C#",
        },
        {
          src: "https://img.icons8.com/ios-filled/100/000000/android-os.png",
          alt: "Android",
        },
        {
          src: "https://img.icons8.com/ios-filled/100/000000/ios-logo.png",
          alt: "iOS",
        },
        {
          src: "https://img.icons8.com/ios-filled/100/000000/google-logo.png",
          alt: "Google OAuth"
        },
        {
          src: "https://img.icons8.com/material/100/000000/amazon-web-services.png",
          alt: "AWS EC2",
        },
        {
          src: "https://img.icons8.com/metro/100/000000/database.png",
          alt: "DynamoDB"
        }
    ]
  },
  dataRazaWebsite: {

    title: "Texas House of Representatives Candidate Web Application",
    desc: `Created a custom responsive website for Texas House of Representative's candidate Raza Rahman. The frontend of the website was developed using Bootstrap, HTML, and CSS. The website also communicates with a Express.js server to store volunteer sign up information.  The database used to store this volunteer information was MongoDB. The website was intended for easy access to reach voters and recruit volunteers. The website was published on all of Raza Rahman's campaign materials.`,
    id: "carousel-2",
    desktop_id: "carousel-2-1",
    link: "http://razafortexas.com",
    images: [
      { id: 1, src: require('./images/raza_mobile0.png'), title: 'foo', description: "The website's home page on a mobile device. Responsive pages were a requirement." },
      { id: 2, src: require('./images/raza_mobile7.png'), title: 'foo', description: 'The website uses a volunteer form to connect to an Express.js server to store volunteer\'s information.' },
      { id: 4, src: require('./images/raza_mobile5.png'), title: 'foo', description: 'The shop section which routes to an external shop system.' },
      { id: 5, src: require('./images/raza_mobile1.png'), title: 'foo', description: 'The donation section which routes to an external web page.' },
      { id: 3, src: require('./images/raza_mobile8.png'), title: 'foo', description: 'The footer for social media links and credit to myself.' },
      
    ],
    images_desktop: [
      { id: 6, src: require('./images/raza_desktop_home.png'), title: 'foo', description: 'The website has a fully responsive interface with emphasis on mobile and Desktop versions.', desktop:true, }, 
      { id: 9, src: require('./images/raza_desktop_volunteer.png'), title: 'foo', description: 'The destkop version of the volunteer form.', desktop:true },
      { id: 8, src: require('./images/raza_desktop_shop.png'), title: 'foo', description: 'The desktop version of the shop carousel.', desktop:true },
      { id: 7, src: require('./images/raza_desktop_donate.png'), title: 'foo', description: 'The desktop version of the donation page', desktop:true },
      
    ],

    footer: "Created Spring 2020",
    logos: [
      {
        src: "https://img.icons8.com/metro/100/000000/css.png",
        alt: "CSS",
      },
      {
        src: "https://img.icons8.com/windows/96/000000/bootstrap.png",
        alt: "Bootstrap",
      },
      {
        src: "https://img.icons8.com/metro/100/000000/html.png",
        alt: "HTML"
      },
      {
        src: "https://img.icons8.com/metro/100/000000/javascript.png",
        alt: "Express.js"
      },
      {
        src: "https://img.icons8.com/metro/100/000000/database.png",
        alt: "MongoDB"
      }
      
    ]
  },
  dataWarseas: {
    images: [
      { id: 1, src: require('./images/warseas1.png'), title: 'foo', description: 'An example ongoing game occurring between two users, the user\'s own ships are on the left board. The user\'s opponent\'s ships are hidden on the right board.' },
      { id: 2, src: require('./images/warseas2.png'), title: 'foo', description: 'An example freshly started game, no moves have been made yet.' },
      { id: 3, src: require('./images/warseas3.png'), title: 'foo', description: 'A player moving their ship, highlighted areas are where the player can move.' },
    ],
    title: "War of the Seas",
    desc: "War of the Seas was a collaborative project where our team created a multiplayer network Battleship-like game complete with movement \
          and special attacks to spice things up. The client side application was developed using Unity. The client communicated with an intermediary Node.js server API connected to a MongoDB database. \
          ", 
    id: "carousel-3",
    footer: "Created Fall 2018",
    link: "https://github.com/isaacpit/WarOfTheSeas",
    logos: [
      {
        src: "https://img.icons8.com/ios-filled/100/000000/unity.png",
        alt: "Unity",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/javascript.png",
        alt: "Javascript",
      },
      {
        src: "https://img.icons8.com/ios-filled/120/000000/data-backup.png",
        alt: "Mongodb",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png",
        alt: "C#",
      }
    ]
  },
  dataBenefits: {
    images: [
      { id: 1, src: require('./images/amex1.png'), title: 'foo', description: 'Sign in page for our project.' },
      { id: 2, src: require('./images/amex9.png'), title: 'foo', description: 'Map view where users can manually set their location to find nearby discounts (users can alternatively just use their current location).' },
      { id: 3, src: require('./images/amex5.png'), title: 'foo', description: 'List view of generated nearby discounts.' },
      // { id: 4, src: require('./images/amex4.png'), title: 'foo', description: 'bar' },
      { id: 5, src: require('./images/amex6.png'), title: 'foo', description: 'Verbose view with option to input coordinates instead of dragging to a location.' },
      { id: 6, src: require('./images/amex10.png'), title: 'foo', description: 'Screenshot taken from a user\'s actual device, the user is able to see their actual location on the screen.' },
    ],
    title: "Colleague Benefits Locator",
    desc: "Developed during 24 hour hackathon at American Express. Led team to create an Android application which displayed local discounts for American Express employees. Utilized React Native and Google Maps for the front end. The discount data was statically gathered using a Python web scraper on an internal American Express tool.",
    id: "carousel-4",
    link: "https://github.com/isaacpit/ColleagueBenefitsLocator",
    footer: "Created Summer 2019",
    logos: [
      {
        src: "https://img.icons8.com/ios-filled/100/000000/react-native.png",
        alt: "React Native",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/javascript.png",
        alt: "Javascript",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/google-maps.png",
        alt: "Google Maps",
      },
      {
        src: "https://img.icons8.com/ios-filled/90/000000/android-os.png",
        alt: "Android",
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/python.png",
        alt: "Python",
      }
    ]
  },
  dataVrpiano: {
    images: [
      { id: 2, src: require('./images/vr-piano9.png'), title: 'foo', description: 'The virtual reality piano that users interact with for the entirety of the game along with the controllers to interact with the piano.' },
      { id: 7, src: require('./images/vr-piano1.png'), title: 'foo', description: 'A player destroying an enemy with a correct chord sequence. ' },
      { id: 6, src: require('./images/vr-piano2.png'), title: 'foo', description: 'Player in mid combat with enemies swarming them.' },
      { id: 1, src: require('./images/vr-piano10.png'), title: 'foo', description: 'A view of our wonderful spacecraft cockpit.' },
      { id: 3, src: require('./images/vr-piano8.png'), title: 'foo', description: 'A sample view of the tutorial.' },
      { id: 4, src: require('./images/vr-piano5.png'), title: 'foo', description: 'The instructions for the tutorial.' },
      { id: 5, src: require('./images/vr-piano4.png'), title: 'foo', description: 'A player viewing the game over screen.' },
      { id: 7, src: require('./images/vr-piano.png'), title: 'foo', description: 'A player\'s view into space.' },
      
      
    ],
    title: "Chord Wars",
    desc: "Created a space-themed virtual reality video game based on learning music theory. Aliens representing major, minor, and diminished chords fly at the player and the player must rock out to defeat the aliens through applying music theory knowledge to power their musical weaponry.",
    id: "carousel-5",
    footer: "Created Spring 2019",
    link: "https://github.com/isaacpit/vr-piano",
    logos: [
      {
        src: "https://img.icons8.com/ios-filled/100/000000/unity.png",
        alt: "Unity"
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/oculus-rift.png",
        alt: "Virtual Reality"
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/steam.png",
        alt: "SteamVR"
      },
      {
        src: "https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png",
        alt: "C#",
      }
    ]
  }
}
  

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route exact path="/" component={Portfolio}/> */}
          <Route exact path="/" render={(props) => <Portfolio {...props} id="first" data={data}/>}/>
          <Route path="/old" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/test" component={ThemeSwitcher}/>
          <Route path="/profilecard" component={ProfileCard}/>
          <Route path="/carouseloverlay" component={CarouselOverlay}/>
          <Route path="/timeline" component={Timeline}/>
          {/* <Route path="/timelinevertical" component={TimelineVertical}/> */}
          <Route path="/carousel2col" component={Carousel2Column}/>
          <Route path="/thirds" component={ThirdsCol}/>
          <Route path="/columnbs" component={ColumnBs}/>
          <Route path="/columncarousel" component={ColumnCarousel}/>
          <Route path="/timelinehorizontal" component={TimelineHorizontal}/>
          {/* <Route path="/time2" component={TimelineVertical2}/> */}
          {/* <Route path="/t2" component={TimelineVertical2}/> */}
          <Route path="/bootstrapsite" component={BootstrapSite}/>
          <Route path="/halfs" component={HalfCol}/>
          <Route path="/carouseloverlaygeneral" render={(props) => <CarouselOverlayGeneral {...props} id="first" data={data.dataBenefits} />}/>
          
          <Route component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
