import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postDetail">
      <div style={styles.container}>
        <h2 style={styles.title}>{post.title}</h2>
        <p style={styles.body}>{post.body}</p>
      </div>
      <Link to={`/posts/${postId}/comments`}>See Comments</Link>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  body: {
    fontSize: "16px",
    color: "#333",
  },
};

export default PostDetail;
