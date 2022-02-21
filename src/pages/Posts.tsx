import React from "react";

type Props = {
  setStars: (val: boolean) => void;
};

const Posts = ({ setStars }: Props) => {
  setStars(false);
  return (
    <div className="content posts">
      <h2>Recent Posts</h2>
      <p>Wordle Solver</p>
      <h3>Archive</h3>
      <ul>
        <li>Technology and Education (from Little Theorems)</li>
        <li>Imposter Syndrome (from Little Theorems)</li>
        <li>Paying for Software (from Little Theorems)</li>
      </ul>
    </div>
  );
};

export default Posts;
