import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[#FFFFF3] text-black">
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;