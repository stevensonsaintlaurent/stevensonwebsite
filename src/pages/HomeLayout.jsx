import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
