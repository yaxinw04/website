import React from "react";
import { YouTubeVideoEmbed, Gamedesign } from "../bcigaming.js";
import Quoted from "../images/Screenshot_20230217_010206.png";
import BeaverModel from "../images/beavermodel.js";
import BeaverDrawing from "../images/Screenshot 2023-09-10 181149.png";
import { TermTranslator, AutofillEmbed } from "../images/mediform.js";
import Beamform from "../images/Screenshot_20230217_010345.png";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>

      <p className="text">Check out some of my favourite projects!</p>
      {/* bci gaming project */}
      <div className="projects">
        <div className="bcigaming">
          <h3>Watolink BCI Gaming Project (WIP)</h3>
          <div className="video-container">
            <div className="video">
              <YouTubeVideoEmbed />
            </div>
            <div className="video">
              <Gamedesign />
            </div>
          </div>

          <p>
            WATOLINK is the University of Waterloo's neurotechnology student
            design team. As a co-leader for the BCI (Brain-Computer Interface)
            gaming project, our team is developing a wild west-themed game from
            scratch controlled by brain signals. Utilizing an array of tools,
            including C#, Unity, Python, Figma, and more, our team has worked
            immesnly hard in creating this unique game. The BCI feature includes
            the integration of the Neurosity headset, used to detect player
            blinks. Before gameplay, the headset undergoes a calibration phase
            tailored to the individual (shown in video). Then every detected
            blink prints 'BLINK DETECTED' in the terminal.
          </p>
        </div>
      </div>

      {/* medi+Form */}
      <div className="projects">
        <div className="mediform">
          <h3>Medi+Form Chrome Extension</h3>
          <div className="video-container">
            <div className="video">
              <TermTranslator />
            </div>
            <div className="video">
              <AutofillEmbed />
            </div>
          </div>
          <p>
            Google Chrome extension that saves your information and autofills
            medical forms. It also has a 'medical jargon translation' feature
            that shows a simplified English definition of the term as well as
            the pronouciation of the term. Created using JavaScript, HTML, and
            CSS. Hack the Globe 2023 Submission.
          </p>
          <a
            href="https://github.com/yaxinw04/HTGteam20"
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
          <h3>Beaver Puzzle</h3>
          <div className="beaver-content">
            <div className="beaver-3dmodel">
              <BeaverModel />
            </div>
            <div className="beaver-image">
              <img src={BeaverDrawing} alt="Beaver Drawing" />
            </div>
          </div>
          <p class="beavertext">
            Interactive 7 piece toy beaver puzzle made in SolidWorks, assembled
            using SolidWorks Composer.
          </p>
        </div>
      </div>

      <div className="halfscreen-container">
        {/* Quoted */}

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

        {/* Beamform */}

        <div className="beamform">
          <div className="beamform-description">
            <h3>Ultrasound Image Beamforming</h3>
            <img src={Beamform} alt="beamform image creenshot" />
          </div>
          <p>
            Ultrasound imaging project which uses beamforming and multiple
            scanlines to generates an ultrasound image. Final project submission
            for C++ course. <br />
            <br />
            Technologies Used: C++
          </p>
          <a
            href="https://github.com/yaxinw04/Ultrasound-beamforming-bme121finalproject"
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
