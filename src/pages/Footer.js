import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Let's get in touch! </p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/yaxin-w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/yaxinw04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:y333wang@uwaterloo.ca" target="_blank">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
