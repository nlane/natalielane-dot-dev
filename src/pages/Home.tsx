import React, { useEffect } from "react";

type Props = {
  setStars: (val: boolean) => void;
};

const Home = ({ setStars }: Props) => {
  useEffect(() => setStars(true), [setStars]);
  return (
    <div className="main">
      <div className="greetings">
        <p className="name">Hi, I'm Natalie.</p>
        <p className="name">I come in peace ✌️</p>
      </div>
      <img className="alien" src="alien.PNG" alt="alien in flying saucer" />
    </div>
  );
};

export default Home;
