import React from "react";
import { YouTubeVideoEmbed, Gamedesign } from "../bcigaming.js";
import Quoted from "../images/Screenshot_20230217_010206.png";
import BeaverModel from "../images/beavermodel.js";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      {/* bci gaming project */}
      <div className="projects">
        <div className="bcigaming">
          <div className="bcigaming-project-description">
            <h3>Watolink BCI Gaming Project (WIP)</h3>
            <YouTubeVideoEmbed />
            <Gamedesign />
            <p>
              WATOLINK is the University of Waterloo's neurotechnology student
              design team. As a co-leader for the BCI (Brain-Computer Interface)
              gaming project, our team is developing a wild west-themed game
              from scratch controlled by brain signals. Utilizing an array of
              tools, including C#, Unity, Python, Figma, and more, our team has
              worked immesnly hard in creating this unique game. The BCI feature
              includes the integration of the Neurosity headset, used to detect
              player blinks. Before gameplay, the headset undergoes a
              calibration phase tailored to the individual (shown in video).
              Then every detected blink prints 'BLINK DETECTED' in the terminal.
            </p>
            <a
              href="link-to-project-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Quoted */}
      <div className="projects">
        <div className="quoted">
          <div className="quoted-description">
            <h3>Quoted</h3>
            <img src={Quoted} alt="Quoted interface" />
          </div>
          <p>
            A web-based journaling platform designed in Figma. The frontend was
            crafted using React, JavaScript, HTML, and CSS, while the backend
            was developed with Python. Throughout the project, Postman was used
            to test the functionality of the server.
          </p>
          <a
            href="https://github.com/yaxinw04/quoted-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Code
          </a>
        </div>
      </div>

      {/* Beaver */}
      <div className="projects">
        <div className="beaver">
          <div className="beaver-description">
            <h3>Beaver Puzzle</h3>
            <BeaverModel />
          </div>
          <p>
            A web-based journaling platform designed in Figma. The frontend was
            crafted using React, JavaScript, HTML, and CSS, while the backend
            was developed with Python. Throughout the project, Postman was used
            to test the functionality of the server.
          </p>
          <a
            href="https://github.com/yaxinw04/quoted-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Code
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
