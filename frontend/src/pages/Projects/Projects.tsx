import { Section } from "../../components/Section/Section";
import "./Projects.css";

const placeholders = [
  { title: "Kitchen Remodel", tags: ["Cabinets", "Tile", "Lighting"] },
  { title: "Bathroom Upgrade", tags: ["Shower", "Vanity", "Fixtures"] },
  { title: "Basement Finish", tags: ["Drywall", "Flooring", "Built-ins"] },
  { title: "Flooring Install", tags: ["LVP", "Transitions", "Trim"] },
  { title: "Paint Refresh", tags: ["Prep", "Walls", "Trim"] },
  { title: "General Renovation", tags: ["Repairs", "Updates", "Finish work"] },
] as const;

export function Projects() {
  return (
    <div className="projects">
      <Section
        eyebrow="Projects"
        title="Recent work (placeholders for now)"
        subtitle="When you send real project photos, we’ll swap these cards for a gallery with before/after and short descriptions."
      >
        <div className="projectsGrid">
          {placeholders.map((p, idx) => (
            <article key={p.title} className="projectsCard">
              <div
                className={`projectsMedia projectsMedia${(idx % 3) + 1}`}
                aria-hidden="true"
              />
              <div className="projectsBody">
                <div className="projectsTitle">{p.title}</div>
                <div className="projectsTags">
                  {p.tags.map((t) => (
                    <span key={t} className="projectsTag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
