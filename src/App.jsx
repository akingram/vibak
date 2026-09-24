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
    scope: "A fresh reset for kitchens, bathrooms, bedrooms, living areas, floors, and touchpoints.",
    bestFor: "Busy homes that need regular care or a focused one-time refresh.",
  },
  {
    title: "Office Cleaning",
    scope: "Reliable cleaning for desks, meeting rooms, kitchens, washrooms, bins, floors, and touchpoints.",
    bestFor: "Teams that need a clean, organised workspace without disruption.",
  },
  {
    title: "Airbnb & Short-Term Let Cleaning",
    scope: "Turnover cleaning for guest-ready bedrooms, bathrooms, kitchens, entrances, and restock checks.",
    bestFor: "Hosts who need every stay to begin with a confident first impression.",
  },
  {
    title: "Hotel Cleaning",
    scope: "Hospitality cleaning for room resets, bathroom detailing, surfaces, and shared areas.",
    bestFor: "Hospitality environments where presentation, hygiene, and timing matter.",
  },
  {
    title: "Commercial Cleaning",
    scope: "Cleaning for business premises, front-of-house areas, staff spaces, floors, and washrooms.",
    bestFor: "Businesses that need flexible, professional cleaning around operating hours.",
  },
  {
    title: "End of Tenancy Cleaning",
    scope: "A detailed clean for kitchens, bathrooms, rooms, cupboards, floors, and handover areas.",
    bestFor: "Tenants, landlords, and property managers preparing for a new occupant.",
  },
  {
    title: "Move-In & Move-Out Cleaning",
    scope: "A practical reset before moving in or after moving out, tailored to the property condition.",
    bestFor: "House moves, new keys, property handovers, and stressful transition days.",
  },
  {
    title: "Scheduled Cleaning",
    scope: "Weekly, bi-weekly, monthly, or occasional cleaning with clear repeat priorities.",
    bestFor: "Clients who want consistency, steady improvement, and a reliable rhythm.",
  },
];

const premiumStandards = [
  {
    title: "Care from the first visit",
    text: "We take time to understand how you use the space, what needs attention, and what should feel different when we leave.",
  },
  {
    title: "Clear plan before arrival",
    text: "Service type, rooms, timing, access, supplies, priorities, and special notes are agreed before the clean begins.",
  },
  {
    title: "Room-by-room focus",
    text: "High-touch areas, kitchens, bathrooms, floors, presentation points, and handover details are worked through carefully.",
  },
  {
    title: "Fresh, ready-to-use spaces",
    text: "The goal is a calm, hygienic, ready-to-use space for homes, offices, hotels, rentals, and commercial premises.",
  },
];

const launchPromises = [
  "We explain what is included before the clean.",
  "You can tell us what matters most in each room.",
  "We listen after each visit and improve the next one.",
  "Homes, offices, rentals, and move days are handled with care.",
];

const heroBadges = [
  "Cheshire East based",
  "Property-specific plans",
  "Request online anytime",
];

const quickServicePaths = [
  {
    label: "Homes",
    title: "Home cleaning",
    text: "Domestic, scheduled, move-in, and move-out cleaning.",
  },
  {
    label: "Workplaces",
    title: "Business cleaning",
    text: "Office, commercial, hotel, and shared-space cleaning.",
  },
  {
    label: "Turnovers",
    title: "Rental resets",
    text: "Airbnb, short-let, and end-of-tenancy cleaning.",
  },
];

const commitments = [
  "Cleaning shaped around your space",
  "Professional and reliable team",
  "Flexible service plans",
  "Wide coverage across Cheshire East",
  "Careful hygiene and attention to detail",
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
    text: "After the clean, your notes help us get future visits closer to how you like things done.",
  },
];

const requestChecklist = [
  {
    title: "Service brief",
    text: "Tell us the clean you need, the location, and the result you want.",
  },
  {
    title: "Priority areas",
    text: "Mention rooms, access needs, handover details, or time-sensitive spaces.",
  },
  {
    title: "Preferred rhythm",
    text: "Choose one-time, weekly, bi-weekly, monthly, or ask us to help.",
  },
  {
    title: "In-depth screening",
    text: "Add size, condition, access, products, parking, and priority areas.",
  },
];

