import React, { useState } from 'react';
import "../css/card.css"
import "../css/full-stack-projects.css"
import "../css/text-size.css"

const projects = [
  

  {
    title: "BankAI: Transformer-Based Chatbot for Customer Support",
    technologies: "Python, Hugging Face Transformers, PyTorch, Pandas, Datasets Library, Accelerate, Transformers Pipeline",
    date: "Jan 2023",
    details: "Built a chatbot using Transformers for the banking sector, ensuring accurate and reliable interactions. Trained on Persona dataset to offer personalized conversation.",
    githubLink: "https://github.com/CHekri2123/BankAI",
    // images: [
    //   "../../img/twitter/s1.png", 
    //   "../../img/twitter/s2.png",
    //   "../../img/twitter/s3.png"
    // ]
  },
  // Add more projects here...
  {
    title: "ActionVision: Real-time Action Classification with Transfer Learning",
    technologies: "Python, Tensorflow, Jupyter Notebook",
    date: "March 2024",
    details: "Proposed a approach to classify videos using transfer learning. Proposed a deep learning architecture combining EfficientNet and BiLSTM to improve image classification accuracy while leveraging sequential information. Getting 89.90% accuracy on UCF101 dataset",
    githubLink: "https://github.com/CHekri2123/ActiVision",
    // images: [
    //   "../../img/twitter/s1.png", 
    //   "../../img/twitter/s2.png",
    //   "../../img/twitter/s3.png"
    // ]
  },
];

function AIMLDLProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  // const openLightbox = (image) => {
  //   setSelectedImage(image);
  // };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container">
      {/* <h2>Full-stack Projects</h2> */}
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item card">
            <h3>{project.title}</h3>
            <p className="p-x-small"><strong>Technologies Used:</strong> {project.technologies}</p>
            <p className="p-x-small"><strong>Date Created:</strong> {project.date}</p>
            <p className="p-x-small"><strong>Details:</strong> {project.details}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            {/* <div className="project-images">
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${project.title} Screenshot ${imgIndex + 1}`} 
                  className="project-image" 
                  onClick={() => openLightbox(image)} 
                />
              ))}
            </div> */}
          </li>
        ))}
      </ul>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Full Size" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default AIMLDLProjects;
