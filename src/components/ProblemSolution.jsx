import "../styles/ProblemSolution.css"

export default function ProblemSolution() {
  return (
    <section className="problem-solution">
      <div className="ps-container">
        <h2 className="ps-title">Transforming Challenges into Opportunities</h2>
        <p className="ps-subtitle">
          We understand the complexities businesses face in the digital landscape
        </p>
        
        <div className="ps-grid">
          <div className="ps-card problem">
            <div className="ps-icon problem-icon">⚠️</div>
            <h3>The Problem</h3>
            <ul className="ps-list">
              <li>Outdated technology limiting growth</li>
              <li>Inefficient manual processes</li>
              <li>Lack of scalable infrastructure</li>
              <li>Poor user experience</li>
              <li>Security vulnerabilities</li>
            </ul>
          </div>
          
          <div className="ps-arrow">→</div>
          
          <div className="ps-card solution">
            <div className="ps-icon solution-icon">✨</div>
            <h3>Our Solution</h3>
            <ul className="ps-list">
              <li>Modern, cutting-edge technology stack</li>
              <li>Automated workflows & processes</li>
              <li>Cloud-native scalable architecture</li>
              <li>Intuitive, user-centered design</li>
              <li>Enterprise-grade security</li>
            </ul>
          </div>
        </div>
        
        <div className="ps-stats">
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">200+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Expert Team</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
