import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const linksFooter = [
  {
    id: 1,
    url: "/",
    text: "home",
  },

  {
    id: 2,
    url: "/about",
    text: "about",
  },

  {
    id: 3,
    url: "/skills",
    text: "sKills",
  },

  {
    id: 4,
    url: "/experience",
    text: "experience",
  },

  {
    id: 5,
    url: "/education",
    text: "education",
  },

  {
    id: 6,
    url: "/projects",
    text: "project",
  },

  {
    id: 7,
    url: "/contact",
    text: "contact",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Stevenson St Laurent</h2>
          <p>
            Front-End Developer, Professional Dancer, Dance Instructor, Band
            Leader, and lifelong learner passionate about building beautiful
            digital experiences.
          </p>
        </div>

        <div className="footer-links ">
          <h3>Quick Links</h3>

          {linksFooter.map((link) => {
            const { id, url, text } = link;

            return (
              <Link
                to={url}
                onClick={scroolUp}
                key={id}
                style={{
                  textTransform: "capitalize",
                }}
              >
                {text}
              </Link>
            );
          })}

          {/* <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="contact">Contact</Link> */}
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>📍 United States</p>
          <p>📧 stevensonstlaurent08@gmail.com</p>
          <p>📱 5613226913</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Stevenson St Laurent. All Rights Reserved.</p>

        <p>Designed & Developed with ❤️ using React & Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
