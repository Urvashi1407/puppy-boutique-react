import { useEffect, useState } from "react";
import "./App.css";

const puppies = [
  {
    id: 1,
    name: "Bella",
    breed: "Toy Poodle",
    age: "3 months",
    gender: "Female",
    coat: "Cream",
    price: "AED 4,500",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85",
    description:
      "A sweet, playful little companion who loves cuddles, attention, and spending time with her favourite people.",
  },
  {
    id: 2,
    name: "Milo",
    breed: "Pomeranian",
    age: "2 months",
    gender: "Male",
    coat: "Golden",
    price: "AED 5,000",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    description:
      "A fluffy bundle of happiness with a curious personality and a big heart. Milo is ready to meet his future family.",
  },
  {
    id: 3,
    name: "Coco",
    breed: "Maltese",
    age: "3 months",
    gender: "Female",
    coat: "White",
    price: "AED 4,800",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
    description:
      "A gentle little sweetheart who brings warmth and joy to every room. Ask us about her care and health records.",
  },
  {
    id: 4,
    name: "Teddy",
    breed: "Cavapoo",
    age: "2 months",
    gender: "Male",
    coat: "Apricot",
    price: "AED 5,500",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85",
    description:
      "A friendly, adorable companion with a lovely teddy-bear look. Teddy would love to find a caring forever home.",
  },
];

