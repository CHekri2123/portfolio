import React from 'react';
import "../css/text-size.css"

const SkillSection = () => {
  return (
    <section className="skill-section">
      <h3>Skills</h3>
      <div className="card">
        <h5>Programming Languages</h5>
        <p className="p-x-small">Python, Java, C, SQL, TypeScript, JavaScript</p>
      </div>
      <div className="card">
        <h5>Frameworks</h5>
        <p className="p-x-small">Scikit-learn, NLTK, TensorFlow, Keras</p>
      </div>
      <div className="card">
        <h5>Tools</h5>
        <p className="p-x-small">VueJS, AdonisJS, Kubernetes, Docker, GIT, MySQL</p>
      </div>
      <div className="card">
        <h5>Platforms</h5>
        <p className="p-x-small">Linux, Web, Windows, GCP</p>
      </div>
    </section>
  );
};

export default SkillSection;
