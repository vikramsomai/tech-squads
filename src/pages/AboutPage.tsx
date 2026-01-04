import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  Lightbulb, 
  Users, 
  Search, 
  MessageSquare, 
  Zap,
  Award,
  Shield,
  Clock,
  Headphones,
  DollarSign,
  Eye
} from 'lucide-react'

const values = [
  "We become part of the client's business",
  "We show respect and honesty towards our clients",
  "We create software solutions, not just write code",
  "We foster personal responsibility",
  "We take responsibility for what we undertake",
  "Details matter to us",
  "We systematically develop ourselves to achieve better results",
  "We are not afraid to take on new and unknown challenges",
  "We work and rest to our full potential",
  "We care about people within the company and beyond",
  "We build clear and respectful relationships",
  "We uphold work and life balance"
]

const teamQualities = [
  { icon: Target, title: 'Adaptability', desc: 'Quick to adapt to new technologies and changing requirements' },
  { icon: Lightbulb, title: 'Innovative Problem Solvers', desc: 'Creative solutions for complex challenges' },
  { icon: Users, title: 'Team Players', desc: 'Collaborative approach to every project' },
  { icon: Search, title: 'Detail-Oriented', desc: 'Meticulous attention to every detail' },
  { icon: MessageSquare, title: 'Effective Communicators', desc: 'Clear and consistent communication' },
  { icon: Zap, title: 'Technical Proficiency', desc: 'Expertise in cutting-edge technologies' },
]

const reasons = [
  { icon: Award, title: 'Expert Team', desc: 'Our team consists of skilled professionals with expertise in various technologies and domains.' },
  { icon: Shield, title: 'Quality Focused', desc: 'We maintain high standards in everything we do, ensuring top-quality deliverables.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'We value your time and always strive to deliver projects on schedule.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock support to address your queries and concerns.' },
  { icon: DollarSign, title: 'Cost Effective', desc: 'Premium quality services at competitive prices for maximum ROI.' },
  { icon: Eye, title: 'Transparent Process', desc: 'Complete transparency in our processes, keeping you informed at every step.' },
]

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">About Us</span>
          <h1>We're TechSquad. We Build <span className="highlight">Digital Excellence</span>.</h1>
          <p className="page-hero-subtitle">
            Technology and people. Powerful innovations and sharp business minds help the world break boundaries, drive progress, and create real value.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-row">
            <div className="stat-card large">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card large">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card large">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card large">
              <div className="stat-number">15+</div>
              <div className="stat-label">Dedicated Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-tag">Our Story</span>
              <h2>From Vision to <span className="highlight">Reality</span></h2>
              <p>
                Every ambition starts with a vision. Our vision was clear – to build a technology-driven future where innovation meets impact. With combined expertise and passion for problem-solving, we embarked on this journey.
              </p>
              <p>
                In the beginning, we focused on building mobile app products. As opportunities grew, we expanded into services, taking on real-world challenges and helping businesses scale through software solutions. With dedication and a growing team, we transformed our startup into a powerhouse of innovation.
              </p>
              <p>
                Today, TechSquad has become a leading technology partner, helping brands and businesses digitalize and increase their revenue growth. What sets us apart is our ability to think beyond the present and anticipate the future.
              </p>
              <p>
                We don't believe in one-size-fits-all solutions. Instead, we work closely with businesses, understand their pain points, challenges, and goals to create technology that not only works but transforms.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-card">
                <h3>Our Mission</h3>
                <p>Fulfilling clients' requirements to have long-term relationships. Set constant innovation as our key for achieving the ultimate goal of success.</p>
              </div>
              <div className="story-card">
                <h3>Our Vision</h3>
                <p>Emerge as a global company by providing superior quality services and solutions that transform businesses digitally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2>What We <span className="highlight">Stand For</span></h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Qualities Section */}
      <section className="team-qualities">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2>Dedicated Development <span className="highlight">Team</span></h2>
            <p>When you choose TechSquad, you're not just hiring a development team; you're partnering with professionals who have strong proficiency in the latest technologies.</p>
          </div>
          <div className="qualities-grid">
            {teamQualities.map((quality, index) => (
              <div key={index} className="quality-card">
                <div className="quality-icon"><quality.icon size={28} /></div>
                <h3>{quality.title}</h3>
                <p>{quality.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why TechSquad</span>
            <h2>Why Choose <span className="highlight">Us</span></h2>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon"><reason.icon size={24} /></div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Partner with us to turn your ideas into <span className="highlight">reality</span></h2>
            <p>Work with us for smart, cost-effective solutions, smooth processes, and on-time delivery of your software projects.</p>
            <Link to="/contact" className="btn btn-primary">
              Get a Custom Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
