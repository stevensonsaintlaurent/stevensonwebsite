import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <section id="header" className="header">
        <div className="container">
          <Navbar />
        </div>
      </section>
      <Hero />
    </>
  );
};

export default Header;
