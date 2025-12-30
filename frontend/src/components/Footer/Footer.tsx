import { Link } from "react-router-dom";
import { BUSINESS } from "../../constants/business";
import "./Footer.css";
import logoUrl from "../../assets/kass-tech-logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerCol">
          <Link
            className="footerLogoLink"
            to="/"
            aria-label={`${BUSINESS.name} — Home`}
          >
            <img className="footerLogo" src={logoUrl} alt={BUSINESS.name} />
          </Link>
          <div className="footerText">
            Quality remodeling in {BUSINESS.serviceArea}. Kitchens, bathrooms,
            basements, flooring, painting, and more.
          </div>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Company</div>
          <Link className="footerLink" to="/about">
            About
          </Link>
          <Link className="footerLink" to="/projects">
            Projects
          </Link>
          <Link className="footerLink" to="/services">
            Services
          </Link>
          <Link className="footerLink" to="/contact">
            Contact
          </Link>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Contact</div>
          <a className="footerLink" href={BUSINESS.phoneHref}>
            {BUSINESS.phoneDisplay}
          </a>
          <a className="footerLink" href={BUSINESS.emailHref}>
            {BUSINESS.emailDisplay}
          </a>
          <div className="footerText">
            {BUSINESS.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        <div className="footerCol">
          <div className="footerHeading">Hours</div>
          <div className="footerText">
            {BUSINESS.hours.map((h) => (
              <div key={h.label} className="footerRow">
                <span className="footerMuted">{h.label}</span>
                <span>{h.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div>
          © {year} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
