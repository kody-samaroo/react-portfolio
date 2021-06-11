import React from "react";
import { Switch, Route } from "react-router"
import Navbar from "./Navbar";
import Home from "./Home";
import Bio from "./Bio";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  return (
    <>
      <Switch>
      <Navbar />
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/bio">
          <Bio />
        </Route>

        <Route exact path="/blogs">
          <Blogs />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </Switch>
    </>
  );
}
