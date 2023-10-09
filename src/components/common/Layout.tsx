import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Side from "../static/Side";

const Layout = () => {
  return (
    <div>
      <Side />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
