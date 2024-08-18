import React, { useState } from 'react';
import "../App.css"
import "../css/bio.css";
import "../css/card.css";

import Education from "./Education.js"
import Skills from "./Skills.js"
import Experiences from "./Experiences.js"
import Certificates from "./Certificates.js"


function Bio() {
  const [clickedButton, setClickedButton] = useState('Education');

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="container">
      <div className="home-left size-left left">
        <div className = "name">
          <p className="my-name-bio">Hi, I'm Kalyan.</p>
        </div>
        <div className="side-menu">
        <div>
          <button 
            className={`text-button ${clickedButton === 'Education' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('Education')}
          >
            Education
          </button>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'Skills' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('Skills')}
          >
            Skills
          </button>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'Experiences' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('Experiences')}
          >
            Experiences
          </button>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'Certificates' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('Certificates')}
          >
            Certificates
          </button>
        </div>
        </div>
        
      </div>
      <div className="home-right size-right vertical-line right">
        { clickedButton === 'Education' && <Education/>}
        { clickedButton === 'Skills' && <Skills/>}
        { clickedButton === 'Experiences' && <Experiences/>}
        { clickedButton === 'Certificates' && <Certificates/>}
      </div>
    </div>
  );
}

export default Bio;

// this is a test comment
// this is another test comment
