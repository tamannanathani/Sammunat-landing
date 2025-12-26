import "../styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Building Digital Solutions for Modern Businesses</h1>
        <p>
          Sammunat LLC is a global IT and digital services company helping businesses grow through innovative
          technology, scalable web solutions, and creative digital experiences.
        </p>
        <div className="hero-buttons">
          <button className="cta-btn primary">Get Started</button>
          <button className="cta-btn secondary">Contact Us</button>
        </div>
      </div>
      <div className="liquid-bg">
        <div className="liquid-shape liquid-1"></div>
        <div className="liquid-shape liquid-2"></div>
        <div className="liquid-shape liquid-3"></div>
      </div>
    </section>
  )
}