const faqs = [
  {
    question: "Where does Vibak Cleaning Services operate?",
    answer:
      "Vibak serves Cheshire East communities including Crewe, Nantwich, Northwich, and Winsford.",
  },
  {
    question: "How does Vibak build trust with first-time clients?",
    answer:
      "We keep the booking clear, agree the priorities before we arrive, and use your comments after the visit to improve the service.",
  },
  {
    question: "Can I book scheduled cleaning?",
    answer:
      "Yes. Weekly, bi-weekly, monthly, and one-time cleaning options can be arranged around your needs.",
  },
  {
    question: "Why does the request form ask screening questions?",
    answer:
      "The extra details help Vibak understand the size, condition, access, supplies, and priority areas before confirming the clean.",
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
const roomCounts = ["Studio / room", "1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms", "Not sure"];
const bathroomCounts = ["1 bathroom", "2 bathrooms", "3+ bathrooms", "Shared facilities", "Not sure"];
const propertySizes = [
  "Small property",
  "Medium property",
  "Large property",
  "Commercial / larger site",
  "Not sure",
];
const conditionLevels = [
  "Light maintenance clean",
  "Standard clean",
  "Deep clean needed",
  "End of tenancy level",
  "Not sure",
];
const accessMethods = [
  "Someone will be present",
  "Key safe / lockbox",
  "Reception / concierge",
  "Key collection needed",
  "To be confirmed",
];
const supplyOptions = [
  "Please bring products and equipment",
  "Products available at property",
  "Use specific products only",
  "To be confirmed",
];

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
  roomCount: "2 bedrooms",
  bathroomCount: "1 bathroom",
  propertySize: "Medium property",
  currentCondition: "Standard clean",
  accessMethod: "Someone will be present",
  supplies: "Please bring products and equipment",
  parkingAccess: "",
  priorityAreas: "",
  screeningNotes: "",
  details: "",
};

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return pageTitles[path] ? path : "/";
}

function serviceRequestHref(service) {
  return `/request-service?service=${encodeURIComponent(service)}`;
}

function initialRequestFromUrl() {
  const service = new URLSearchParams(window.location.search).get("service");

  if (service && allServices.includes(service)) {
    return { ...initialRequest, service };
  }

  return initialRequest;
}

