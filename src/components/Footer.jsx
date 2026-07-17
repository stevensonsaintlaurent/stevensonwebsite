import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

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

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="contact">Contact</Link>
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
