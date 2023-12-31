import React from "react";
import Navbar from "./User/Navbar/Navbar";
import Footer from "./User/Footer/Footer";
import { Outlet} from "react-router";

const Layout = () => {
  // let location = useLocation();

  return (
    <>
      <section className="mainer">
        <main className="main">
          <Navbar />
          <Outlet />
          
            <Footer />
          
        </main>
      </section>
    </>
  );
};

export default Layout;
