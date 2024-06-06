import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p>
        {" "}
        © 2024 | This project was created by
        <a
          href="https://niaramirez-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Nia Ramírez{" "}
        </a>
        and is
        <a
          href="https://github.com/estefaniaramirezmnt/react-beer-website"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
      </p>
      <ul className="brands">
        <li>
          <a href="https://github.com/estefaniaramirezmnt" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/estefaniaramirezmnt/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://niaramirez-portfolio.netlify.app/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
