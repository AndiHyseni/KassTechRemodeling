import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import "./Layout.css";

export function Layout() {
  return (
    <div className="layoutShell">
      <a className="layoutSkipLink" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main" className="layoutMain" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
