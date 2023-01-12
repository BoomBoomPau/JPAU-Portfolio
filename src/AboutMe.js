import React from "react";
import mutant2690 from "./images/mutant2690.png";
import aboutImage1 from "./images/NYC.jpg";
import jordan1 from "./images/jordandior.jpg";
import ironman from "./images/ironman.jpg";

export default function AboutMe() {
  const [display, setDisplay] = React.useState("");

  return (
    <div className="super-container-aboutme">
      <div className="container-aboutme">
        <br />
        <div className="container-aboutme-section-1">
          <img id="mutant2690" src={mutant2690} />
          <h2 id="h2-center"> Hi, I'm Jesse</h2>
        </div>
      </div>
      <div className="container-aboutme-section-2">
        <br />
        <h4>
          Based in Queens, NY, when I’m not out taking pictures you’ll often
          find me searching for the best pizza or attempting to bake croissants.
        </h4>
        <br />

        <img src={aboutImage1} id="NYC" />
        <p>
          Enjoy clean, minimalistic design. Passionate about creating and
          sharing beautiful moments.
        </p>
      </div>

      <div className="container-aboutme-section-2">
        <br />
        <img src={aboutImage1} id="NYC" />

        <br />
        <p>
          The site was made for fun, hope you look around and enjoy. Built with
          React/HTML/CSS.
        </p>
      </div>
    </div>
  );
}
