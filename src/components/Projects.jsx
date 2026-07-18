import project1 from "../../images/developer.jpg";
import project2 from "../../images/developer.jpg";
import project3 from "../../images/developer.jpg";
import project4 from "../../images/developer.jpg";

const projects = [
  {
    title: "Freedom Dance Studio",
    image: project1,
    description:
      "A modern and responsive website built for Freedom Dance Studio featuring dance classes, instructors, schedules, pricing, and online booking.",
    tech: "React • Vite • CSS",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A professional portfolio showcasing my experience as a Front-End Developer, dance instructor, musician, and creative professional.",
    tech: "React • JavaScript • CSS",
    link: "#",
  },
  {
    title: "Restaurant Website",
    image: project3,
    description:
      "A clean restaurant website with menu pages, gallery, contact form, and responsive layout for desktop and mobile devices.",
    tech: "HTML • CSS • JavaScript",
    link: "#",
  },
  {
    title: "Business Landing Page",
    image: project4,
    description:
      "A fast and responsive landing page designed to help businesses present their services and generate customer leads.",
    tech: "React • Vite • Responsive CSS",
    link: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
        <p>
          Here are some of the websites and applications I've designed and
          developed as a Front-End Developer.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <a href={project.link}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
