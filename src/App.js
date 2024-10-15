import "./App.scss";

import { Route, Routes } from "react-router-dom";

import About from "./Containers/about/Index";
import Contact from "./Containers/contacts/Index";
//import DailyTask from "./Containers/crud/index.jsx";
import Home from "./Containers/home/Index";
import Navbar from "./Components/navBar/Index";
//import Particles from "react-tsparticles";
import Projects from "./Containers/projects/Index";
import Resume from "./Containers/resume/Index";
import Skills from "./Containers/skills/Index";

//import { loadFull } from "tsparticles";
//import paticles from "./Components/utils.js/paticles";
//import { useLocation } from 'react-router-dom';

function App() {

  // const location = useLocation();
  // console.log(location);

  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };

  // const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/*particles js */}

      {/* {renderParticleJsInHomePage && (
        <Particles id="particles" options={paticles} init={handleInit} />
      )} */}

      {/*nav bar */}
      <Navbar/>

      {/*main page content */}
      <div className="App__main-page-content">
      <Routes>
      <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </div>
    </div>
  );
}

export default App;
