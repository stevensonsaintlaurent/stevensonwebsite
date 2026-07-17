import { Link } from "react-router-dom";

const skills = [
  {
    title: "Professional Dance Instructor",
    icon: "💃",
    description:
      "Teaching Bachata Sensual, Urban Kiz, and Konpa at Freedom Dance Studio with passion, technique, and years of experience.",
  },
  {
    title: "Performer",
    icon: "🌟",
    description:
      "Professional dancer performing at social events, festivals, workshops, and special showcases while inspiring students through movement.",
  },
  {
    title: "Band Leader",
    icon: "🎺",
    description:
      "Leading the Big Band at Freedom Dance Studio by organizing rehearsals, directing musicians, and creating unforgettable live performances.",
  },
  {
    title: "Frontend Developer",
    icon: "💻",
    description:
      "Building modern, responsive websites and web applications using React, JavaScript, HTML, CSS, and Vite.",
  },
  {
    title: "UI Design",
    icon: "🎨",
    description:
      "Designing clean, user-friendly interfaces focused on performance, accessibility, and excellent user experience.",
  },
  {
    title: "Leadership",
    icon: "🚀",
    description:
      "Combining leadership, creativity, and communication to help students, musicians, and development teams succeed.",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p className="subtitle">
          I combine creativity, technology, music, and dance to create memorable
          experiences both on stage and online.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Link
        style={{
          textTransform: "capitalize",
          textDecoration: "none",
          fontSize: "25px",
          backgroundColor: " #ffb703",
          color: "#ddd",
          padding: "10px",
          display: "block",
          textAlign: "center",
          justifyContent: "flex-end",
          margin: "40px 0",
          borderRadius: "5px",
        }}
        to="/about"
      >
        back to About
      </Link>
    </section>
  );
}

export default Skills;
