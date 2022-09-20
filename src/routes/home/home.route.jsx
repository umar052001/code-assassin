import React, { Fragment } from "react";
import "./home.styles.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <Fragment>
      <div className="intro">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "Hi! 👋 My name is Muhammad Umar.",
            1000,
            "I'm a Software Engineer.👨‍💻",
            1000,
            "I'm a Freelancer.",
            1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2em", color: "whitesmoke" }}
          wrapper="h1" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      </div>
      <img
        src="assets\images\about\codeassassin.png"
        alt="img"
        className="ninja-image"
      />
    </Fragment>
  );
};

export default Home;
