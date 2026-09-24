import { useEffect, useMemo, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Request Service", href: "/request-service" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const pageTitles = {
  "/": "Vibak Cleaning Services | Professional Cleaning in Cheshire East",
  "/services": "Services | Vibak Cleaning Services",
  "/request-service": "Request a Service | Vibak Cleaning Services",
  "/about": "About | Vibak Cleaning Services",
  "/contact": "Contact | Vibak Cleaning Services",
};

const allServices = [
  "Domestic Cleaning",
  "Office Cleaning",
  "Airbnb & Short-Term Let Cleaning",
  "Hotel Cleaning",
  "Commercial Cleaning",
  "End of Tenancy Cleaning",
  "Move-In & Move-Out Cleaning",
  "Scheduled Cleaning",
];

const featuredServices = [
  {
    label: "Homes",
    title: "Domestic cleaning",
    description:
      "A calm, considered clean for kitchens, bathrooms, living spaces, bedrooms, and the details that make a home feel reset.",
    image:
      "https://images.unsplash.com/photo-1779314687592-7d64bea77e8a?auto=format&fit=crop&w=1400&q=86",
    alt: "Bright white kitchen with polished stone worktop",
  },
  {
    label: "Workplaces",
    title: "Office and commercial cleaning",
    description:
      "Professional cleaning for productive offices, shared facilities, customer-facing spaces, and business premises.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=86",
    alt: "Clean modern office with desks and daylight",
  },
  {
    label: "Hospitality",
    title: "Airbnb, hotels and short lets",
    description:
      "Presentation-led cleaning for guest-ready bedrooms, bathrooms, kitchens, entrances, and turnover spaces.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=86",
    alt: "Freshly made bed in a calm guest bedroom",
  },
];

const serviceDetails = [
  {
    title: "Domestic Cleaning",
    scope:
      "Kitchen surfaces, bathrooms, living areas, bedrooms, floors, dusting, high-touch points, and reset details.",
    bestFor: "Busy homes that need regular care or a focused one-time refresh.",
  },
  {
    title: "Office Cleaning",
    scope:
      "Desks, meeting rooms, shared kitchens, washrooms, reception areas, bins, floors, and touchpoints.",
    bestFor: "Teams that need a clean, organised workspace without disruption.",
  },
  {
    title: "Airbnb & Short-Term Let Cleaning",
    scope:
      "Guest turnover cleaning, bed presentation, bathroom polish, kitchen reset, restock checks, and arrival readiness.",
    bestFor: "Hosts who need every stay to begin with a confident first impression.",
  },
  {
    title: "Hotel Cleaning",
    scope:
      "Room resets, bathroom detailing, surface care, public-area support, and standards-led hospitality cleaning.",
    bestFor: "Hospitality environments where presentation, hygiene, and timing matter.",
  },
  {
    title: "Commercial Cleaning",
    scope:
      "Practical cleaning for premises, front-of-house areas, staff spaces, floors, washrooms, and routine maintenance.",
    bestFor: "Businesses that need flexible, professional cleaning around operating hours.",
  },
  {
    title: "End of Tenancy Cleaning",
    scope:
      "Detailed property cleaning for kitchens, bathrooms, rooms, cupboards, skirting boards, floors, and handover areas.",
    bestFor: "Tenants, landlords, and property managers preparing for a new occupant.",
  },
  {
    title: "Move-In & Move-Out Cleaning",
    scope:
      "A fresh-start clean before moving in or a focused reset after moving out, tailored to the property condition.",
    bestFor: "House moves, new keys, property handovers, and stressful transition days.",
  },
  {
    title: "Scheduled Cleaning",
    scope:
      "Weekly, bi-weekly, monthly, or occasional cleaning with clear priorities carried from one visit to the next.",
    bestFor: "Clients who want consistency, feedback-led improvement, and a reliable rhythm.",
  },
];

