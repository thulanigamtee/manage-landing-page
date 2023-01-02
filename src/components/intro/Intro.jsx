import React from "react";
import "./Intro.scss";
import illustration from "/assets/images/illustration-intro.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__illustration">
        <img src={illustration} />
      </div>
      <div className="intro__description">
        <h1> Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button type="button">get started</button>
      </div>
    </div>
  );
};

export default Intro;
