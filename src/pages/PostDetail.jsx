// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router";

// const PostDetail = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((res) => res.json())
//       .then((data) => setPost(data));
//   }, []);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="postDetail">
//       <div style={styles.container}>
//         <h2 style={styles.title}>{post.title}</h2>
//         <p style={styles.body}>{post.body}</p>
//       </div>
//       <Link to={`/posts/${postId}/comments`}>See Comments</Link>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "20px",
//     margin: "20px auto",
//     maxWidth: "600px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "10px",
//   },
//   body: {
//     fontSize: "16px",
//     color: "#333",
//   },
// };

// export default PostDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  const loadComments = () => {
    if (comments.length > 0) {
      setShowComments(!showComments);
      return;
    }

    setLoadingComments(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setShowComments(true);
      })
      .finally(() => setLoadingComments(false));
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postDetail">
      <div style={styles.container}>
        <h2 style={styles.title}>{post.title}</h2>
        <p style={styles.body}>{post.body}</p>

        <button onClick={loadComments} style={styles.commentButton}>
          {loadingComments
            ? "Loading..."
            : showComments
            ? "Hide Comments"
            : "Load Comments"}
        </button>

        {showComments && (
          <div style={styles.commentsContainer}>
            <h3 style={styles.commentsTitle}>Comments ({comments.length})</h3>
            {comments.map((comment) => (
              <div key={comment.id} style={styles.comment}>
                <h4 style={styles.commentName}>{comment.name}</h4>
                <p style={styles.commentEmail}>{comment.email}</p>
                <p style={styles.commentBody}>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
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
    color: "#2c3e50",
  },
  body: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  commentButton: {
    padding: "10px 15px",
    backgroundColor: "#0077cc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  },
  commentsContainer: {
    marginTop: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },
  commentsTitle: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#2c3e50",
  },
  comment: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  commentName: {
    fontSize: "16px",
    marginBottom: "5px",
    color: "#0077cc",
  },
  commentEmail: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  commentBody: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.5",
  },
};

export default PostDetail;
