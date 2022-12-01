import React from "react";
import "./About.scss";
import aboutContent from "./AboutContent";

const About = () => {
  return (
    <div className="about">
      <div className="about__main">
        <h2>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="about__content">
        {aboutContent.map(({ id, heading, description }) => {
          return (
            <>
              <div className="about__content__heading">
                <span>{id}</span>
                <h3>{heading}</h3>
              </div>
              <div className="about__content__description">
                <p>{description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default About;
