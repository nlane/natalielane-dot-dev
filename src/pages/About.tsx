import React from "react";

type Props = {
  setStars: (val: boolean) => void;
};

const About = ({ setStars }: Props) => {
  setStars(false);
  return (
    <div className="content">
      <h2>A little about me...</h2>
      <p>
        I am a senior full stack engineer with over 5 years of professional
        experience. I love working on all parts of a project from fiddling with
        CSS to building out complete data models. Having always been pretty
        analytical, I am constantly aspiring to be more artistic. I have a love
        for dancing, drawing, and knitting all which keep me busy in my free
        time. You can see some of my art featured on this site 🎨 🛸
      </p>
      <div className="monster">
        <img src="monster.png" alt="cartoon monster" />
      </div>
    </div>
  );
};

export default About;
