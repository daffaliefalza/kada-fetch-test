import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="container posts-container">
      <h1 className="posts-title">Posts</h1>

      {/* ini Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {currentPosts.length > 0 ? (
        <>
          {currentPosts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id} className="post-link">
              {`${post.id}. ${post.title}`}
            </Link>
          ))}
        </>
      ) : (
        <div className="no-results">No posts found matching your search.</div>
      )}

      {/* ini pagination ya */}
      {filteredPosts.length > postsPerPage && (
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(filteredPosts.length / postsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default PostList;