const waLink =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "Hello PupNest! I would love to know more about your available puppies.",
  );

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="PupNest home">
        <span className="logo-icon">♡</span>
        <span>PupNest</span>
        <small>THE LITTLE PAW BOUTIQUE</small>
      </a>

      <nav className="main-nav">
        <a href="#top">Home</a>
        <a href="#puppies">Our Puppies</a>
        <a href="#journey">Our Process</a>
        <a href="#about">About Us</a>
      </nav>

      <a
        className="btn header-btn"
        href={waLink}
        target="_blank"
        rel="noreferrer"
      >
        Let's Talk ♡
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero2" id="top">
      <div className="paws" aria-hidden="true">
        ♡　🐾　♡
      </div>

      <div className="hero-heading">
        <p className="hand">a little love goes a long way</p>

        <h1 className="hero-title">
          Where Little Paws
          <br />
          Meet Big Love <span>♡</span>
        </h1>

        <p className="hero-intro">
          Tiny paws, endless love, and a lifetime of happy memories.
        </p>
      </div>

      <div className="wrap hc">
        <p className="eyebrow">YOUR PUPPY STORY STARTS HERE</p>

        <h2>Premium Puppies in Dubai</h2>

        <p className="lead">
          Meet your new best friend. Explore our adorable puppies and let us
          help you find a loving companion for your family.
        </p>

        <div className="hero-buttons">
          <a className="btn" href="#puppies">
            Meet Our Puppies →
          </a>

          <a className="btn alt" href={waLink} target="_blank" rel="noreferrer">
            Enquire on WhatsApp ♡
          </a>
        </div>
      </div>

      <div className="strip">
        {puppies.map((puppy) => (
          <a className="arch" href="#puppies" key={puppy.id}>
            <img src={puppy.image} alt={puppy.name} />
          </a>
        ))}
      </div>

      <div className="scallop" />
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-label="Puppy boutique highlights">
      <div className="marquee-track">
        {Array.from({ length: 2 }, (_, index) => (
          <span key={index}>
            LITTLE PAWS <i>♡</i> BIG LOVE <i>✳</i> FOREVER FAMILY <i>♡</i>
            HAPPY TAILS <i>✳</i> LITTLE PAWS <i>♡</i> BIG LOVE <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div>
        <strong>♡</strong>
        <h3>Love First</h3>
        <p>Every puppy deserves a loving home.</p>
      </div>

      <div>
        <strong>✳</strong>
        <h3>Personal Care</h3>
        <p>Guidance for your puppy journey.</p>
      </div>

      <div>
        <strong>🐾</strong>
        <h3>Forever Friends</h3>
        <p>Helping you find your perfect companion.</p>
      </div>
    </section>
  );
}

function PuppyDetails({ puppy, onClose }) {
  useEffect(() => {
    if (!puppy) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [puppy, onClose]);

  if (!puppy) return null;

  const enquiryMessage = encodeURIComponent(
    `Hello PupNest! I am interested in ${puppy.name}, the ${puppy.breed}. Please share the availability, health records, vaccination information, and other details.`,
  );

  return (
    <div className="puppy-modal" onClick={onClose} role="presentation">
      <div
        className="puppy-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="puppy-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="puppy-modal-close"
          onClick={onClose}
          aria-label="Close puppy information"
        >
          ×
        </button>

        <img className="puppy-modal-image" src={puppy.image} alt={puppy.name} />

        <div className="puppy-modal-info">
          <p className="eyebrow">A NEW FRIEND IS WAITING</p>

          <h2 id="puppy-modal-title">{puppy.name} ♡</h2>

          <p className="puppy-modal-breed">{puppy.breed}</p>

          <h3 className="puppy-modal-price">{puppy.price}</h3>

          <div className="puppy-detail-grid">
            <div>
              <span>Age</span>
              <strong>{puppy.age}</strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>{puppy.gender}</strong>
            </div>

            <div>
              <span>Coat colour</span>
              <strong>{puppy.coat}</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>Ask us</strong>
            </div>
          </div>

          <p className="puppy-description">{puppy.description}</p>

          <p className="puppy-health-note">
            Contact us to confirm current availability and request the puppy's
            health and vaccination records.
          </p>

          <a
            className="btn"
            href={`https://wa.me/?text=${enquiryMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Enquire About {puppy.name} ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function Puppies() {
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  return (
    <section className="puppies section-pad" id="puppies">
      <div className="section-heading">
        <p className="eyebrow">SMALL PAWS, HUGE PERSONALITIES</p>

        <h2>
          Meet Your <span>New Best Friend</span>
        </h2>

        <p>
          Every little face has a story. Click on any puppy to meet them and
          discover more details.
        </p>
      </div>

      <div className="puppy-grid">
        {puppies.map((puppy) => (
          <article className="puppy-card" key={puppy.id}>
            <button
              type="button"
              className="puppy-photo-button"
              onClick={() => setSelectedPuppy(puppy)}
              aria-label={`View details for ${puppy.name}`}
            >
              <img src={puppy.image} alt={puppy.name} />

              <span className="puppy-photo-heart">♡</span>

              <span className="puppy-view-label">Meet {puppy.name} ↗</span>
            </button>

            <div className="puppy-card-info">
              <div className="puppy-card-top">
                <div>
                  <h3>{puppy.name}</h3>
                  <p>{puppy.breed}</p>
                </div>

                <span className="puppy-heart">♡</span>
              </div>

              <p className="puppy-meta">
                {puppy.age} <span>·</span> {puppy.gender}
              </p>

              <div className="puppy-card-bottom">
                <strong>{puppy.price}</strong>

                <button
                  type="button"
                  className="puppy-details-btn"
                  onClick={() => setSelectedPuppy(puppy)}
                >
                  View Details →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="puppy-more">
        <p>Looking for a different breed?</p>
        <a className="btn" href={waLink} target="_blank" rel="noreferrer">
          Ask About Available Puppies ♡
        </a>
      </div>

      <PuppyDetails
        puppy={selectedPuppy}
        onClose={() => setSelectedPuppy(null)}
      />
    </section>
  );
}

function Ways() {
  return (
    <section className="ways section-pad" id="about">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE SOMETHING SPECIAL</p>

        <h2>
          More Than a Puppy.
          <br />
          <span>A Lifetime of Love.</span>
        </h2>

        <p>
          Finding a companion is a special moment. We're here to help make your
          puppy journey feel thoughtful and comfortable.
        </p>
      </div>

      <div className="ways-grid">
        <article className="way-card">
          <span className="way-icon">♡</span>
          <h3>Find Your Match</h3>
          <p>
            Tell us about your lifestyle and the kind of companion you're hoping
            to welcome into your home.
          </p>
        </article>

        <article className="way-card">
          <span className="way-icon">🐾</span>
          <h3>Get to Know Them</h3>
          <p>
            Ask questions about temperament, care needs, health records, and the
            puppy's background.
          </p>
        </article>

        <article className="way-card">
          <span className="way-icon">✿</span>
          <h3>Start Your Story</h3>
          <p>
            Get guidance on preparing your home and giving your new family
            member a happy beginning.
          </p>
        </article>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      number: "01",
      title: "Say Hello",
      description:
        "Tell us what you're looking for and what life with your new puppy will look like.",
    },
    {
      number: "02",
      title: "Meet Your Match",
      description:
        "Explore available puppies and ask questions about their care, temperament, and health.",
    },
    {
      number: "03",
      title: "Welcome Home",
      description:
        "Prepare for your new family member with thoughtful guidance and puppy essentials.",
    },
  ];

  return (
    <section className="journey section-pad" id="journey">
      <div className="journey-heading">
        <p className="eyebrow">THREE LITTLE STEPS</p>

        <h2>
          Your Puppy Story
          <br />
          <span>Starts Here</span> ♡
        </h2>

        <p>
          A new best friend, a happy home, and a whole lot of love. Let's make
          the beginning beautiful.
        </p>
      </div>

      <div className="journey-grid">
        {steps.map((step) => (
          <article className="journey-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <div className="journey-card-heart">♡</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="journey-cta">
        <p>Ready to meet your little companion?</p>
        <a className="btn" href="#puppies">
          Find Your Puppy →
        </a>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust section-pad">
      <div className="trust-inner">
        <div>
          <p className="eyebrow">A FRIENDLY REMINDER</p>
          <h2>Little paws need big responsibility.</h2>
          <p>
            Bringing home a puppy is a long-term commitment. Ask about health
            documentation, vaccinations, breed needs, and ongoing care before
            making your decision.
          </p>

          <a className="btn" href={waLink} target="_blank" rel="noreferrer">
            Ask Us Anything ♡
          </a>
        </div>

        <div className="trust-decoration" aria-hidden="true">
          <span>♡</span>
          <span>🐾</span>
          <span>♡</span>
        </div>
      </div>
    </section>
  );
}

function Families() {
  return (
    <section className="families section-pad">
      <div className="section-heading">
        <p className="eyebrow">LOVE MAKES A FAMILY</p>

        <h2>
          Room for One
          <br />
          <span>More Little Paw?</span>
        </h2>

        <p>
          Your next adventure might come with four tiny paws and a wagging tail.
        </p>
      </div>

      <div className="family-image">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=85"
          alt="Two dogs enjoying time together outdoors"
        />

        <div className="family-image-caption">
          <span>More cuddles.</span>
          <span>More joy.</span>
          <span>More love. ♡</span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    {
      question: "How can I learn more about a puppy?",
      answer:
        "Click any puppy card to see its listed details, then contact us to ask about availability, health records, and care requirements.",
    },
    {
      question: "Can I ask about a particular breed?",
      answer:
        "Yes. Send us a WhatsApp enquiry mentioning your preferred breed, and ask which puppies are currently available.",
    },
    {
      question: "What should I check before welcoming a puppy?",
      answer:
        "Ask for veterinary records, vaccination and deworming history, age, background, and advice on food and ongoing care.",
    },
  ];

  return (
    <section className="faq section-pad">
      <div className="section-heading">
        <p className="eyebrow">GOOD QUESTIONS, HAPPY BEGINNINGS</p>
        <h2>Just a Few Little Things</h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span className="faq-plus">{index === 0 ? "+" : "+"}</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="cta">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1500&q=85"
            alt="An adorable puppy waiting to meet its new family"
          />

          <div className="cta-overlay" />

          <div className="cta-content">
            <p className="eyebrow">YOUR FOREVER FRIEND IS WAITING</p>

            <h2>
              One Little Paw.
              <br />A Million Little Memories.
            </h2>

            <p>
              Your story together could start today. Let's find the little
              companion who feels like home.
            </p>

            <a className="btn" href="#puppies">
              Meet the Puppies ♡
            </a>

            <a
              className="btn alt"
              href={waLink}
              target="_blank"
              rel="noreferrer"
            >
              Let's Chat ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#top">
            <span>♡</span> PupNest
          </a>

          <p className="footer-tagline">A LITTLE PAW. A LOT OF LOVE.</p>

          <p>
            Celebrating the beautiful bond between people and their four-legged
            family members.
          </p>

          <a
            className="footer-contact-link"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            Let's talk about puppies ↗
          </a>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#top">Home</a>
          <a href="#puppies">Meet Our Puppies</a>
          <a href="#about">Our Story</a>
          <a href="#journey">How It Works</a>
        </div>

        <div className="footer-links">
          <h3>Get in Touch</h3>
          <a href={waLink} target="_blank" rel="noreferrer">
            WhatsApp Enquiries ↗
          </a>
          <a href="#puppies">Puppy Availability</a>
          <a href="#contact">Contact Us</a>
          <p>Dubai, UAE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PupNest. Made with love ♡</p>
        <a href="#top">Back to the top ↑</a>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
      title="Chat with us"
    >
      ♡
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Puppies />
        <Ways />
        <Journey />
        <Trust />
        <Families />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
