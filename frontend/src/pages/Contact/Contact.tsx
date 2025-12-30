import { useMemo, useState } from "react";
import { BUSINESS } from "../../constants/business";
import { Section } from "../../components/Section/Section";
import "./Contact.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Kitchen remodeling",
  message: "",
};

const serviceOptions = [
  "Kitchen remodeling",
  "Bathroom remodeling",
  "Basement finishing",
  "Flooring & tile",
  "Painting & drywall",
  "General renovation",
  "Other",
] as const;

export function Contact() {
  const [state, setState] = useState<FormState>(defaultState);

  const mailtoHref = useMemo(() => {
    const subject = `Estimate request: ${state.service}`;
    const body = [
      `Name: ${state.name}`,
      `Phone: ${state.phone}`,
      `Email: ${state.email}`,
      `Service: ${state.service}`,
      "",
      state.message,
    ].join("\n");

    return `${BUSINESS.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [state]);

  return (
    <div className="contact">
      <Section
        eyebrow="Contact"
        title="Request a free estimate"
        subtitle="Fill out the form and we’ll reply as soon as possible. (This form opens your email app for now—no backend needed yet.)"
      >
        <div className="contactGrid">
          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
            <div className="contactRow">
              <label className="contactLabel">
                Full name
                <input
                  className="contactInput"
                  value={state.name}
                  onChange={(e) =>
                    setState((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="contactLabel">
                Phone
                <input
                  className="contactInput"
                  value={state.phone}
                  onChange={(e) =>
                    setState((s) => ({ ...s, phone: e.target.value }))
                  }
                  placeholder="(###) ###-####"
                  autoComplete="tel"
                />
              </label>
            </div>

            <div className="contactRow">
              <label className="contactLabel">
                Email
                <input
                  className="contactInput"
                  value={state.email}
                  onChange={(e) =>
                    setState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="contactLabel">
                Service
                <select
                  className="contactInput"
                  value={state.service}
                  onChange={(e) =>
                    setState((s) => ({ ...s, service: e.target.value }))
                  }
                >
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="contactLabel">
              Project details
              <textarea
                className="contactTextarea"
                value={state.message}
                onChange={(e) =>
                  setState((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="What are you planning? Timeline, materials, measurements, photos link, etc."
                rows={6}
                required
              />
            </label>

            <div className="contactActions">
              <a className="contactBtn" href={mailtoHref}>
                Send request
              </a>
              <button
                className="contactBtnGhost"
                type="button"
                onClick={() => setState(defaultState)}
              >
                Clear
              </button>
            </div>

            <div className="contactHint">
              Prefer to call?{" "}
              <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            </div>
          </form>

          <aside className="contactAside">
            <div className="contactAsideCard">
              <div className="contactAsideTitle">Call / Email</div>
              <a className="contactAsideLink" href={BUSINESS.phoneHref}>
                {BUSINESS.phoneDisplay}
              </a>
              <a className="contactAsideLink" href={BUSINESS.emailHref}>
                {BUSINESS.emailDisplay}
              </a>
            </div>

            <div className="contactAsideCard">
              <div className="contactAsideTitle">Service area</div>
              <div className="contactAsideText">{BUSINESS.serviceArea}</div>
              <div className="contactAsideTitle2">Address (add later)</div>
              <div className="contactAsideText">
                {BUSINESS.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>

            <div className="contactAsideCard">
              <div className="contactAsideTitle">Hours</div>
              <div className="contactAsideText">
                {BUSINESS.hours.map((h) => (
                  <div key={h.label} className="contactHoursRow">
                    <span className="contactMuted">{h.label}</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
