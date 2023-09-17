import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p className="text">Check out my resume!</p>
      <div className="resume">
        <div className="pdf-container">
          <object
            data="/resumewebsite.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              problem... you can{" "}
              <a href="/resumewebsite.pdf">
                click here to download the PDF file.
              </a>
            </p>
          </object>
        </div>
        <div className="buttoncontain">
          <button
            onClick={() =>
              window.open(process.env.PUBLIC_URL + "/resumewebsite.pdf")
            }
          >
            Download My Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
