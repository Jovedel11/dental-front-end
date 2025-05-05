import { Outlet } from "react-router-dom";
import NavBar from "../../public/NavBar/NavBar";
import Footer from "../../public/Footer/Footer";
import "./PublicLayout.css";

const Layout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
