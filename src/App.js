import "./styles.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import LoadingPage from "./LoadingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Animation from "./Animation";

export default function App() {
  return (
    <>
      <div>
        <div className="container-logo">
          <h1 id="logo"> JPAU </h1>
        </div>
        <Navbar />
        <div className="container-main">
          <div>
            <Routes>
            <Route path="/jpau-portfolio/" element=<Gallery /> />
              
              <Route path="/jpau-portfolio/animation" element=<Animation /> />
              <Route path="/jpau-portfolio/about" element=<AboutMe /> />
              <Route path="/jpau-portfolio/contact" element=<Contact /> />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