const premiumStandards = [
  {
    title: "Founding-client care",
    text: "Vibak is newly established, so early clients receive careful onboarding, clear expectations, and a direct feedback loop after the clean.",
  },
  {
    title: "Scope before arrival",
    text: "Service type, rooms, timing, access, supplies, priorities, and special notes are captured before the team arrives.",
  },
  {
    title: "Checklist-led detail",
    text: "High-touch areas, kitchens, bathrooms, floors, presentation points, and handover details are worked through methodically.",
  },
  {
    title: "Hygiene-first finish",
    text: "The goal is a calm, hygienic, ready-to-use space for homes, offices, hotels, rentals, and commercial premises.",
  },
];

const launchPromises = [
  "Newly established and transparent about it.",
  "No borrowed testimonials or inflated proof.",
  "Client feedback shapes the standard from day one.",
  "Every booking starts with clear expectations.",
];

const commitments = [
  "Client-centred approach",
  "Professional and reliable team",
  "Flexible service plans",
  "Wide coverage across Cheshire East",
  "High standards of hygiene and care",
];

const steps = [
  {
    number: "01",
    title: "Brief",
    text: "Share the property type, location, access notes, preferred schedule, and the exact details that matter most.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Vibak reviews the request, clarifies expectations, and shapes the cleaning priorities before the visit.",
  },
  {
    number: "03",
    title: "Refine",
    text: "After the clean, feedback helps improve the service rhythm for future scheduled or repeat bookings.",
  },
];

const requestChecklist = [
  {
    title: "Service brief",
    text: "Tell us what type of clean you need, where the property is, and what outcome you want.",
  },
  {
    title: "Priority areas",
    text: "Mention bathrooms, kitchens, guest rooms, handover details, access needs, or time-sensitive spaces.",
  },
  {
    title: "Preferred rhythm",
    text: "Choose one-time, weekly, bi-weekly, monthly, or let Vibak help shape a suitable schedule.",
  },
];

const faqs = [
  {
    question: "Where does Vibak Cleaning Services operate?",
    answer:
      "Vibak serves Cheshire East communities including Crewe, Nantwich, Northwich, and Winsford.",
  },
  {
    question: "Is Vibak newly established?",
    answer:
      "Yes. Vibak is at the beginning, which is why the service is intentionally feedback-led, transparent, and built around careful early-client care.",
  },
  {
    question: "Can I book scheduled cleaning?",
    answer:
      "Yes. Weekly, bi-weekly, monthly, and one-time cleaning options can be arranged around your needs.",
  },
  {
    question: "Do you handle tenancy and move-out cleaning?",
    answer:
      "Yes. End of tenancy, move-in, and move-out cleaning are part of the service range.",
  },
];

const locations = ["Crewe", "Nantwich", "Northwich", "Winsford", "Other Cheshire East area"];
const propertyTypes = [
  "Home",
  "Office",
  "Airbnb / Short-Term Let",
  "Hotel",
  "Commercial Premises",
  "Tenant / Landlord Property",
];
const frequencies = ["One-time", "Weekly", "Bi-weekly", "Monthly", "Not sure yet"];

const initialRequest = {
  name: "",
  email: "",
  phone: "",
  service: "Domestic Cleaning",
  location: "Crewe",
  propertyType: "Home",
  frequency: "One-time",
  preferredDate: "",
  address: "",
  details: "",
};

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return pageTitles[path] ? path : "/";
}

