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

const featuredServices = [
  {
    label: "Homes",
    title: "Domestic cleaning",
    description:
      "Fresh, organised, and welcoming home cleaning shaped around your schedule and feedback.",
    image:
      "https://images.unsplash.com/photo-1779314687592-7d64bea77e8a?auto=format&fit=crop&w=1400&q=86",
    alt: "Bright white kitchen with polished stone worktop",
  },
  {
    label: "Workplaces",
    title: "Office and commercial cleaning",
    description:
      "Reliable cleaning for productive workplaces, business premises, and shared environments.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=86",
    alt: "Clean modern office with desks and daylight",
  },
  {
    label: "Hospitality",
    title: "Airbnb, hotels and short lets",
    description:
      "Guest-ready cleaning for rental properties and hospitality settings where presentation matters.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=86",
    alt: "Freshly made bed in a calm guest bedroom",
  },
];

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
    title: "Tell us what matters",
    text: "Share your property type, location, preferred schedule, and the details you value most.",
  },
  {
    number: "02",
    title: "We shape the service",
    text: "Your requirements and feedback guide the plan, products, equipment, and cleaning priorities.",
  },
  {
    number: "03",
    title: "Expect a better standard",
    text: "The team works toward reliable, satisfactory results and continuous improvement after every clean.",
  },
];

const faqs = [
  {
    question: "Where does Vibak Cleaning Services operate?",
    answer:
      "Vibak serves Cheshire East communities including Crewe, Nantwich, Northwich, and Winsford.",
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

function HomePage() {
  return (
    <>
      <section className="hero-stage" aria-label="Vibak Cleaning Services hero">
        <p className="launch-label">Cheshire East&apos;s new standard in professional cleaning</p>
        <h1>Client-focused cleaning that listens first.</h1>
        <p className="hero-copy">
          Vibak Cleaning Services is a newly established cleaning company serving
          Crewe, Nantwich, Northwich, and Winsford with reliable, flexible, and
          detail-led cleaning for homes, tenants, landlords, businesses, and property managers.
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
            <p>Serving Cheshire East</p>
            <span>Crewe, Nantwich, Northwich, Winsford and nearby communities.</span>
            <a className="pill pill-blue" href="/request-service">
              Book
            </a>
          </aside>
        </div>
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
            Whether you need domestic cleaning, scheduled maintenance, hotel support,
            commercial cleaning, or a detailed tenancy handover, Vibak builds the
            cleaning plan around your environment and expectations.
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
        title="A professional cleaning plan for every space."
        copy="Choose one-off, recurring, hospitality, office, tenancy, or move-related cleaning with standards shaped around your priorities."
        actions={<a className="pill pill-blue hero-pill" href="/request-service">Request a service</a>}
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
        title="Tell Vibak what you need cleaned."
        copy="Send the essentials now. Your request is saved locally on this server so the team can review the service type, location, timing, and details before following up."
      />
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
            <p className="product-kicker">Request details</p>
            <h3>Start with the essentials.</h3>
            <p>
              Add your service type, area, property type, preferred schedule, and
              anything Vibak should know before confirming the plan.
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
        copy="Vibak Cleaning Services was created to make professional cleaning feel more reliable, more responsive, and more carefully tailored to each space."
        actions={<a className="pill pill-blue hero-pill" href="/request-service">Request a service</a>}
      />
      <section className="editorial-section">
        <div className="editorial-copy">
          <p className="product-kicker">Our commitment</p>
          <h2>Your feedback shapes the service.</h2>
          <p>
            We believe a clean environment enhances comfort, health, and productivity.
            Vibak cleaners use high-quality products and modern equipment to leave
            every space spotless, hygienic, and welcoming.
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
        actions={<a className="pill pill-blue hero-pill" href="/request-service">Request a service</a>}
      />
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
