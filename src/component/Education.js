import React from 'react'
import "../css/text-size.css"
import "../App.css"

function Education() {
  return (
    <div>
        <div className="education-section">
        <h3>Education</h3>
        <div className="card">
          <h5>Master of Science in Data Science and Artificial Intelligence</h5>
          <p className="p-x-small">Indian Institute of Technology Madras, Chennai, Tamilnadu, India</p>
          <p className="p-x-small">2023 - 2025</p>
        </div>

        {/* <div className="card">
          <h5>Master in Computer Application</h5>
          <p className="p-x-small">Ravenshaw University, Cuttack, Odisha, India</p>
          <p className="p-x-small">2017 - 2020</p>
        </div> */}

        <div className="card">
          <h5>BE in Computer Science and Engineering</h5>
          <p className="p-x-small">Anna University, Chennai, Tamilnadu, India</p>
          <p className="p-x-small">2019 - 2023</p>
        </div>

        <div className="card">
        <h5>Intermediate (Higher Secondary)</h5>
        <p className="p-x-small">Narayana Junior College, Nellore,Andhra Pradesh, India</p>
        {/* <p className="p-x-small">College of Basic Science & Humanities, Bhubaneswar, Odisha, India</p> */}
        <p className="p-x-small">2017 - 2019</p>
      </div>
      </div>
    </div>
  )
}

export default Education