function Header({ path }) {
  return (
    <>
      <nav className="global-nav" aria-label="Global navigation">
        <a href="/" aria-label="Vibak Cleaning Services home" className="global-mark">
          <img src="/vibak.jpeg" alt="" aria-hidden="true" />
          <span>Vibak Cleaning Services</span>
        </a>
        <div className="global-links">
          {navigation.map((item) => (
            <a className={path === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="local-nav" aria-label="Product navigation">
        <a className="local-title" href="/">
          Vibak Cleaning Services
        </a>
        <div className="local-actions">
          <a className="pill pill-outline" href="/services">
            Explore
          </a>
          <a className="pill pill-blue" href="/request-service">
            Plan a clean
          </a>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-title">Vibak Cleaning Services</p>
        <p>Cheshire East&apos;s fresh, client-focused cleaning experience.</p>
      </div>
      <address>
        <span>Crewe</span>
        <span>Nantwich</span>
        <span>Northwich</span>
        <span>Winsford</span>
      </address>
    </footer>
  );
}

function PageHero({ label, title, copy, actions }) {
  return (
    <section className="page-hero" aria-label={title}>
      <p className="launch-label">{label}</p>
      <h1>{title}</h1>
      <p className="hero-copy">{copy}</p>
      {actions ? <div className="hero-controls">{actions}</div> : null}
    </section>
  );
}

function StandardGrid({ items, className = "" }) {
  const gridClass = ["standard-grid", className].filter(Boolean).join(" ");

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <article className="standard-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function ServiceCards() {
  return (
    <div className="feature-row">
      {featuredServices.map((service) => (
        <article className="feature-card" key={service.title}>
          <p>{service.label}</p>
          <h3>{service.title}</h3>
          <img src={service.image} alt={service.alt} loading="lazy" />
          <span>{service.description}</span>
        </article>
      ))}
    </div>
  );
}

function LaunchPanel() {
  return (
    <section className="launch-panel" aria-label="Vibak launch promise">
      <div>
        <p className="product-kicker">Honest from day one</p>
        <h2>New company. Serious operating standard.</h2>
        <p>
          Vibak is not using borrowed proof or manufactured reviews. The standard is
          built through professional preparation, clear communication, careful
          cleaning, and client feedback after real bookings.
        </p>
      </div>
      <ul className="promise-list">
        {launchPromises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-stage" aria-label="Vibak Cleaning Services hero">
        <p className="launch-label">Newly established in Cheshire East</p>
        <h1>Professional cleaning with a launch-standard level of care.</h1>
        <p className="hero-copy">
          Vibak Cleaning Services serves Crewe, Nantwich, Northwich, and Winsford
          with flexible, detail-led cleaning for homes, tenants, landlords,
          businesses, hospitality teams, and property managers.
        </p>

        <div className="hero-controls">
          <a className="pill pill-blue hero-pill" href="/request-service">
            Start with your needs
          </a>
          <a className="text-link" href="/services">
            View services
          </a>
        </div>

        <div className="logo-stage" aria-label="Vibak brand mark">
          <img src="/vibak.jpeg" alt="Vibak Cleaning Services logo" />
        </div>

        <div className="product-visual" aria-label="Professional cleaning preview">
          <img
            src="https://images.unsplash.com/photo-1779314687592-7d64bea77e8a?auto=format&fit=crop&w=2200&q=90"
            alt="Pristine white kitchen presented like a premium cleaning result"
          />
          <aside className="price-callout" aria-label="Coverage callout">
            <p>New company. Serious standard.</p>
            <span>Serving Crewe, Nantwich, Northwich, Winsford, and nearby communities.</span>
            <a className="pill pill-blue" href="/request-service">
              Request
            </a>
          </aside>
        </div>
      </section>

      <section className="standard-band">
        <div className="section-header">
          <h2>Top-tier service starts before the first clean.</h2>
          <a className="text-link" href="/request-service">
            Plan your clean
          </a>
        </div>
        <StandardGrid items={premiumStandards} />
      </section>

      <section className="highlights">
        <div className="section-header">
          <h2>Flexible cleaning solutions for every type of space.</h2>
          <a className="text-link" href="/services">
            Explore all services
          </a>
        </div>
        <ServiceCards />
      </section>

      <LaunchPanel />

      <section className="wide-story">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=86"
          alt="Clean contemporary home interior with pale sofa and daylight"
          loading="lazy"
        />
        <div>
          <p className="product-kicker">Crewe, Nantwich, Northwich, Winsford</p>
          <h2>Professional cleaning for homes, businesses, lets, hotels, and moving days.</h2>
          <p>
            Whether you need a one-off reset, recurring domestic cleaning, hotel
            support, commercial maintenance, or a detailed tenancy handover, Vibak
            builds the clean around your environment and priorities.
          </p>
          <a className="pill pill-blue story-action" href="/request-service">
            Request a service
          </a>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Cleaning services designed around the way each space is used."
        copy="Choose one-off, recurring, hospitality, office, tenancy, or move-related cleaning with a clear scope before every booking."
        actions={
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
        }
      />
      <section className="highlights">
        <div className="section-header">
          <h2>Cleaning solutions built for homes, teams, guests, and handovers.</h2>
          <a className="text-link" href="/request-service">
            Build your plan
          </a>
        </div>
        <ServiceCards />
        <div className="service-index" aria-label="All Vibak cleaning services">
          {allServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="service-detail-section">
        <div className="section-header">
          <h2>Every service has a brief, a focus, and a finish standard.</h2>
          <a className="text-link" href="/request-service">
            Request details
          </a>
        </div>
        <div className="service-detail-grid">
          {serviceDetails.map((service) => (
            <article className="service-detail-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.scope}</p>
              <span>{service.bestFor}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function RequestServicePage() {
  const [requestForm, setRequestForm] = useState(initialRequest);
  const [requestStatus, setRequestStatus] = useState({
    state: "idle",
    message: "",
    reference: "",
  });

  const isSubmitting = requestStatus.state === "submitting";
  const requestSummary = useMemo(
    () => [requestForm.service, requestForm.location, requestForm.frequency].filter(Boolean),
    [requestForm.frequency, requestForm.location, requestForm.service],
  );

  function updateRequest(event) {
    const { name, value } = event.target;
    setRequestForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function submitRequest(event) {
    event.preventDefault();

    if (!requestForm.email.trim() && !requestForm.phone.trim()) {
      setRequestStatus({
        state: "error",
        message: "Please add either an email address or phone number.",
        reference: "",
      });
      return;
    }

    setRequestStatus({ state: "submitting", message: "Sending your request...", reference: "" });

    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestForm),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "We could not send your request.");
      }

      setRequestStatus({
        state: "success",
        message: result.message,
        reference: result.reference,
      });
      setRequestForm(initialRequest);
    } catch (error) {
      setRequestStatus({
        state: "error",
        message: error.message || "Please try again.",
        reference: "",
      });
    }
  }

  return (
    <>
      <PageHero
        label="Request a service"
        title="Tell Vibak what you need cleaned, clearly and quickly."
        copy="Send the essentials now. Your request is saved locally on this server so the team can review the service type, location, timing, and details before following up."
      />
      <section className="standard-band request-intro">
        <div className="section-header">
          <h2>A better clean starts with a better brief.</h2>
          <a className="text-link" href="/services">
            Compare services
          </a>
        </div>
        <StandardGrid items={requestChecklist} className="request-standard-grid" />
      </section>

      <section className="process-band">
        <div className="section-header">
          <h2>A simple process built around satisfaction.</h2>
          <a className="text-link" href="/contact">
            Common questions
          </a>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="request-panel" aria-label="Request a cleaning service">
          <div className="request-copy">
            <p className="product-kicker">Request concierge</p>
            <h3>Start with the essentials.</h3>
            <p>
              Add your service type, area, property type, preferred schedule, and
              anything Vibak should know before confirming the plan. The more precise
              the brief, the sharper the clean.
            </p>
            <div className="request-summary" aria-label="Current request summary">
              {requestSummary.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <form className="request-form" onSubmit={submitRequest}>
            <div className="form-grid">
              <label>
                Full name
                <input
                  name="name"
                  value={requestForm.name}
                  onChange={updateRequest}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={requestForm.email}
                  onChange={updateRequest}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={requestForm.phone}
                  onChange={updateRequest}
                  placeholder="Best contact number"
                  autoComplete="tel"
                />
              </label>
              <label>
                Service
                <select name="service" value={requestForm.service} onChange={updateRequest}>
                  {allServices.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>
              <label>
                Area
                <select name="location" value={requestForm.location} onChange={updateRequest}>
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </label>
              <label>
                Property type
                <select
                  name="propertyType"
                  value={requestForm.propertyType}
                  onChange={updateRequest}
                >
                  {propertyTypes.map((propertyType) => (
                    <option key={propertyType}>{propertyType}</option>
                  ))}
                </select>
              </label>
              <label>
                Frequency
                <select name="frequency" value={requestForm.frequency} onChange={updateRequest}>
                  {frequencies.map((frequency) => (
                    <option key={frequency}>{frequency}</option>
                  ))}
                </select>
              </label>
              <label>
                Preferred date
                <input
                  name="preferredDate"
                  type="date"
                  value={requestForm.preferredDate}
                  onChange={updateRequest}
                />
              </label>
            </div>

            <label>
              Address or postcode
              <input
                name="address"
                value={requestForm.address}
                onChange={updateRequest}
                placeholder="Property address or postcode"
                autoComplete="street-address"
              />
            </label>

            <label>
              Details
              <textarea
                name="details"
                value={requestForm.details}
                onChange={updateRequest}
                placeholder="Tell us about room count, access, priorities, pets, parking, or anything else that helps."
                rows="5"
              />
            </label>

            <div className="form-actions">
              <p className="form-note">
                Add either an email or phone number so Vibak can follow up.
              </p>
              <button className="pill pill-blue hero-pill" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit request"}
              </button>
            </div>

            <p className={`form-status ${requestStatus.state}`} aria-live="polite">
              {requestStatus.reference
                ? `${requestStatus.message} Reference: ${requestStatus.reference}`
                : requestStatus.message}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Vibak"
        title="A new cleaning company built around client feedback."
        copy="Vibak Cleaning Services is starting with focus: clear standards, careful communication, and a commitment to improve through real client feedback."
        actions={
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
        }
      />
      <section className="editorial-section">
        <div className="editorial-copy">
          <p className="product-kicker">Our commitment</p>
          <h2>Your feedback shapes the service.</h2>
          <p>
            A clean environment supports comfort, health, and productivity. Vibak
            approaches every request with high-quality products, modern equipment,
            and a practical service brief designed around the space in front of us.
          </p>
          <div className="quality-list" aria-label="Why choose Vibak">
            {commitments.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <img
          className="editorial-image"
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=86"
          alt="Minimal bathroom with clean tile, sink, and mirror"
          loading="lazy"
        />
      </section>
      <LaunchPanel />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Questions before booking? Start here."
        copy="Use the request page when you are ready to share service details, or review the common questions below before planning your clean."
        actions={
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
        }
      />
      <section className="coverage-band">
        <div className="section-header">
          <h2>Serving Cheshire East with flexible cleaning support.</h2>
          <a className="text-link" href="/request-service">
            Send a brief
          </a>
        </div>
        <div className="coverage-grid" aria-label="Vibak coverage areas">
          {locations.slice(0, 4).map((location) => (
            <article className="coverage-card" key={location}>
              <h3>{location}</h3>
              <p>Domestic, commercial, rental, hospitality, scheduled, and move-related cleaning.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="faq-section">
        <div className="section-header">
          <h2>Questions, answered simply.</h2>
          <a className="text-link" href="/services">
            View services
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function CurrentPage({ path }) {
  switch (path) {
    case "/services":
      return <ServicesPage />;
    case "/request-service":
      return <RequestServicePage />;
    case "/about":
      return <AboutPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [path, setPath] = useState(normalizedPath);

  useEffect(() => {
    document.title = pageTitles[path];
  }, [path]);

  useEffect(() => {
    const onPopState = () => setPath(normalizedPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <main className="site-shell">
      <Header path={path} />
      <CurrentPage path={path} />
      <Footer />
    </main>
  );
}
