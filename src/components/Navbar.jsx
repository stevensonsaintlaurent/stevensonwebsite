import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Stevenson
      </Link>

      <div className="nav-menu" id="side-menu">
        <NavbarLinks />
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
