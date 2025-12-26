import "../styles/Contact.css"

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's discuss how we can help your business grow.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              
              <h3>Email</h3>
              <p>info@sammunat.com</p>
              <p>support@sammunat.com</p>
            </div>
            <div className="info-card">
             
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri, 9AM-6PM EST</p>
            </div>
            <div className="info-card">
            
              <h3>Location</h3>
              <p>123 Business Ave</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="form-input"
                required
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="form-input full-width"
              required
            />
            <textarea 
              placeholder="Your Message" 
              className="form-textarea"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
