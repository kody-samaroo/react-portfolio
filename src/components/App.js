import React from "react"
import Bio from "./Bio"
import Blog from "./Blog"
import Project from "./Project"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="app">
          <Bio/>
          <Blog/>
          <Project/>
    </div>
  );
}

export default App;
