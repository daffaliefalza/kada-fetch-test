import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="about-page"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Meet our team member! :)
        </h2>
        <div className="team-grid container">
          <div className="team-member">
            <img src="/daffa-2.jpg" alt="Daffa" className="team-photo" />
          </div>
          <div className="team-member">
            <img src="/bintang.jpg" alt="Bintang" className="team-photo" />
          </div>
          <div className="team-member">
            <img src="/shiny.jpg" alt="Shiny" className="team-photo" />
          </div>
          <div className="team-member">
            <img src="aldi.jpg" alt="aldiansyah" className="team-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
