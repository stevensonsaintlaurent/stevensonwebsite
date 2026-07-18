import saxophone from "../../images/developer.jpg";
import bigband from "../../images/developer.jpg";
import rehearsal from "../../images/developer.jpg";
import concert from "../../images/developer.jpg";

const skills = [
  {
    image: saxophone,
    title: "Professional Saxophonist",
    description:
      "I perform on saxophone in jazz, big band, Latin, and contemporary music ensembles, delivering expressive solos and supporting the full ensemble.",
  },
  {
    image: bigband,
    title: "Big Band Leader",
    description:
      "I direct rehearsals, lead musicians, organize performances, and help create exciting musical experiences for audiences.",
  },
  {
    image: rehearsal,
    title: "Music Director",
    description:
      "I prepare rehearsals, coach musicians, refine arrangements, and ensure every performance meets a high professional standard.",
  },
  {
    image: concert,
    title: "Live Performer",
    description:
      "I perform at concerts, festivals, private events, and community celebrations, bringing energy and passion to every stage.",
  },
];

function BandLeader() {
  return (
    <section className="band" id="band">
      <div className="band-header">
        <h2>Band Leader & Saxophonist</h2>

        <p>
          Music has always been one of my greatest passions. As a band leader
          and saxophonist, I enjoy bringing musicians together, directing
          performances, and creating unforgettable live music experiences.
        </p>
      </div>

      <div className="band-grid">
        {skills.map((item, index) => (
          <div className="band-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="band-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="band-stats">
        <div className="stat">
          <h3>10+</h3>
          <p>Years Performing</p>
        </div>

        <div className="stat">
          <h3>100+</h3>
          <p>Live Performances</p>
        </div>

        <div className="stat">
          <h3>50+</h3>
          <p>Musicians Led</p>
        </div>

        <div className="stat">
          <h3>Jazz • Latin • Big Band</h3>
          <p>Musical Styles</p>
        </div>
      </div>
    </section>
  );
}

export default BandLeader;
