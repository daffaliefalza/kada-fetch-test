import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <div className="container">Loading comments...</div>;

  return (
    <div className="container" style={{ marginTop: "1.5rem" }}>
      <h3>Comments</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((comment) => (
          <li
            key={comment.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
          >
            <strong>{comment.name}</strong> <br />
            <small style={{ color: "#555" }}>{comment.email}</small>
            <p style={{ marginTop: "0.5rem" }}>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
