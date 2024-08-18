import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import "../css/button.css";

function Home() {
  const navigate = useNavigate();

  const handleBioClick = () => {
    navigate("/bio");
  };

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <div className="container">
      <div className="home-left size-left">
        <p className="my-name">Hi, I'm Kalyan.</p>
        <button className="bw-button" onClick={handleBioClick}>
          Bio
        </button>
        <a href="https://drive.google.com/file/d/1PaPMVMBwTcZYw5oeRLFfrn_6U2TgcF_j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="bw-button-resume" onClick={handleBioClick}>
            Resume
          </button>
        </a>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="home-right size-right vertical-line">
        <p className="p-small">
          Hi, My name is Kalyan Ganji.
          <br />
          An aspiring Software engineer.
          <br />
          Dedicated to crafting innovative solutions and pushing the boundaries
          of technology.
          <br />
        </p>
        <button className="bw-button" onClick={handleProjectsClick}>
          Projects
        </button>
      </div>
    </div>
  );
}

export default Home;
