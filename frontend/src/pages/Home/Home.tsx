import { Link } from "react-router-dom";
import { BUSINESS } from "../../constants/business";
import { Section } from "../../components/Section/Section";
import "./Home.css";

const services = [
  {
    title: "Kitchen Remodeling",
    desc: "Cabinets, countertops, tile, lighting, and layout upgrades.",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Showers, vanities, tile work, ventilation, and modern finishes.",
  },
  {
    title: "Basement Finishing",
    desc: "Comfortable living space, drywall, flooring, and built-ins.",
  },
  {
    title: "Flooring & Tile",
    desc: "Hardwood, LVP, ceramic, porcelain, and clean transitions.",
  },
  {
    title: "Painting & Drywall",
    desc: "Smooth prep, crisp lines, and durable paint systems.",
  },
  {
    title: "General Renovations",
    desc: "From punch lists to full room refreshes—done right.",
  },
] as const;

const steps = [
  {
    title: "Free Estimate",
    desc: "Tell us what you want—we’ll scope the work and share a clear quote.",
  },
  {
    title: "Plan & Schedule",
    desc: "We confirm materials, timeline, and the game plan before we start.",
  },
  {
    title: "Build & Communicate",
    desc: "Clean jobsite, steady progress, and updates you can trust.",
  },
  {
    title: "Final Walkthrough",
    desc: "We review details together and wrap with a satisfied finish.",
  },
] as const;

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes—add your exact process and service area details later.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Add your license/insurance info here when ready.",
  },
  {
    q: "How long does a remodel take?",
    a: "It depends on scope and materials—share typical timelines later.",
  },
] as const;

export function Home() {
  return (
    <div className="home">
      <section className="homeHero">
        <div className="homeHeroInner">
          <div className="homeHeroBadge">Serving {BUSINESS.serviceArea}</div>
          <h1 className="homeHeroTitle">{BUSINESS.name}</h1>
          <p className="homeHeroSubtitle">
            {BUSINESS.tagline} Kitchens, bathrooms, basements, and full-home
            updates—built with care, clean lines, and durable finishes.
          </p>

          <div className="homeHeroCtas">
            <Link className="homeBtnPrimary" to="/contact">
              Get a Free Estimate
            </Link>
            <a className="homeBtnGhost" href={BUSINESS.phoneHref}>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="homeTrustRow" aria-label="Trust highlights">
            <div className="homeTrustItem">
              <span className="homeTrustDot" aria-hidden="true" />
              Clear pricing
            </div>
            <div className="homeTrustItem">
              <span className="homeTrustDot" aria-hidden="true" />
              Clean jobsite
            </div>
            <div className="homeTrustItem">
              <span className="homeTrustDot" aria-hidden="true" />
              Quality finishes
            </div>
            <div className="homeTrustItem">
              <span className="homeTrustDot" aria-hidden="true" />
              On-time updates
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What we do"
        title="Remodeling services for homes across New Jersey"
        subtitle="Pick a room or a full renovation—either way, we bring solid planning, clean craftsmanship, and a finish you’ll be proud of."
      >
        <div className="homeGrid">
          {services.map((s) => (
            <div key={s.title} className="homeCard">
              <div className="homeCardTitle">{s.title}</div>
              <div className="homeCardDesc">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="homeSectionCtaRow">
          <Link className="homeTextLink" to="/services">
            View all services →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="How it works"
        title="A simple process that keeps projects smooth"
        subtitle="No chaos, no guessing. We align on scope, timeline, and finish details—then we execute with consistent communication."
      >
        <div className="homeSteps">
          {steps.map((s, idx) => (
            <div key={s.title} className="homeStep">
              <div className="homeStepNum">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="homeStepBody">
                <div className="homeStepTitle">{s.title}</div>
                <div className="homeStepDesc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured"
        title="Projects (add photos when ready)"
        subtitle="When you’re ready, we’ll replace these placeholders with real before/after photos and short descriptions."
      >
        <div className="homeProjects">
          {[
            "Modern Kitchen Refresh",
            "Clean Bathroom Upgrade",
            "Finished Basement Space",
          ].map((title) => (
            <div key={title} className="homeProjectCard">
              <div className="homeProjectMedia" aria-hidden="true" />
              <div className="homeProjectTitle">{title}</div>
              <div className="homeProjectMeta">
                Materials • Timeline • Scope
              </div>
            </div>
          ))}
        </div>
        <div className="homeSectionCtaRow">
          <Link className="homeTextLink" to="/projects">
            See projects →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions homeowners ask"
        subtitle="Replace these with your real answers later (we left helpful placeholders)."
      >
        <div className="homeFaq">
          {faqs.map((f) => (
            <details key={f.q} className="homeFaqItem">
              <summary className="homeFaqQ">{f.q}</summary>
              <div className="homeFaqA">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>

      <section className="homeFinalCta">
        <div className="homeFinalInner">
          <div className="homeFinalTitle">Ready to remodel?</div>
          <div className="homeFinalText">
            Tell us what you’re planning and we’ll help you map the next steps.
            You can add your exact phone number and address later.
          </div>
          <div className="homeFinalButtons">
            <Link className="homeBtnPrimary" to="/contact">
              Request an Estimate
            </Link>
            <a className="homeBtnGhost" href={BUSINESS.phoneHref}>
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
