import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Welcome to DeadlineWarrior Post Hub 😁😁😁
          </h1>
          <p className="hero-subtitle">Your favorite post website</p>
          <Link to="/posts" className="cta-button">
            Explore Posts
          </Link>
        </div>
      </section>

      <section className="features-section container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Diverse Content</h3>
            <p>
              Discover posts on various topics from technology to lifestyle.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Easy Search</h3>
            <p>
              Find exactly what you're looking for with our powerful search.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Join Discussions</h3>
            <p>Engage with our community through comments and reactions.</p>
          </div>
        </div>
      </section>

      <section className="recent-posts container">
        <h2>Recently Popular</h2>
        <div className="posts-preview">
          <div className="post-preview-card">
            <h3>
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderitt
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              culpa?
            </p>
            <Link to="/posts/1" className="read-more">
              Read More →
            </Link>
          </div>
          <div className="post-preview-card">
            <h3>qui est esse</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, soluta.
            </p>
            <Link to="/posts/2" className="read-more">
              Read More →
            </Link>
          </div>
        </div>
        <Link to="/posts" className="view-all">
          View All Posts
        </Link>
      </section>
    </div>
  );
};

export default Home;
