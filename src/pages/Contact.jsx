import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Reach out with questions, feedback, or
            collaboration ideas.
          </p>
        </div>
      </section>

      <div className="container contact-container">
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Regarding your recent post..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Other Ways to Connect</h2>
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <p>contact@posthub.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🏢</div>
            <h3>Visit Us</h3>
            <p>
              123 Blog Street
              <br />
              Digital City, DY 10101
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
