import "../styles/Features.css"

export default function Features() {
  return (
    <section className="features" id="features">
      <h2>Why Sammunat?</h2>
      <div className="feature-grid">
        <div className="card">
          <div className="card-header">Web & Application Development</div>
          <p>We design and develop responsive, high-performance web applications tailored to business needs.</p>
        </div>
        <div className="card">
          <div className="card-header">Secure & Reliable</div>
          <p>Enterprise-grade security and reliability with 99.9% uptime guarantee for all our solutions.</p>
        </div>
        <div className="card">
          <div className="card-header">Growth-Focused Solutions</div>
          <p>Scalable technology solutions designed to grow with your business and maximize ROI.</p>
        </div>
      </div>
    </section>
  )
}
