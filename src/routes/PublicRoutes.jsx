import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PubicLayout from "../components/common/Layout/PublicLayout";
import Home from "../pages/public/HomePage/Home";
import About from "../pages/public/AboutUsPage/About";
import Contact from "../pages/public/ContactPage/Contact";
import Scroll from "../components/common/SmoothScroll";
import Login from "../pages/public/Login/Login";
import Signup from "../pages/public/Sigup/Signup";
import PageWrapper from "../components/common/PageWrapper";
import AdminLogin from "../pages/public/Login/AdminLogin";
import StaffLogin from "../pages/public/Login/StaffLogin";

const PublicRoutes = () => {
  return (
    <PageWrapper>
      <Scroll>
        <Routes>
          <Route element={<PubicLayout />}>
            <Route index element={<Home />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Scroll>
    </PageWrapper>
  );
};

export default PublicRoutes;
