import React from "react";
import {
  YouTubeVideoEmbed,
  Gamedesign,
  PromoVid,
  WoundsAdressed,
} from "../bcigaming.js";
import Quoted from "../images/Screenshot_20230217_010206.png";
import BeaverModel from "../images/beavermodel.js";
import BeaverDrawing from "../images/Screenshot 2023-09-10 181149.png";
import WoundsAdressedPic1 from "../images/wounds adressed.jpg";
import WoundsAdressedPic2 from "../images/wounds adressed2.jpg";
import {
  TermTranslator,
  AutofillEmbed,
  DremtDemo,
  RunwayReady,
} from "../images/mediform.js";
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
            {/* <div className="video">
              <YouTubeVideoEmbed />
            </div> */}
            <div className="video">
              <PromoVid />
            </div>
            <div className="video">
              <Gamedesign />
            </div>
          </div>

          <p>
            WATOLINK is the University of Waterloo's neurotechnology student
            design team. As a{" "}
            <strong>
              co-leader for the BCI (Brain-Computer Interface) gaming project
            </strong>
            , our team is developing a Wild West-themed game from scratch
            controlled by brain signals. The BCI feature includes the
            integration of the Neurosity headset, used to detect player blinks.
            Our game, <strong>MindFire</strong>, was selected as a{" "}
            <strong>
              finalist for the IEEE GameSIG Student game development competition
            </strong>
            .
            <br />
            <br />
            <strong>Built with:</strong> C#, Unity, Python, Brainflow, Figma,
            Canva, Adobe Suite. Most assets made from scratch by team members!
          </p>
        </div>
      </div>

      {/* Wounds adressed */}
      <div className="projects">
        <div className="">
          <h3>Wounds? aDRESSED</h3>
          <div className="wounds-image">
            <img
              src={WoundsAdressedPic1}
              alt="Wounds adressed in the bandage"
            />
            <img src={WoundsAdressedPic2} alt="robotic wearable" />
          </div>
          <p>
            Introducing Wounds? Addressed, a wearable that{" "}
            <stong>autonomously delivers medical dressing </stong>to the wound
            inside the bandage. Our robot detects the temperature of the skin
            surrounding the wound inside the bandage and reapplies dressing as
            it’s being used up in the healing process.
            <br />
            <br />
            <strong>Built with:</strong> Arduino Uno, BMP280 + AHT22 humidity,
            temperature, and pressure sensor, step motor, C++
          </p>
          <p>
            <a
              href="https://devpost.com/software/wounds-addressed"
              className="link-button"
            >
              Devpost Submission
            </a>
          </p>
        </div>
      </div>

      {/* dREMt */}
      <div className="projects">
        <div className="">
          <h3>dREMt</h3>

          <div className="single-video">
            <DremtDemo />
          </div>

          <p>
            From horoscopes to four-leaf clovers for good luck, we humans love
            to find a greater meaning behind our experiences. Just as nature
            holds secrets waiting to be unveiled, our dreams are a canvas of
            mysteries. What if, in every dream, there lies a message? Our
            project: dREMt helps decipher those messages!
            <br />
            <strong>
              TechNova 2023 Winners! (Best use of .tech domain category)
            </strong>
            <br />
            <br />
            <strong>Built with:</strong> React, HTML/CSS, Chat-gpt 3.5 turbo
            API, Figma. All assets drawn by team members!
          </p>
          <p>
            <a href="https://github.com/yaxinw04/dREMt" className="link-button">
              View Project Code
            </a>
            <a
              href="https://devpost.com/software/dremt"
              className="link-button"
            >
              Devpost Submission
            </a>
          </p>
        </div>
      </div>

      {/* runway ready? */}
      <div className="projects">
        <div className="">
          <h3>Runway Ready?!</h3>

          <div className="single-video">
            <RunwayReady />
          </div>

          <p>
            From fashion shows to strutting down downtown Waterloo, you are the
            main character… Unless… your walk is less of a confident strut but
            more a hobble . I’ve always wanted to know if my walking/running
            form is bad, and Runway Ready is here to tell me just that.
            <br />
            <br />
            <strong>Built with:</strong> Swift, JavaScript, HTML/CSS, Node.js,
            Handlebars.js, express.js
          </p>
          <p>
            <a
              href="https://github.com/yaxinw04/HTN2023"
              className="link-button"
            >
              View Project Code
            </a>
            <a
              href="https://devpost.com/software/runway-ready?ref_content=my-projects-tab&ref_feature=my_projects"
              className="link-button"
            >
              Devpost Submission
            </a>
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
            className="link-button"
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
            className="link-button"
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
            className="link-button"
          >
            View Project Code
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
