import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 className="sub-title">My Work</h2>
          <div className="work-list">
            <div className="work">
              <img src="images/developer.jpg" alt="" />
              <div className="layer">
                <h4>Front End Developer</h4>
                <p>Tap here and see all my projects .</p>
                <a href="https://github.com/stevensonsaintlaurent">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src="images/phone2.JPG" alt="" />
              <div className="layer">
                <h4>Band Leader/Saxophonist</h4>
                <p>
                  Click here and see all my activities as Saxophonist and as
                  Band leader.
                </p>
                <a href="#leader.html">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src="images/program-icon1.jpg" alt="" />
              <div className="layer">
                <h4>Professional Dancer</h4>
                <p>Click here and see my work as Dancer</p>
                <a href="#dancer.html">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
