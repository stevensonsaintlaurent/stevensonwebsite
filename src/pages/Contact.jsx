import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h2 className="sub-title">Contact Me</h2>
              <p>
                <i className="fa-solid fa-paper-plane"></i>
                stevensonstlaurent08@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-phone-flip"></i>5613226913
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/steevenson.saintlaurent?mibextid=LQQJ4d">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/stevensonsaintlaurent?igsh=amJoaWZ1bnJkbm8x&utm_source=qr">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/stevenson-st-laurent-665627282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <a
                href="images/Stevenson_StLaurent_Resu.pdf"
                download
                className="btn btn2"
              >
                Download CV
              </a>
            </div>

            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder=" Your Name"
                  required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
