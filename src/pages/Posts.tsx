import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import techEdu from "./blogPosts/TechEdu.md";
import imposterSyn from "./blogPosts/Imposter.md";
import paying from "./blogPosts/Paying.md";
import wordle from "./blogPosts/WordleSolver.md";

type Props = {
  setStars: (val: boolean) => void;
};

const Posts = ({ setStars }: Props) => {
  useEffect(() => setStars(false), [setStars]);
  return (
    <div className="content posts">
      <Routes>
        <Route path="/" element={<PostsHome />} />
        <Route
          path="/tech-education"
          element={<BlogPost content={techEdu} />}
        />
        <Route
          path="/imposter-syndrome"
          element={<BlogPost content={imposterSyn} />}
        />
        <Route
          path="/paying-for-software"
          element={<BlogPost content={paying} />}
        />
        <Route path="/wordle-solver" element={<BlogPost content={wordle} />} />
      </Routes>
    </div>
  );
};

const PostsHome = () => {
  return (
    <>
      <h2>Recent Posts</h2>
      <Link to="/posts/wordle-solver">Wordle Solver</Link>
      <h3>Archive</h3>
      <ul>
        <li>
          <Link to="/posts/tech-education">
            Technology and Education (from Little Theorems)
          </Link>
        </li>
        <li>
          <Link to="/posts/imposter-syndrome">
            Imposter Syndrome (from Little Theorems)
          </Link>
        </li>
        <li>
          <Link to="/posts/paying-for-software">
            Paying for Software (from Little Theorems)
          </Link>
        </li>
      </ul>
    </>
  );
};

type BlogProps = {
  content: string;
};

const BlogPost = ({ content }: BlogProps) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [content]);

  return <Markdown children={markdown}></Markdown>;
};

export default Posts;
