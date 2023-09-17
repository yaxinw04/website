import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";

function Home() {
  return (
    <div className="homepage">
      {/* Typing Effect */}
      <h2>
        <div className="bigtitle">
          Hell{" "}
          <ReactTyped
            strings={["o Friends!", "  o Recruiters!", "  o World!"]}
            typeSpeed={100}
            backSpeed={20}
            loop={false}
            cursorChar=">"
            showCursor={true}
          />
        </div>
      </h2>

      <header>
        <h2 className="homeheader">My name is Yaxin, welcome to my website!</h2>
      </header>

      <div className="container">
        <div className="text-block">
          <p>
            I am an engineering student at the University of Waterloo,
            passionate about biomedical application in engineering, coding,
            math, rock climbing, and photography! I love learning new skills and
            trying new things
            <br /> <br />
            Here you can find my projects, skills, resume, interests, and
            experiences.
          </p>
        </div>
        <div className="image-block">
          <img
            className="studying-girlgif"
            src="https://media0.giphy.com/media/RemHbGtR3lNsqyERMS/giphy.gif?cid=ecf05e475dbymjy19075ex1qaop8kt6ra5rcgtx0v23mbubs&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            alt="books and homework"
          />
          <img
            className="booksgif"
            src="https://media3.giphy.com/media/aBeUrQTg0WUBao1efq/giphy.gif?cid=ecf05e47k2kbb2b5bcgf0u6sjllcxc98wm9ojn14cculff3o&ep=v1_gifs_related&rid=giphy.gif&ct=s"
            alt="books and homework"
          />
        </div>
      </div>

      <div className="recentexp">
        <h3>Recent Job Experience: Undergraduate Research Assistant </h3>
        <p>
          May 2023- August 2023
          <br /> Wireless Sensors and Devices Lab, University of Waterloo
          <br />
          <br />
          This past summer I got the amazing oppotunity to work with the
          Wireless Sensors and Devices lab and pioneer research on the use of
          Frequency-Modulated Continuous Wave (FMCW) radars to collect human
          vital signs. I learned a tremendous amount with the lab, including
          signal processing, PCB bring-up and validation, how to use a Raspberry
          Pi, and so much more! Check out my publication here!
        </p>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/rocks">Rocks!</Link>
        {/* ... other links ... */}
      </nav>
    </div>
  );
}

export default Home;
