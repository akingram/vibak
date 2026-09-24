import { useMemo, useState } from "react";

const anchors = ["Services", "Commitment", "Booking", "Questions"];

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

export default function App() {
  const [requestForm, setRequestForm] = useState(initialRequest);
  const [requestStatus, setRequestStatus] = useState({
    state: "idle",
    message: "",
    reference: "",
  });

  const isSubmitting = requestStatus.state === "submitting";
  const requestSummary = useMemo(
    () => [
      requestForm.service,
      requestForm.location,
      requestForm.frequency,
    ].filter(Boolean),
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
    <main className="site-shell">
      <nav className="global-nav" aria-label="Global navigation">
        <a href="#top" aria-label="Vibak Cleaning Services home" className="global-mark">
          <img src="/vibak.jpeg" alt="" aria-hidden="true" />
          <span>Vibak Cleaning Services</span>
        </a>
        <div className="global-links">
          <a href="#services">Services</a>
          <a href="#commitment">Commitment</a>
          <a href="#booking">Booking</a>
          <a href="#questions">Questions</a>
        </div>
      </nav>

      <header className="local-nav" aria-label="Product navigation">
        <a className="local-title" href="#top">
          Vibak Cleaning Services
        </a>
        <div className="local-actions">
          <a className="pill pill-outline" href="#services">
            Explore
          </a>
          <a className="pill pill-blue" href="#booking">
            Plan a clean
          </a>
        </div>
      </header>

      <section className="hero-stage" id="top" aria-label="Vibak Cleaning Services hero">
        <p className="launch-label">Cheshire East&apos;s new standard in professional cleaning</p>
        <h1>Client-focused cleaning that listens first.</h1>
        <p className="hero-copy">
          Vibak Cleaning Services is a newly established cleaning company serving
          Crewe, Nantwich, Northwich, and Winsford with reliable, flexible, and
          detail-led cleaning for homes, tenants, landlords, businesses, and property managers.
        </p>

        <div className="hero-controls">
          <a className="pill pill-blue hero-pill" href="#booking">
            Start with your needs
          </a>
          <a className="text-link" href="#services">
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
            <a className="pill pill-blue" href="#booking">
              Book
            </a>
          </aside>
        </div>
      </section>

      <nav className="anchor-nav" aria-label="Page sections">
        {anchors.map((anchor) => (
          <a key={anchor} href={`#${anchor.toLowerCase()}`}>
            {anchor}
          </a>
        ))}
      </nav>

      <section className="highlights" id="services">
        <div className="section-header">
          <h2>Flexible cleaning solutions for every type of space.</h2>
          <a className="text-link" href="#booking">
            Build your plan
          </a>
        </div>

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

        <div className="service-index" aria-label="All Vibak cleaning services">
          {allServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="editorial-section" id="commitment">
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

      <section className="process-band" id="booking">
        <div className="section-header">
          <h2>A simple process built around satisfaction.</h2>
          <a className="text-link" href="#questions">
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
            <p className="product-kicker">Request a service</p>
            <h3>Tell Vibak what you need cleaned.</h3>
            <p>
              Send the essentials now. Your request is saved securely on this
              server so the team can review the service type, location, timing,
              and details before following up.
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
        </div>
      </section>

      <section className="faq-section" id="questions">
        <div className="section-header">
          <h2>Questions, answered simply.</h2>
          <a className="text-link" href="#booking">
            Plan a clean
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
    </main>
  );
}
