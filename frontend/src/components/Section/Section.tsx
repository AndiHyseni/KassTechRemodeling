import "./Section.css";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="section">
      <div className="sectionInner">
        <header className="sectionHeader">
          {eyebrow ? <div className="sectionEyebrow">{eyebrow}</div> : null}
          <h2 className="sectionTitle">{title}</h2>
          {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
