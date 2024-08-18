import React from 'react'
import "../css/card.css"
import "../css/remove-underline.css"
import "../css/text-size.css"

function Certificates() {
  return (
    <section className="skill-section">
      <h3>Certificates</h3>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/1CaYGD4jiGHDMeS_D0pj__00ct3oKe5e0/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h5>Coursera - Natural Language Programming Specialization</h5></a>
      </div>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/1O7gIpEUT5wtbWUepFR2wsGi2hFrXx2KC/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h5>Coursera - Machine Learning Specialization</h5></a>
      </div>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/1qv-fpP6-YfBc3TIC5L9WT4xzqytoMizW/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h5>Udemy - The Complete Web Development Bootcamp</h5></a>
      </div>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/1fZp-KS0xYO8mCvdZo5EnhiNU9ssQDz6M/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h5>Udemy - Python For Data Science</h5></a>
      </div>
      
    </section>
  );
}

export default Certificates