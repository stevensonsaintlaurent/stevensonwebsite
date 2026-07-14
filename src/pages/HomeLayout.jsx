import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const HomeLayout = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Header />
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 56px",
        }}
      >
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
