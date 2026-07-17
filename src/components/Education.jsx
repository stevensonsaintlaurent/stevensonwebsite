import { Link } from "react-router-dom";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header">
          <h2>Education</h2>
          <p>
            My educational journey has taken me across three countries, allowing
            me to grow academically, personally, and professionally.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2016</div>
            <div className="timeline-content">
              <h3>High School Diploma</h3>
              <h4>Haiti</h4>
              <p>
                Graduated from high school in Haiti in 2016, building a strong
                academic foundation and developing a passion for continuous
                learning.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2016 - 2019</div>
            <div className="timeline-content">
              <h3>Economics</h3>
              <h4>Université Quisqueya - Haiti</h4>
              <p>
                Began studying Economics at Université Quisqueya. Due to the
                political instability in Haiti, I decided to continue my
                education abroad.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2019 - 2023</div>
            <div className="timeline-content">
              <h3>Civil Engineering</h3>
              <h4>Moscow Engineering University - Russia</h4>
              <p>
                Moved to Moscow, Russia, where I studied Civil Engineering.
                During this time, I discovered programming and began learning
                coding, which sparked my interest in software development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023 - Present</div>
            <div className="timeline-content">
              <h3>Front-End Development</h3>
              <h4>United States</h4>
              <p>
                After moving to the United States, I focused on becoming a
                Front-End Developer. I continue to improve my skills in React,
                JavaScript, HTML, CSS, and modern web technologies by building
                real-world applications and websites.
              </p>
            </div>
          </div>
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

export default Education;
