import "../styles/HowItWorks.css"

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="hiw-container">
        <h2 className="hiw-title">How It Works</h2>
        <p className="hiw-subtitle">
          Our streamlined process ensures successful delivery from concept to launch
        </p>
        
        <div className="hiw-timeline">
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <h3>Discovery & Planning</h3>
              <p>We analyze your business needs, define goals, and create a comprehensive roadmap for success.</p>
            </div>
          </div>
          
          <div className="timeline-connector"></div>
          
          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <h3>Design & Prototype</h3>
              <p>Our designers craft intuitive interfaces and interactive prototypes for your approval.</p>
            </div>
          </div>
          
          <div className="timeline-connector"></div>
          
          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <h3>Development</h3>
              <p>Expert developers build your solution using cutting-edge technologies and best practices.</p>
            </div>
          </div>
          
          <div className="timeline-connector"></div>
          
          <div className="timeline-item">
            <div className="timeline-number">4</div>
            <div className="timeline-content">
              <h3>Testing & QA</h3>
              <p>Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.</p>
            </div>
          </div>
          
          <div className="timeline-connector"></div>
          
          <div className="timeline-item">
            <div className="timeline-number">5</div>
            <div className="timeline-content">
              <h3>Launch & Support</h3>
              <p>We deploy your solution and provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
        
        <div className="hiw-cta">
          <h3>Ready to Get Started?</h3>
          <p>Let's bring your vision to life with our proven process</p>
          <button className="hiw-btn">Start Your Project</button>
        </div>
      </div>
    </section>
  )
}
