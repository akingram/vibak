/* eslint-disable @next/next/no-img-element */

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

export default function Home() {
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
