import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a className="logo">Stevenson</a>

      <div className="nav-menu" id="side-menu">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <!-- ============================= Close Button ========================== --> */}
        <div className="nav-close" id="nav-close">
          <a href="#">
            <i className="fa-sharp fa-solid fa-xmark" id="close-bar"></i>
          </a>
        </div>
      </div>
      {/* <!-- ============================= toggle Button ========================== --> */}
      <div className="nav-toggle">
        <i className="fa-solid fa-bars" id="open-bar"></i>
      </div>
    </nav>
  );
};

export default Navbar;
