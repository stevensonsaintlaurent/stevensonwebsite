import React from "react";

const Services = () => {
  return (
    <>
      <div id="services">
        <div className="container-services">
          <h2 className="sub-title">My Services</h2>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h3>Front End Developer</h3>

              <p>
                Goal-driven Web Developer with a strong dedication to
                collaborative work and a problem-solving mind. specialize in
                using various web design tools to create tailored,
                client-focused websites and designs. With over two years of
                experience, prioritize delivering exceptional user experience,
                usability and speed.
              </p>
              <a href="#">Learn more</a>
            </div>

            <div>
              <i className="fa-regular fa-saxophone"></i>
              <h3>Band Leader/Saxophonist</h3>
              <p>
                Hardworking performance leader skilled at selecting and
                arranging musical pieces for regular, holiday and special event
                performances. Adept at working with individual performers to
                optimize sound and abilities. Specializing in Jazz music.
                Directed groups at rehearsals and live or recorded performances
                to achieve desired effects such as tonal and harmonic balance
                dynamics, rhythm, and tempo.
              </p>
              <a href="#">Learn more</a>
            </div>

            <div>
              <i className="fa-thin fa-music-slash"></i>
              <h3>Professional Dancer</h3>
              <p>
                Demonstrates strong analytical, communication, and teamwork
                skills, with proven ability to quickly adapt to new
                environments. Eager to contribute to team success and further
                develop professional skills. Brings positive attitude and
                commitment to continuous learning and growth. Taught dance
                classes to children and adults of different skill levels.
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
