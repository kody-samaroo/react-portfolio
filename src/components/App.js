import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  return (
    <div className="app" style={{ backgroundColor: "#262626"}}>
      <Navbar />
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
