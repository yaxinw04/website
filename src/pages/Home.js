import React from "react";
import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import pic from "../images/IMG_5301.JPG";

function Home() {
  const jobs = [
    {
      title: "R&D Engineering Intern ",
      company: "Dana Inc",
      startDate: "Jan 2024",
      endDate: "April 2024 ",
      description:
        "Contributed to the development of many car and power electronics cooler prototypes including rapid prototyping, testing, and documenting the build process. Helped with other R&D engineering tasks including designing supports in Creo, spearheading various tests with Arduino and C++, processing tensile test data using Python, and brazing, electroplating, and soldering work.",
    },

    {
      title: "Undergraduate Research Assistant ",
      company: "Wireless Sensors and Devices lab @UWaterloo ",
      startDate: "May 2023",
      endDate: "Dec 2023",
      description:
        "Pioneered research on the use of Frequency-Modulated Continuous Wave (FMCW) radars to collect human vital signs, learning a tremendous amount with the lab, including signal processing on MATLAB and Python, PCB bring-up and validation, how to use a Raspberry Pi, and so much more, while contributing to 2 publications (and counting), one on IEEE and the other on Nature (both under review).",
    },
    {
      title: "Brain-Computer Interface Gaming Co-Team Lead ",
      company: "WATOLINK Neurotech Design Team ",
      startDate: "Sept 2023",
      endDate: "Ongoing ",
      description:
        "After contibuting as a biosignal researcher with the WATOLINK team for our (winning!) submission to the NeuroTechX-2022 competition, I transitioned to the BCI gaming team, where we are in the process of developing a Wild West-themed game controlled by BCI, utilizing Unity, Python, and C#. In late May, I stepped into a leadership position and am now responsible for defining project pipelines, allocating tasks, and overseeing the team's progress.",
    },

    {
      title: "Director of Advocacy ",
      company: "Women in Engineering Student Committee ",
      startDate: "Sept 2023",
      endDate: "April 2023 ",
      description:
        "Collaborated with a team to organize events, workshops, and initiatives aimed at providing a platform for women to share their challenges and connect with other women in engineering.",
    },

    {
      title: "Biochemistry Researcher ",
      company: "University of Calgary, department of Biology ",
      startDate: "Feb 2020",
      endDate: "Aug 2022 ",
      description:
        "Collaborated with a senior professor on investigating COVID-19 surface protein research, utilizing biochemistry databases and Excel for data calculations and pivot table analysis",
    },
  ];

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
            I am an enthusiastic engineering student from the University of
            Waterloo. My journey in engineering isn't just about circuit boards
            and codes; it's about weaving the intersection of biomedical
            applications, mathematics, and technology. In my free time, I love
            hiking, music, and rock climbing. I've also got a knack for freezing
            time with photography (not a superpower, just a camera!).
            <br /> <br />
            Here you can find my projects, skills, interests, and experiences.
            Check out my project portfolio, resume, and some of my favorite
            places displayed via photos!
            <br /> <br />
            Enjoy!
          </p>
        </div>
        {/* <img src={pic} className="image-block" alt="Description" /> */}
      </div>

      <div>
        <h2 className="homeheader">My Recent Experiences</h2>
      </div>

      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className="job">
            <span className="date">
              {job.startDate} - {job.endDate}
            </span>
            <span className="job-title">{job.title}</span>
            <span className="company">{job.company}</span>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/unfinished">Unfinished</Link>

        {/* ... other links ... */}
      </nav>
    </div>
  );
}

export default Home;
