import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Welcome to PixGenius
                  
                </h1>
                <p>Pix2Pix is a conditional GAN that uses images and labels to generate images. In this project we are converting the satellite image to google map images.</p>
                <a
                  href="https://github.com/anh-nn01/Satellite-Imagery-to-Map-Translation-using-Pix2Pix-GAN-framework?tab=readme-ov-file"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  PixGenius
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
