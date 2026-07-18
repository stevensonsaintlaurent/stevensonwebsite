import performance1 from "../../images/developer.jpg";
import performance2 from "../../images/developer.jpg";
import performance3 from "../../images/developer.jpg";
import performance4 from "../../images/developer.jpg";

const performances = [
  {
    image: performance1,
    title: "Bachata Sensual Show",
    location: "Las Vegas Dance Festival",
    description:
      "Performed an energetic Bachata Sensual choreography that combined musicality, creativity, and partner connection.",
  },
  {
    image: performance2,
    title: "Urban Kiz Performance",
    location: "Freedom Dance Studio",
    description:
      "Delivered a modern Urban Kiz performance focused on smooth movements, precision, and storytelling.",
  },
  {
    image: performance3,
    title: "Konpa Showcase",
    location: "Caribbean Cultural Event",
    description:
      "Performed an exciting Konpa routine celebrating Haitian culture through rhythm and social dancing.",
  },
  {
    image: performance4,
    title: "Latin Dance Night",
    location: "Community Dance Event",
    description:
      "Performed a combination of Bachata and Latin social dances while encouraging audience participation.",
  },
];

function DancePerformances() {
  return (
    <section className="performance" id="performance">
      <div className="performance-header">
        <h2>Dance Performances</h2>

        <p>
          I enjoy sharing my passion for dance by performing at festivals,
          social events, showcases, and community celebrations. Every
          performance is an opportunity to inspire others through movement,
          creativity, and music.
        </p>
      </div>

      <div className="performance-grid">
        {performances.map((show, index) => (
          <div className="performance-card" key={index}>
            <img src={show.image} alt={show.title} />

            <div className="performance-content">
              <h3>{show.title}</h3>

              <h4>{show.location}</h4>

              <p>{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DancePerformances;
