import { Link } from "react-router-dom";
import hero from "../../images/solosax.jpg";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <article
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            marginTop: "20px",
          }}
        >
          <div className="hero-title">
            <h2>
              Hi,I'm <span>Stevenson</span> St Laurent
            </h2>
            <h4>Front End Developer</h4>
          </div>
          <img src={hero} alt="" className="hero-img" />
        </article>

        <div className="hero-container">
          <h2 className="hero-subtitle">
            Instructor | Band Leader | Front-End Developer
          </h2>
          <p className="hero-description">
            I’m an instructor at Freedom Dance Studio, specializing in Bachata,
            Kizomba, Konpa, and Salsa. As a passionate band leader and a
            front-end developer with more than 4 years of experience, I blend
            creativity, rhythm, and code to bring energy to every stage—whether
            it’s a dance floor, a concert hall, or the digital world.
          </p>
          <div className="hero-buttons">
            <Link to="contact" className="btn primary">
              Book a Lesson
            </Link>
            <Link to="portfolio" className="btn secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
