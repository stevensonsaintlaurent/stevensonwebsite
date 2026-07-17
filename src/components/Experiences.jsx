import { Link } from "react-router-dom";

function Experience() {
  const experiences = [
    {
      title: "Professional Dance Instructor",
      company: "Freedom Dance Studio",
      period: "Present",
      description:
        "Teaching students of all levels while creating a fun, welcoming, and professional learning environment.",
      achievements: [
        "Teach Bachata Sensual",
        "Teach Urban Kiz",
        "Teach Konpa",
        "Develop personalized training programs",
        "Lead workshops, socials, and special events",
      ],
    },
    {
      title: "Big Band Leader",
      company: "Freedom Dance Studio",
      period: "Present",
      description:
        "Leading the studio's Big Band by mentoring dancers, organizing performances, and maintaining high artistic standards.",
      achievements: [
        "Lead rehearsals and team training",
        "Prepare choreography for performances",
        "Coordinate dancers during events",
        "Build confidence and teamwork",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Freelance",
      period: "Present",
      description:
        "Designing and developing responsive websites and web applications using modern JavaScript technologies.",
      achievements: [
        "Develop React applications with Vite",
        "Create responsive UI/UX",
        "Build reusable components",
        "Work with JavaScript, HTML, and CSS",
        "Optimize performance and accessibility",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2>Experience</h2>

        <p className="experience-intro">
          My career combines creativity, leadership, and technology. From
          inspiring dancers in the studio to building modern web applications, I
          enjoy helping people grow while creating meaningful experiences.
        </p>

        <div className="experience-grid">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <span className="experience-period">{item.period}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <ul>
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Link
        style={{
          textTransform: "capitalize",
          textDecoration: "none",
          fontSize: "25px",
          backgroundColor: "  #1e293b",
          color: "#38bdf8",
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

export default Experience;
