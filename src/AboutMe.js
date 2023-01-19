import React from "react";
import mutant2690 from "./images/mutant2690.png";
import aboutImage1 from "./images/NYC.jpg";
import bwmutant2690 from "./images/bwmutant2690.png";
import flowers from "./images/flowers.jpg";


export default function AboutMe() {
  const [display, setDisplay] = React.useState("");
  let [setPhoto, setShowPhoto] = React.useState(true);

  let set = setPhoto ? mutant2690 : bwmutant2690;

  function toggler() {
    setShowPhoto((prevShow) => !prevShow);
  }

  function toggle() {
    setShowPhoto((prevShow) => !prevShow);
  }

  return (
    <div className="super-container-aboutme">
      <div className="container-aboutme">
        <br />
        <div className="container-aboutme-section-1">
        <img
            src={set}
            width="40%"
            onMouseOver={toggler}
            onMouseLeave={toggle}
          />
          <h2 id="h2-center"> Hi, I'm Jesse</h2>
        </div>
      </div>
      <div className="container-aboutme-section-2">
        <br />
        <h3 id="section-1">
          Based in Queens, NY, when I’m not out taking pictures you’ll often
          find me searching for the best pizza or attempting to bake croissants.
        </h3>
        <br />

        <img src={aboutImage1} id="NYC" />
        <h4>
          Enjoy clean, minimalistic design. Passionate about creating and
          sharing beautiful moments.
        </h4>
      </div>

      <div className="container-aboutme-section-2">
        <br />
        <img src={flowers} id="NYC" />

        <br />
        <p>
          The site was made for fun, hope you look around and enjoy. Built with
          React/HTML/CSS.
        </p>
      </div>
    </div>
  );
}
