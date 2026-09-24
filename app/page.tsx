/* eslint-disable @next/next/no-img-element */

const services = [
  {
    title: "Signature home cleaning",
    description:
      "Recurring weekly, fortnightly, and monthly resets for homes that need consistent, careful upkeep.",
    image:
      "https://images.unsplash.com/photo-1779314687592-7d64bea77e8a?auto=format&fit=crop&w=1200&q=82",
    alt: "Bright contemporary kitchen with polished stone countertops",
    detail: "Dusting, floors, bathrooms, kitchens, bedrooms",
  },
  {
    title: "End of tenancy",
    description:
      "Inventory-ready cleaning for move-outs, landlord handovers, and deposit-sensitive finishes.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82",
    alt: "Clean modern apartment living room with warm daylight",
    detail: "Deep surfaces, appliances, fixtures, skirting",
  },
  {
    title: "Airbnb and short lets",
    description:
      "Fast, reliable turnarounds with linen-ready presentation and guest-first attention to detail.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=82",
    alt: "Fresh bedroom prepared for guest arrival",
    detail: "Checklists, staging, essentials, schedules",
  },
  {
    title: "Commercial spaces",
    description:
      "Smart, low-disruption office and studio cleaning for teams that want calm, hygienic workspaces.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82",
    alt: "Orderly modern office with clean desks and natural light",
    detail: "Desks, shared areas, washrooms, touchpoints",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share the space",
    text: "Send the property type, size, postcode, and what needs the most attention.",
  },
  {
    step: "02",
    title: "Receive a tailored quote",
    text: "We match the right team, products, timing, and finish for the job.",
  },
  {
    step: "03",
    title: "Walk into a reset",
    text: "Your cleaner arrives briefed, prepared, and focused on the details that matter.",
  },
];

const standards = [
  "Background-checked cleaning professionals",
  "Eco-conscious products available on request",
  "Transparent quotes before work begins",
  "Flexible one-off and recurring appointments",
];

const faqs = [
  {
    question: "Do you bring cleaning supplies?",
    answer:
      "Yes. The team can bring professional supplies and equipment, or use preferred products already at the property.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "The service focuses on East London and nearby neighbourhoods, with quotes confirmed by postcode.",
  },
  {
    question: "Can you handle same-week bookings?",
    answer:
      "Often, yes. Availability depends on the scope of the clean and the size of the property.",
  },
  {
    question: "Do you clean after builders or renovations?",
    answer:
      "Yes. After-builders work is quoted around dust level, access, room count, and the finish required.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="top" aria-label="Made Simple Cleans">
        <header className="nav-bar">
          <a className="brand" href="#top" aria-label="Made Simple Cleans home">
            <span className="brand-mark" aria-hidden="true">
              MS
            </span>
            <span>
              <strong>Made Simple</strong>
              <small>Cleans</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#standard">Standard</a>
            <a href="#booking">Booking</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="nav-cta" href="tel:+447538363193">
            Call now
          </a>
        </header>

        <div className="hero-content">
          <p className="eyebrow">East London residential and commercial cleaning</p>
          <h1>Made Simple Cleans</h1>
          <p className="hero-subtitle">
            A more considered cleaning service for homes, short lets, offices,
            and handovers that need to feel calm, polished, and unmistakably cared for.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="mailto:Madesimplecleans@gmail.com">
              Get a tailored quote
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href="#services">
              Explore services
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Service highlights">
          <p>
            <strong>4.9/5</strong>
            Client satisfaction
          </p>
          <p>
            <strong>24-48h</strong>
            Quote response
          </p>
          <p>
            <strong>7 days</strong>
            Flexible bookings
          </p>
        </div>
      </section>

      <section className="intro-band" aria-label="Premium cleaning promise">
        <div>
          <p className="section-kicker">A cleaner, quieter standard</p>
          <h2>Designed for the way modern London homes and workplaces are used.</h2>
        </div>
        <p>
          Every visit is structured around clear expectations, careful sequencing,
          and a finish that reads as intentional rather than rushed. It is the
          difference between tidy and genuinely restored.
        </p>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>Housekeeping discipline, hospitality-level presentation.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.alt} loading="lazy" />
              <div className="service-card-body">
                <p>{service.detail}</p>
                <h3>{service.title}</h3>
                <span>{service.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section" id="standard">
        <div className="standard-copy">
          <p className="section-kicker">The Made Simple standard</p>
          <h2>Professional, discreet, and tuned to the property.</h2>
          <p>
            The experience is built around punctual communication, practical
            checklists, and a calm visual finish. Kitchens are degreased with
            care, bathrooms are detailed, floors are brought back to life, and
            surfaces are reset for daily living or guest arrival.
          </p>

          <div className="standard-list">
            {standards.map((standard) => (
              <p key={standard}>
                <span aria-hidden="true">+</span>
                {standard}
              </p>
            ))}
          </div>
        </div>

        <figure className="standard-image">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=82"
            alt="Minimal bathroom with clean fixtures and bright tile"
            loading="lazy"
          />
          <figcaption>
            Detail-led bathroom, kitchen, appliance, and high-touch area cleaning.
          </figcaption>
        </figure>
      </section>

      <section className="booking-section" id="booking">
        <div className="section-heading">
          <p className="section-kicker">Booking</p>
          <h2>Simple to arrange. Meticulous once inside.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((item) => (
            <article className="process-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="quote-panel" aria-label="Request a quote">
          <div>
            <p className="section-kicker">Ready for a quote?</p>
            <h2>Tell us what needs cleaning and when you need it done.</h2>
          </div>
          <div className="quote-actions">
            <a className="button button-primary" href="mailto:Madesimplecleans@gmail.com">
              Email the team
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-outline" href="tel:+447538363193">
              +44 7538 363193
            </a>
          </div>
        </div>
      </section>

      <section className="testimonial-section" aria-label="Client quote">
        <blockquote>
          &quot;The finish felt considered in every room. It was not just clean; it felt
          reset, calm, and ready to enjoy.&quot;
        </blockquote>
        <p>Private residential client, East London</p>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <p className="section-kicker">Questions</p>
          <h2>Everything important, answered plainly.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="Made Simple Cleans home">
            <span className="brand-mark" aria-hidden="true">
              MS
            </span>
            <span>
              <strong>Made Simple</strong>
              <small>Cleans</small>
            </span>
          </a>
          <p>Professional cleaning across East London for homes, lets, offices, and move-outs.</p>
        </div>

        <address>
          <a href="tel:+447538363193">+44 7538 363193</a>
          <a href="mailto:Madesimplecleans@gmail.com">Madesimplecleans@gmail.com</a>
          <span>East London, United Kingdom</span>
        </address>
      </footer>
    </main>
  );
}
