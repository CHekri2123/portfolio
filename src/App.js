import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import MyNavbar from "./component/MyNavbar";
import Home from "./component/Home";
import Contacts from "./component/Contacts";
import PageNotFound from "./component/PageNotFound";
import Social from "./component/Social";
import Bio from "./component/Bio";
import Projects from "./component/Projects";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="social">
        <Social />
      </div>
      <div className="home">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
