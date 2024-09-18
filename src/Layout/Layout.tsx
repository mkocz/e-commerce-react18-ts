import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const Layout = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-between">
      <Menu />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};
