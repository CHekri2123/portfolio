import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import '../css/social.css';

function Social() {
  return (
    <div className="social-media-links">
      <a href="https://github.com/CHekri2123" title="Github" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/kalyanganji" title="Linkedin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* <a href="https://twitter.com/kunuswavik" title="Twitter" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
      <a href="https://leetcode.com/u/Swavik/" title="Leetcode" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLaptopCode} />
      </a>
      <a href="https://www.instagram.com/kunuswavik/" title="Instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a> */}
    </div>
  );
}

export default Social;
