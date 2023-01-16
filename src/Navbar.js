import React from "react";
import { Link } from "react-router-dom";
import github from "./Icons/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faFlickr
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container-nav">

        <ul className="nav-menu">
          <li className="nav-list">
            <Link to="/jpau-portfolio/" className="list">
              Photography
            </Link>
          </li>

          <li className="nav-list">
            <Link to="/jpau-portfolio/upcoming" className="list">
              Upcoming
            </Link>
          </li>
          <li className="nav-list">
            {" "}
            <Link to="/jpau-portfolio/about" className="list">
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link to="/jpau-portfolio/contact" className="list">
              Contact
            </Link>
          </li>

          <div className="icons ">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFlickr} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}
