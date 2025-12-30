import { Link } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import "./Services.css";

const categories = [
  {
    title: "Kitchens",
    items: [
      "Cabinets & hardware",
      "Countertops",
      "Backsplash tile",
      "Lighting",
      "Layout updates",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Showers & tubs",
      "Vanities",
      "Tile installation",
      "Plumbing fixtures",
      "Ventilation",
    ],
  },
  {
    title: "Basements",
    items: [
      "Framing & drywall",
      "Flooring",
      "Ceilings",
      "Built-ins",
      "Lighting & electrical",
    ],
  },
  {
    title: "Finishes",
    items: [
      "Painting",
      "Trim & doors",
      "Flooring installation",
      "Repairs",
      "Punch list work",
    ],
  },
] as const;

export function Services() {
  return (
    <div className="services">
      <Section
        eyebrow="Services"
        title="Remodeling services tailored to your home"
        subtitle="We can handle a focused room update or a larger renovation. Replace any items below with your exact offerings later."
      >
        <div className="servicesGrid">
          {categories.map((c) => (
            <div key={c.title} className="servicesCard">
              <div className="servicesCardTitle">{c.title}</div>
              <ul className="servicesList">
                {c.items.map((it) => (
                  <li key={it} className="servicesItem">
                    <span className="servicesBullet" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="servicesCta">
          <div className="servicesCtaBox">
            <div className="servicesCtaTitle">Not sure what you need?</div>
            <div className="servicesCtaText">
              Send photos and a short description—we’ll recommend a path
              forward.
            </div>
            <Link className="servicesCtaBtn" to="/contact">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
