import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import techEdu from "./blogPosts/TechEdu.md";
import imposterSyn from "./blogPosts/Imposter.md";
import paying from "./blogPosts/Paying.md";

type Props = {
  setStars: (val: boolean) => void;
};

const Posts = ({ setStars }: Props) => {
  useEffect(() => setStars(false), [setStars]);
  return (
    <div className="content posts">
      <Routes>
        <Route path="/" element={<PostsHome />} />
        <Route path="/techEducation" element={<BlogPost content={techEdu} />} />
        <Route
          path="/imposterSyndrome"
          element={<BlogPost content={imposterSyn} />}
        />
        <Route
          path="/payingForSoftware"
          element={<BlogPost content={paying} />}
        />
      </Routes>
    </div>
  );
};

const PostsHome = () => {
  return (
    <>
      <h2>Recent Posts</h2>
      <p>Wordle Solver</p>
      <h3>Archive</h3>
      <ul>
        <li>
          <Link to="/posts/techEducation">
            Technology and Education (from Little Theorems)
          </Link>
        </li>
        <li>
          <Link to="/posts/imposterSyndrome">
            Imposter Syndrome (from Little Theorems)
          </Link>
        </li>
        <li>
          <Link to="/posts/payingForSoftware">
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
