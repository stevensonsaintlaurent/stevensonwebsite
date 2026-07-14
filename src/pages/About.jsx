import React from "react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container-about">
          <div className="row">
            <div className="about-col-1">
              <img src="images/orquestre.JPG" alt="" />
            </div>
            <div className="about-col-2">
              <h2 className="sub-title">About Me</h2>
              <p>
                Originally from Haiti, I moved to Russia in 2018 to study Civil
                Engineering, where I also taught music and dance. In 2023, I
                relocated to Las Vegas, where I opened a dance studio and began
                focusing more on coding, transitioning into software development
                as a Front-End Developer. I am a goal-oriented Web Developer
                committed to collaboration and solutions-oriented
                problem-solving. I utilize various web design tools to create
                custom, user-focused websites, ensuring high standards of user
                experience, usability, and speed. With over two years of
                experience, I strive to deliver exceptional solutions for
                multiple users.
              </p>
              <div className="tab-titles">
                <p className="tab-link active-link" onclick="opentab('skills')">
                  Skills
                </p>
                <p className="tab-link" onclick="opentab('experience')">
                  Experience
                </p>
                <p className="tab-link" onclick="opentab('education')">
                  Education
                </p>
              </div>
              <div className="tab-content active-tab" id="skills">
                <ul>
                  <li>
                    <span>Front End Developer</span>
                    <br />
                    Proficiency in HTML, CSS, and JavaScript. Logical and
                    results-driven Web Developer dedicated to building and
                    optimizing user-focused websites for customers with various
                    business objectives. Judicious and creative when crafting
                    effective websites, apps and platforms to propel competitive
                    advantage and revenue growth. Technically proficient and
                    analytical problem solver with calm and focused demeanor.
                  </li>
                  <li>
                    <span>Band Leader (saxophonist)</span>
                    <br />
                  </li>
                  Assessed musicians and assigned instruments and parts for
                  songs and concerts. Knowledgeable Music Director with 9 years
                  of experience and exceptional leadership, planning and
                  relationship-building skills. Detail-oriented and hardworking
                  with a successful background in jazz. Looking for a new role
                  with long-term potential.
                  <li>
                    <span>Professional Dancer</span>
                    <br />
                    Developed professional relationships with different dance
                    professionals, choreographers, and performers by actively
                    listening and effectively communicating.
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="experience">
                <ul>
                  <li>
                    <span>May 2023</span>
                    <br />
                    Write clean, efficient, and well-structured code using HTML,
                    CSS, and JavaScript
                  </li>
                  <li>
                    <span>May 2023</span>
                    <br />
                    Document technical specifications, project details, and
                    development processes
                  </li>
                  <li>
                    <span>May 2023</span>
                    <br />
                    Assist in website maintenance, updates, and enhancements
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="education">
                <ul>
                  <li>
                    <span>Certificat</span>
                    <br />
                    Proficiency in HTML, CSS,Typescript React.js Data
                    structure/algorhyms and JavaScript
                  </li>
                  <li>
                    <span>Moscow University of Civil Engineering</span>
                    <br />
                    Collaborate with the development team to understand project
                    requirements and design web solutions
                  </li>
                  <li>
                    <span> Band Leader</span>
                    <br />
                    Excellent communication and teamwork abilities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
