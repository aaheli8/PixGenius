import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Convert</h2>
          <p>Upload a satellite image to convert into Google Maps(Earth) image</p>
        </div>
        <div className="row">
          
          <button className="btn btn-custom btn-lg page-scroll"><a
            href="https://gist.github.com/aaheli8/9eb78e1bcaf17eae519bde81cfc67cf4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            View Google Colab Notebook
          </a></button>
        </div>
        <img src="img/image.png" alt="Your Image Description" style={{ width: "500px", height: "300px", display: "block", margin: "0 auto", marginTop:"50px" }} />
      </div>
    </div>
  );
};
