import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Zap, CheckCircle } from 'lucide-react'

const services = [
  'Mobile App Development',
  'Web Application Development',
  'Backend Development',
  'UI/UX Design',
  'Cloud Solutions',
  'AI & ML Solutions',
  'Support & Maintenance',
  'Other'
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+'
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Contact Us</span>
          <h1>Let's <span className="highlight">Connect</span></h1>
          <p className="page-hero-subtitle">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              
              {submitted && (
                <div className="success-message">
                  <CheckCircle size={20} /> Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-page">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9274488477"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-sidebar">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels. We're here to help!</p>

                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4>Email Us</h4>
                      <a href="mailto:techsquadmanaging@gmail.com">techsquadmanaging@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4>Call Us</h4>
                      <a href="tel:+919274488477">+91 9274488477</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4>Our Office</h4>
                      <a href="https://www.google.com/maps/place/Nilkanth+Heights,+Sarthana+Jakat+Naka,+Shantivan-2,+Nana+Varachha,+Surat,+Gujarat+395013" target="_blank" rel="noopener noreferrer">
                        Nilkanth Heights, Sarthana Jakat Naka, Shantivan-2, Nana Varachha, Surat, Gujarat 395013
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4>Working Hours</h4>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-card">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media for updates and insights.</p>
                <div className="social-links-contact">
                  <a href="#" className="social-link-contact" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-contact" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-contact" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link-contact" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="quick-response-card">
                <div className="quick-response-icon"><Zap size={24} /></div>
                <h3>Quick Response</h3>
                <p>We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to build a project?</h3>
              <p>Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
            </div>
            <div className="faq-item">
              <h3>What is your development process?</h3>
              <p>We follow an agile methodology with regular sprints, demos, and feedback loops. This ensures transparency and allows for adjustments throughout the project lifecycle.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! We offer various support and maintenance packages to ensure your application runs smoothly post-launch. This includes bug fixes, updates, and feature enhancements.</p>
            </div>
            <div className="faq-item">
              <h3>What technologies do you specialize in?</h3>
              <p>We specialize in React, React Native, Node.js, Python, and various cloud platforms. We stay updated with the latest technologies to provide the best solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
