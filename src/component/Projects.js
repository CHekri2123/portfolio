import React, { useState } from 'react';
import "../css/projects.css";

// import FullstackProjects from "./FullstackProjects.js"
// import FrontendProjects from "./FrontendProjects.js"
import AIMLDLProjects from "./AIMLDLProjects.js"


function Bio() {
  const [clickedButton, setClickedButton] = useState('AIMLDLProjects');

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="container">
      <div className="home-left size-left left">
        <div>
          <p>Hi, I'm Kalyan.</p>
        </div>
        <div className="side-menu">
          {/* <div>
            <button 
              className={`text-button ${clickedButton === 'FullstackProjects' ? 'active' : ''}`} 
              onClick={() => handleButtonClick('FullstackProjects')}
            >
              Fullstack Projects
            </button>
          </div>
          <div>
            <button 
              className={`text-button ${clickedButton === 'FrontendProjects' ? 'active' : ''}`} 
              onClick={() => handleButtonClick('FrontendProjects')}
            >
              Fontend Projects
            </button>
          </div> */}
          <div>
            <button 
              className={`text-button ${clickedButton === 'AIMLDLProjects' ? 'active' : ''}`} 
              onClick={() => handleButtonClick('AIMLDLProjects')}
            >
              AI/ ML/ DL Projects
            </button>
          </div>
        
      </div>
        </div>
        
      <div className="right home-right size-right vertical-line ">
        {/* { clickedButton === 'FullstackProjects' && <FullstackProjects/>} */}
        {/* { clickedButton === 'FrontendProjects' && <FrontendProjects/>} */}
        { clickedButton === 'AIMLDLProjects' && <AIMLDLProjects/>}
      </div>
    </div>
  );
}

export default Bio;
