import React from 'react';
import "../css/text-size.css";
import "../App.css";

function Experiences() {
  return (
    <div>
      <div className="experience-section">
        <h3>Experience</h3>
        
        <div className="card">
  <h5>Research Intern (AI and Social Media Moderation)</h5>
  <p className="p-x-small">CERAI</p>
  <p className="p-x-small">Dec 2023 - Jan 2024</p>
  <ul className="p-x-small">
    <li>Conducted research on AI and social media moderation collaboration.</li>
    <li>Documented guidelines for implementing AI models in social media moderation.</li>
    <li>Contributed to optimizing content moderation processes through AI integration.</li>
  </ul>
</div>

<div className="card">
  <h5>Software Developer Intern (DevOps, AdonisJS)</h5>
  <p className="p-x-small">NGP Websmart</p>
  <p className="p-x-small">Aug 2022 - July 2023</p>
  <ul className="p-x-small">
    <li>Developed a tool for automating DevOps tasks, extracting data from a database every minute using a bash script, and transmitting it to Google Cloud PubSub.</li>
    <li>Implemented a server-client API with AdonisJS to receive and acknowledge messages from PubSub to the client.</li>
    <li>Utilized Kibana, Logstash, and Elasticsearch to visualize extensive data from an I/O device.</li>
    <li>Analyzed data to uncover trends, patterns, and anomalies; collaborated with cross-functional teams to align insights with business objectives and drive decision-making.</li>
  </ul>
</div>

        {/* You can add more experience cards here if needed, if you got more experience*/}
      </div>
    </div>
  );
}

export default Experiences;

// test comment
// another test comment
