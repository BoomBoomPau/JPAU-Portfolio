import aboutImage1 from "./images/AboutMe_Image_01.jpg";
import mutant2690 from "./images/mutant2690.png";

export default function AboutMe() {
  return (
    <div>
      <h1 className="title"> About Me </h1>
      <div className="container-about-me">
        <div className="container-about-me-1">
          <img className="about-img" src={mutant2690} />
          <h1>
            Hi there,
            <br />
            I’m Jesse.
          </h1>
        </div>
        <div className="container-about-me-2">
          <h3>
            {" "}
            <pre>
              Based in Queens, NY, when I’m not out taking pictures{" "}
              <pre>you’ll often find me searching for the best </pre>pizza or
              attempting to bake croissants.
            </pre>
          </h3>

          <img src={aboutImage1} className="about-img-2" />
        </div>

        <div className="container-about-me-1">
          <img className="about-img" src={mutant2690} />
          <h3>
            <pre>
              {" "}
              My friends would often describe me as a sneakerhead, keyboard{" "}
            </pre>
            <pre> enthusiast, and a passionate baseball nerd. </pre>{" "}
          </h3>
        </div>
        <div className="container-about-me-2">
          <h3>
            Enjoy clean, minimalistic design. Passionate about creating and
            sharing beautiful moments.
          </h3>
        </div>
        <h4>
          The site was made for fun, hope you look around and enjoy. Built with
          React/HTML/CSS.
        </h4>
        <ul>
          Gear
          <li> SONY A7RIV</li>
          <li> SONY 70-200MM</li>
          <li> SONY 24MM</li>
          <li> SIGMA 24-70 F2.8</li>
          <li> TGR Jane ME </li>
        </ul>
      </div>
    </div>
  );
}
