import { BUSINESS } from "../../constants/business";
import { Section } from "../../components/Section/Section";
import "./About.css";

const values = [
  {
    title: "Craftsmanship",
    desc: "We sweat the details—clean lines, solid installs, and durable finishes.",
  },
  {
    title: "Communication",
    desc: "Clear updates and clear expectations from estimate to walkthrough.",
  },
  {
    title: "Respect",
    desc: "We keep the jobsite tidy and treat your home like it’s our own.",
  },
  {
    title: "Accountability",
    desc: "We stand behind our work and make things right.",
  },
] as const;

export function About() {
  return (
    <div className="about">
      <Section
        eyebrow="About"
        title={`About ${BUSINESS.name}`}
        subtitle="Use this page to tell your story—how you started, what you specialize in, and why homeowners trust you."
      >
        <div className="aboutGrid">
          <div className="aboutStory">
            <h3 className="aboutH3">Our story</h3>
            <p className="aboutP">
              Kass Tech Remodeling serves homeowners across{" "}
              {BUSINESS.serviceArea}. Replace this paragraph with your real
              background: years in business, specialties, and what makes your
              team different.
            </p>
            <p className="aboutP">
              Add licensing/insurance details here when ready, plus the towns
              you cover and your typical project types.
            </p>
          </div>

          <div className="aboutPanel">
            <div className="aboutPanelTitle">What homeowners can expect</div>
            <ul className="aboutList">
              <li>Detailed estimate and scope</li>
              <li>Clear schedule and milestones</li>
              <li>Professional finish work</li>
              <li>Final walkthrough and punch list</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="Built on the basics: quality, clarity, and respect"
        subtitle="A few simple principles that keep projects smooth."
      >
        <div className="aboutValues">
          {values.map((v) => (
            <div key={v.title} className="aboutValue">
              <div className="aboutValueTitle">{v.title}</div>
              <div className="aboutValueDesc">{v.desc}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
