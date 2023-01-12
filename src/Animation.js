import React from "react";
import mutant2690 from "./images/mutant2690.png";
import ironmayc from "./images/ironmayc.png";

export default function Animation() {
  let [setPhoto, setShowPhoto] = React.useState(true);
  const hamburger = document.querySelector(".hamburger");

  let set = setPhoto ? mutant2690 : ironmayc;

  function toggler() {
    setShowPhoto((prevShow) => !prevShow);
  }

  function toggle() {
    setShowPhoto((prevShow) => !prevShow);
  }
  function tog() {
    hamburger.classList.toggle("active");
    console.log("toggle");
  }

  return (
    <div>
      <div>
        <h1> Animations </h1>
        <img
          src={set}
          width="40%"
          onMouseOver={toggler}
          onMouseLeave={toggle}
        />
      </div>
      <div className="hamburger" onClick={tog}>
        <span className="bar"> </span>
        <span className="bar"> </span>
        <span className="bar"> </span>
      </div>
    </div>
  );
}