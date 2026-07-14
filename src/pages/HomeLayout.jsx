import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const HomeLayout = () => {
  return (
    <>
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
    </>
  );
};

export default HomeLayout;
