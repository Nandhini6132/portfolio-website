import React, { useRef } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects2 from "./Projects2";
import { Router, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Config from "./Config";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="App">
      <NavBar/>
   
      <Home />
      <About />
      <Projects2 />
      <Contact />
    </div>
  );
}

export default App;
