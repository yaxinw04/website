import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import myImage from "./tumblr_2aa04899864650d2ab3c08c29a811cf4_3930b9c4_540.gif";
import bannerimg1 from "./IMG_1100.jpg";
import bannerimg2 from "./IMG_8267.JPG";
import bannerimg3 from "./IMG_5301.JPG";
import bannerimg4 from "./IMG_1146.jpg";

function Home() {
  return (
    <div className="homepage">
      {/* Typing Effect */}
      <h2>
        Hell{" "}
        <ReactTyped
          strings={["o Friends!", "  o Recruiters!", "  o World!"]}
          typeSpeed={100}
          backSpeed={20}
          loop={false}
          cursorChar=">"
          showCursor={true}
        />
      </h2>

      <header>
        <h1 className="homeheader">My name is Yaxin, </h1>
      </header>

      <div className="container">
        <div className="text-block">
          <p>
            I am an engineering student at the University of Waterloo,
            passionate about biomedical engineering, coding, math, rock
            climbing, and photography! Here you can find my projects, skills,
            resume, and experiences.
          </p>
        </div>
        <div className="image-block">
          <img src={myImage} alt="Description" />
        </div>
      </div>
      <div class="image-banner">
        <img src={bannerimg1} alt="Image 1" />
        <img src={bannerimg2} alt="Image 2" />
        <img src={bannerimg3} alt="Image 3" />
        <img src={bannerimg4} alt="Image 4" />
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/rocks">Rocks!</Link>
        {/* ... other links ... */}
      </nav>

      <footer>
        <p>Thank you for visiting!</p>
        <p>Find me on: [Links to your social media]</p>
      </footer>
    </div>
  );
}

export default Home;
