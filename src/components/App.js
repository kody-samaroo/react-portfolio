import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="app" style={{ backgroundColor: "#262626"}}>
      <Navbar darkMode={darkMode}/>
      <Home />
      <br/>
      <Blogs />
      <br/>
      <Projects />
      <br/>
      <Contact />
      <br/>
      <Footer />
    </div>
  );
}
