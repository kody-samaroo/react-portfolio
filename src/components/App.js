import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Works from "./Works";
import Projects from "./Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <br/>
      <Works/>
      <br/>
      <Projects/>
      <br/>
    </div>
  );
}
