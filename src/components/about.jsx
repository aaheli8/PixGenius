import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <p>In this project, we aim to develop a Pix2Pix Generative Adversarial Network (GAN) for image-to-image translation tasks. Specifically, we will focus on translating satellite images to Google Map Earth images. This project will involve loading and preparing the dataset, developing and training the Pix2Pix model, and finally using the trained model to perform image translation tasks.
                <br>
                </br>
                
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
