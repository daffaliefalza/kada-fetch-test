import React from "react";

const About = () => {
  const styles = {
    aboutPage: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem",
      marginBottom: "2rem",
      padding: "2rem",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      fontSize: "2.5rem",
      color: "#4a4e69",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
      animation: "bounce 2s infinite alternate",
      marginBottom: "2rem",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "3rem",
      padding: "1rem",
    },
    teamMember: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.3s ease",
      ":hover": {
        transform: "scale(1.1)",
        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
      },
    },
    teamPhoto: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid #fff",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      animation: "float 3s ease-in-out infinite",
      ":hover": {
        animation: "shake 0.5s ease-in-out infinite",
      },
    },
    keyframes: {
      "@keyframes float": {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
        "100%": { transform: "translateY(0px)" },
      },
      "@keyframes bounce": {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-20px)" },
      },
      "@keyframes shake": {
        "0%": { transform: "rotate(0deg)" },
        "25%": { transform: "rotate(5deg)" },
        "50%": { transform: "rotate(0deg)" },
        "75%": { transform: "rotate(-5deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
    },
    globalStyles: {
      body: {
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        backgroundColor: "#f0f2f5",
      },
    },
  };

  return (
    <div style={styles.globalStyles}>
      <style>
        {`
          ${Object.entries(styles.keyframes)
            .map(
              ([name, frames]) => `
            ${name} {
              ${Object.entries(frames)
                .map(
                  ([time, props]) => `
                ${time} {
                  ${Object.entries(props)
                    .map(
                      ([prop, value]) => `
                    ${prop}: ${value};
                  `
                    )
                    .join("")}
                }
              `
                )
                .join("")}
            }
          `
            )
            .join("")}
        `}
      </style>

      <div style={styles.aboutPage}>
        <h2 style={styles.title}>Meet our awesome team! ✨</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img src="/daffa-2.jpg" alt="Daffa" style={styles.teamPhoto} />
            <h3 style={{ color: "#4a4e69", marginTop: "1rem" }}>Daffa</h3>
          </div>
          <div style={styles.teamMember}>
            <img
              src="/bintang.jpg"
              alt="Bintang"
              style={{ ...styles.teamPhoto, animationDelay: "0.5s" }}
            />
            <h3 style={{ color: "#4a4e69", marginTop: "1rem" }}>Bintang</h3>
          </div>
          <div style={styles.teamMember}>
            <img
              src="/shiny.jpg"
              alt="Shiny"
              style={{ ...styles.teamPhoto, animationDelay: "1s" }}
            />
            <h3 style={{ color: "#4a4e69", marginTop: "1rem" }}>Shiny</h3>
          </div>
          <div style={styles.teamMember}>
            <img
              src="/aldi.jpg"
              alt="Aldiansyah"
              style={{ ...styles.teamPhoto, animationDelay: "1.5s" }}
            />
            <h3 style={{ color: "#4a4e69", marginTop: "1rem" }}>Aldiansyah</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
