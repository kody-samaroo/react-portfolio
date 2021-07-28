import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="app" style={darkMode ? {backgroundColor: "var(--dark-bg)"} : {backgroundColor: "var(--light-bg)"} }>
      <Navbar 
        darkMode={darkMode}
        handleToggle={handleToggle}
      />
      <Home darkMode={darkMode}/>
      <br/>
      <Blogs darkMode={darkMode}/>
      <br/>
      <Projects darkMode={darkMode}/>
      <br/>
      <Contact darkMode={darkMode}/>
      <br/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}
