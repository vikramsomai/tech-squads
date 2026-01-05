import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  ArrowUpRight, 
  Star, 
  Zap, 
  Rocket, 
  Smartphone, 
  Globe, 
  Bot, 
  Cloud, 
  Palette, 
  Server,
  Target,
  PenTool,
  Code,
  CheckCircle
} from 'lucide-react'

const services = [
  { id: 1, icon: Smartphone, title: 'Mobile Development', desc: 'iOS & Android apps that users love', link: '/services/mobile-app-development', color: '#c8ff00' },
  { id: 2, icon: Globe, title: 'Web Development', desc: 'Fast, modern web applications', link: '/services/web-development', color: '#a855f7' },
  { id: 3, icon: Bot, title: 'AI Solutions', desc: 'Intelligent automation & ML', link: '/services/ai-ml-solutions', color: '#3b82f6' },
  { id: 4, icon: Cloud, title: 'Cloud & DevOps', desc: 'Scalable infrastructure', link: '/services/cloud-solutions', color: '#ec4899' },
  { id: 5, icon: Palette, title: 'UI/UX Design', desc: 'Beautiful user experiences', link: '/services/ui-ux-design', color: '#f97316' },
  { id: 6, icon: Server, title: 'Backend Systems', desc: 'Robust APIs & microservices', link: '/services/backend-development', color: '#14b8a6' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]

const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'AWS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'TensorFlow']

const testimonials = [
  { id: 1, text: "TechSquad transformed our business with a cutting-edge mobile app. Their expertise and dedication are unmatched.", author: "Sarah Johnson", role: "CEO, TechStart", avatar: "SJ" },
  { id: 2, text: "Professional, innovative, and always delivering beyond expectations. Highly recommend for any tech project.", author: "Michael Chen", role: "Founder, InnovateLab", avatar: "MC" },
  { id: 3, text: "The best development partner we've worked with. They truly understand modern technology and design.", author: "Emily Davis", role: "CTO, DataFlow", avatar: "ED" }
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and requirements', icon: Target },
  { num: '02', title: 'Design', desc: 'Creating intuitive UI/UX and prototypes', icon: PenTool },
  { num: '03', title: 'Develop', desc: 'Building with clean, scalable code', icon: Code },
  { num: '04', title: 'Deploy', desc: 'Launch and ongoing support', icon: Rocket },
]

const useCountUp = (end: number, duration: number = 2000, start: boolean = true) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])
  
  return count
}

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const projectCount = useCountUp(50, 2000, true)
  const clientCount = useCountUp(30, 2000, true)

  return (
    <div className="home-page">
      {/* Hero Section - Bento Style */}
      <section className="hero-bento">
        <div className="hero-bg-effects">
          <div className="grid-pattern"></div>
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>

        <div className="container">
          <div className="bento-grid">
            {/* Main Hero Card */}
            <div className="bento-card bento-hero">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                Available for Projects
              </div>
              <h1>
                We Build
                <span className="text-gradient"> Digital </span>
                Products That
                <span className="text-gradient"> Matter</span>
              </h1>
              <p>
                A team of passionate developers and designers crafting exceptional 
                digital experiences. From mobile apps to AI solutions.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-modern btn-primary-modern">
                  Start a Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-modern btn-ghost-modern">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bento-card bento-stats">
              <div className="stat-item">
                <span className="stat-value">{projectCount}+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">{clientCount}+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>

            {/* Tagline Card */}
            <div className="bento-card bento-tagline">
              <span className="tagline-icon"><Zap size={28} /></span>
              <p>Where Development Meets Artificial Intelligence</p>
            </div>

            {/* Rating Card */}
            <div className="bento-card bento-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="rating-text">5.0 on Clutch</span>
              <div className="rating-avatars">
                <div className="avatar">JD</div>
                <div className="avatar">AK</div>
                <div className="avatar">MR</div>
                <span className="avatar-more">+27</span>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="bento-card bento-tech">
              <h3>Our Stack</h3>
              <div className="tech-scroll">
                <div className="tech-track">
                  {[...techStack, ...techStack].map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bento-card bento-cta">
              <span className="cta-emoji"><Rocket size={32} /></span>
              <h3>Ready to Launch?</h3>
              <Link to="/contact" className="btn-icon">
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-bento">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              Our Services
            </div>
            <h2>What We <span className="highlight">Build</span></h2>
            <p>End-to-end digital solutions tailored to your business needs</p>
          </div>

          <div className="services-grid-modern">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.link} 
                className="service-card-modern"
                style={{ '--accent': service.color } as React.CSSProperties}
              >
                <div className="service-header">
                  <span className="service-icon-modern"><service.icon size={32} /></span>
                  <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            ))}
          </div>

          <div className="services-cta-modern">
            <Link to="/services" className="btn-modern btn-outline-modern">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section className="about-bento">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-label">
                <span className="label-dot"></span>
                About Us
              </div>
              <h2>
                We're Not Just Developers,
                <br />
                We're Your <span className="text-gradient">Tech Partners</span>
              </h2>
              <p className="about-desc">
                TechSquad is a team of passionate technologists dedicated to transforming 
                ideas into exceptional digital products. We combine cutting-edge technology 
                with creative design to deliver solutions that drive real business results.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-check"><CheckCircle size={18} /></span>
                  <span>5+ Years of Experience</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check"><CheckCircle size={18} /></span>
                  <span>50+ Successful Projects</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check"><CheckCircle size={18} /></span>
                  <span>100% Client Satisfaction</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check"><CheckCircle size={18} /></span>
                  <span>24/7 Support Available</span>
                </div>
              </div>
              <Link to="/about" className="btn-modern btn-primary-modern">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            <div className="stats-bento-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-modern">
                  <span className="stat-value-modern">{stat.value}</span>
                  <span className="stat-label-modern">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              Testimonials
            </div>
            <h2>What Our <span className="highlight">Clients Say</span></h2>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card-modern">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonials[activeTestimonial].avatar}</div>
                <div className="author-info">
                  <span className="author-name">{testimonials[activeTestimonial].author}</span>
                  <span className="author-role">{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section-modern">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              Our Process
            </div>
            <h2>How We <span className="highlight">Work</span></h2>
          </div>

          <div className="process-grid-modern">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card-modern">
                <div className="process-icon"><step.icon size={32} /></div>
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-modern">
        <div className="container">
          <div className="cta-card-modern">
            <div className="cta-bg-grid"></div>
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h2>Let's Build Something <span className="text-gradient">Amazing</span> Together</h2>
              <p>Have a project in mind? We'd love to hear about it. Get in touch and let's create something extraordinary.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-modern btn-dark-modern">
                  Start a Project <ArrowRight size={18} />
                </Link>
                <a href="mailto:techsquadmanaging@gmail.com" className="btn-modern btn-outline-dark">
                  techsquadmanaging@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