function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="top-strip" aria-label="Service summary">
        <span>Professional cleaning across Cheshire East</span>
        <span>Crewe / Nantwich / Northwich / Winsford</span>
      </div>

      <nav className="global-nav" aria-label="Primary navigation">
        <a
          href="/"
          onClick={closeMenu}
          aria-label="Vibak Cleaning Services home"
          className="global-mark"
        >
          <img src="/vibak.jpeg" alt="" aria-hidden="true" />
          <span>Vibak Cleaning Services</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
        </button>
        <div id="site-menu" className={`global-links ${menuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <a
              className={path === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="pill pill-blue mobile-menu-quote"
            href="/request-service"
            onClick={closeMenu}
          >
            Get a quote
          </a>
        </div>
        <a className="pill pill-blue nav-quote" href="/request-service">
          Get a quote
        </a>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-title">Vibak Cleaning Services</p>
        <p>Detailed cleaning for homes, workspaces, rentals, hotels, and moving days.</p>
      </div>
      <div className="footer-columns">
        <div>
          <h2>Explore</h2>
          <a href="/services">Services</a>
          <a href="/request-service">Request service</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <address>
          <h2>Coverage</h2>
          <span>Crewe</span>
          <span>Nantwich</span>
          <span>Northwich</span>
          <span>Winsford</span>
        </address>
      </div>
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
    <section className="launch-panel" aria-label="Vibak service approach">
      <div>
        <p className="product-kicker">How we work</p>
        <h2>Built around careful work and clear communication.</h2>
        <p>
          Vibak is building its reputation one clean at a time. Every job starts
          with understanding the space, agreeing the priorities, and leaving
          things fresh, tidy, and ready to use.
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
      <section className="hero-stage home-hero" aria-label="Vibak Cleaning Services hero">
        <p className="launch-label">Professional cleaning in Cheshire East</p>
        <h1>Cleaning made simple for homes and businesses.</h1>
        <p className="hero-copy">
          Book domestic, office, Airbnb, hotel, commercial, tenancy, move-in,
          move-out, or scheduled cleaning across Crewe, Nantwich, Northwich, and
          Winsford.
        </p>

        <div className="hero-controls">
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
          <a className="pill pill-ghost hero-pill" href="/services">
            View services
          </a>
        </div>

        <div className="hero-badges" aria-label="Vibak service highlights">
          {heroBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </section>

      <section className="home-quick-panel" aria-label="Quick cleaning request">
        <div className="home-quick-copy">
          <p className="product-kicker">Start here</p>
          <h2>Pick the clean. Send the details. We confirm the plan.</h2>
          <p>
            Use one short request for one-off, regular, move, rental, hospitality,
            or workplace cleaning.
          </p>
          <a className="pill pill-blue" href="/request-service">
            Request a service
          </a>
        </div>
        <div className="quick-path-grid">
          {quickServicePaths.map((path) => (
            <article className="quick-path-card" key={path.title}>
              <p>{path.label}</p>
              <h3>{path.title}</h3>
              <span>{path.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-service-strip" aria-labelledby="home-services-title">
        <div className="section-header compact-header">
          <h2 id="home-services-title">Services at a glance.</h2>
          <a className="text-link" href="/services">
            Compare services
          </a>
        </div>
        <div className="home-service-chips" aria-label="Request a specific Vibak service">
          {allServices.map((service) => (
            <a href={serviceRequestHref(service)} key={service}>
              {service}
            </a>
          ))}
        </div>
      </section>

      <section className="home-cta-panel" aria-label="Request a Vibak cleaning service">
        <div>
          <p className="product-kicker">Ready when you are</p>
          <h2>Need a cleaner this week?</h2>
          <p>Choose the service, add the property details, and Vibak will follow up.</p>
        </div>
        <a className="pill pill-blue hero-pill" href="/request-service">
          Start request
        </a>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Choose a cleaning service and request it directly."
        copy="Select the service that fits the property. The request form will open with that service ready to go."
        actions={
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
        }
      />

      <section className="service-detail-section services-action-section">
        <div className="section-header">
          <h2>Every service can be requested online.</h2>
          <a className="text-link" href="/request-service">
            Open request form
          </a>
        </div>
        <div className="service-detail-grid">
          {serviceDetails.map((service) => (
            <article className="service-detail-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.scope}</p>
              <a className="pill pill-blue service-card-action" href={serviceRequestHref(service.title)}>
                Request this service
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function RequestServicePage() {
  const [requestForm, setRequestForm] = useState(initialRequestFromUrl);
  const [requestStatus, setRequestStatus] = useState({
    state: "idle",
    message: "",
    reference: "",
  });

  const isSubmitting = requestStatus.state === "submitting";
  const requestSummary = useMemo(
    () =>
      [
        requestForm.service,
        requestForm.location,
        requestForm.frequency,
        requestForm.currentCondition,
      ].filter(Boolean),
    [
      requestForm.currentCondition,
      requestForm.frequency,
      requestForm.location,
      requestForm.service,
    ],
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
      setRequestForm(initialRequestFromUrl());
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
        title="Request a cleaning service."
        copy="Choose the service, add the property details, and Vibak will follow up with the next step."
      />
      <section className="process-band request-form-band">
        <div className="request-panel" aria-label="Request a cleaning service">
          <div className="request-copy">
            <p className="product-kicker">Service request</p>
            <h3>Tell us what you need.</h3>
            <p>
              Add your contact details, service, area, timing, and key property
              notes. The screening questions help Vibak confirm the right plan.
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

            <fieldset className="screening-fieldset">
              <legend>In-depth screening</legend>
              <p>
                These details help Vibak understand the property, access, and cleaning
                priorities before accepting or arranging the visit.
              </p>
              <div className="form-grid">
                <label>
                  Rooms / bedrooms
                  <select name="roomCount" value={requestForm.roomCount} onChange={updateRequest}>
                    {roomCounts.map((roomCount) => (
                      <option key={roomCount}>{roomCount}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Bathrooms
                  <select
                    name="bathroomCount"
                    value={requestForm.bathroomCount}
                    onChange={updateRequest}
                  >
                    {bathroomCounts.map((bathroomCount) => (
                      <option key={bathroomCount}>{bathroomCount}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Property size
                  <select
                    name="propertySize"
                    value={requestForm.propertySize}
                    onChange={updateRequest}
                  >
                    {propertySizes.map((propertySize) => (
                      <option key={propertySize}>{propertySize}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Current condition
                  <select
                    name="currentCondition"
                    value={requestForm.currentCondition}
                    onChange={updateRequest}
                  >
                    {conditionLevels.map((condition) => (
                      <option key={condition}>{condition}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Access method
                  <select
                    name="accessMethod"
                    value={requestForm.accessMethod}
                    onChange={updateRequest}
                  >
                    {accessMethods.map((accessMethod) => (
                      <option key={accessMethod}>{accessMethod}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Products and equipment
                  <select name="supplies" value={requestForm.supplies} onChange={updateRequest}>
                    {supplyOptions.map((supplyOption) => (
                      <option key={supplyOption}>{supplyOption}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Parking or access notes
                <input
                  name="parkingAccess"
                  value={requestForm.parkingAccess}
                  onChange={updateRequest}
                  placeholder="Parking, entry, stairs, lift, key safe, or reception details"
                />
              </label>
              <label>
                Priority areas
                <textarea
                  name="priorityAreas"
                  value={requestForm.priorityAreas}
                  onChange={updateRequest}
                  placeholder="List the rooms, surfaces, or jobs that matter most."
                  rows="4"
                />
              </label>
              <label>
                Pets, fragile items, or safety notes
                <textarea
                  name="screeningNotes"
                  value={requestForm.screeningNotes}
                  onChange={updateRequest}
                  placeholder="Mention pets, alarms, delicate materials, restricted areas, or anything the cleaner should know."
                  rows="4"
                />
              </label>
            </fieldset>

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
                placeholder="Add anything else Vibak should know before following up."
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
        title="Local cleaning shaped around real homes and workplaces."
        copy="Vibak Cleaning Services is built around clear communication, careful work, and practical cleaning plans for each space."
        actions={
          <a className="pill pill-blue hero-pill" href="/request-service">
            Request a service
          </a>
        }
      />
      <section className="editorial-section">
        <div className="editorial-copy">
          <p className="product-kicker">Our commitment</p>
          <h2>We listen first, then clean with care.</h2>
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
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Questions before booking? Start here."
        copy="Request a service when you are ready, or check the quick answers below."
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
          {faqs.slice(0, 3).map((faq) => (
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
