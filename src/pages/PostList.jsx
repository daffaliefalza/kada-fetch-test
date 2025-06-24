import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container posts-container">
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          {`${post.id}. ${post.title}`}
        </Link>
      ))}
    </div>
  );
};

export default PostList;
