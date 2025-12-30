import { NavLink, Link } from "react-router-dom";
import { BUSINESS } from "../../constants/business";
import logoUrl from "../../assets/kass-tech-logo.svg";
import "./NavBar.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function NavBar() {
  return (
    <header className="navBar">
      <div className="navInner">
        <Link
          className="navBrand"
          to="/"
          aria-label={`${BUSINESS.name} — Home`}
        >
          <img className="navLogo" src={logoUrl} alt="" />
          <div className="navBrandText">
            <div className="navBrandName">{BUSINESS.name}</div>
            <div className="navBrandMeta">{BUSINESS.serviceArea}</div>
          </div>
        </Link>

        <nav className="navLinks" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={"end" in item ? item.end : false}
              className={({ isActive }) =>
                `navLink ${isActive ? "isActive" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navCtas">
          <a className="navPhone" href={BUSINESS.phoneHref}>
            Call: {BUSINESS.phoneDisplay}
          </a>
          <Link className="navButton" to="/contact">
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
