import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Server, 
  Palette, 
  Cloud, 
  Bot, 
  Wrench, 
  Users,
  Check
} from 'lucide-react'

const services = [
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Custom iOS, Android & Cross-Platform Apps',
    description: 'We specialize in mobile applications for iPhone, iPad, and Android using the latest tech, tools, and SDKs. The world relies on mobile apps, join us to make great ones with a superb user experience.',
    features: [
      'iOS App Development (Swift, SwiftUI)',
      'Android App Development (Kotlin, Java)',
      'Cross-Platform Apps (React Native, Flutter)',
      'Hybrid App Development',
      'Progressive Web Apps (PWA)',
      'App Migration & Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Capacitor']
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Application Development',
    shortDesc: 'Scalable & Secure Web Solutions',
    description: 'Our secure web application development solution fits business plans. We work together and grasp customer needs to unlock value and create future-ready capabilities.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Enterprise Web Portals',
      'Content Management Systems',
      'API Development & Integration',
      'Single Page Applications (SPA)'
    ],
    technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Development',
    shortDesc: 'Robust Server-Side Solutions',
    description: 'We build robust, secure, and scalable systems that ensure everything runs smoothly even under the most demanding workloads so your business stays fast, reliable, and always ready to grow.',
    features: [
      'RESTful API Development',
      'GraphQL Implementation',
      'Microservices Architecture',
      'Database Design & Optimization',
      'Authentication & Security',
      'Third-party Integrations'
    ],
    technologies: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'User-Centric Design Solutions',
    description: 'We understand that exceptional UI/UX design are mandatory to the success of any digital product. That\'s why we offer comprehensive user-friendly design services.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Interaction Design',
      'Usability Testing',
      'Design System Creation'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    shortDesc: 'Infrastructure & Deployment',
    description: 'We ensure smooth operations, scalability, and optimized performance with continuous monitoring, automation, and comprehensive support for deployments and product launches.',
    features: [
      'Cloud Migration & Setup',
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging',
      '24/7 Support & Maintenance'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & ML Development',
    shortDesc: 'Intelligent Solutions',
    description: 'We offer AI and ML consulting for product development and business improvement, turning ideas into products, streamlining operations with ML, and enhancing profits through AI expertise.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Chatbots & Assistants',
      'LLM Integration & Fine-tuning'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face', 'scikit-learn']
  },
  {
    id: 'support',
    icon: Wrench,
    title: 'Support & Maintenance',
    shortDesc: 'Ongoing Technical Support',
    description: 'Ensure your IT products run smoothly with continuous maintenance and comprehensive support for new product launches. Our dedicated team is here to assist you at every stage.',
    features: [
      'Bug Fixes & Updates',
      'Performance Optimization',
      'Security Patches',
      'Feature Enhancements',
      'Technical Documentation',
      'Dedicated Support Team'
    ],
    technologies: ['24/7 Monitoring', 'Issue Tracking', 'Version Control', 'Automated Testing']
  },
  {
    id: 'hire',
    icon: Users,
    title: 'Hire Dedicated Developers',
    shortDesc: 'Extend Your Team',
    description: 'TechSquad offers flexible options to hire dedicated development teams or expert developers to bridge the IT talent gap with skilled professionals.',
    features: [
      'Full-time Dedicated Resources',
      'Part-time Engagement',
      'Project-based Hiring',
      'Team Augmentation',
      'Flexible Scaling',
      'Direct Communication'
    ],
    technologies: ['All Technologies', 'Flexible Terms', 'NDA Protected', 'Daily Updates']
  }
]

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('mobile')

  const currentService = services.find(s => s.id === activeService)

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Services</span>
          <h1>End-to-End <span className="highlight">IT Solutions</span> for Your Business</h1>
          <p className="page-hero-subtitle">
            Offer your business the best assistance for growth with our comprehensive range of professional IT services.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="services-tabs">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <span className="tab-icon"><service.icon size={20} /></span>
                <span className="tab-title">{service.title}</span>
              </button>
            ))}
          </div>

          {currentService && (
            <div className="service-detail">
              <div className="service-detail-header">
                <div className="service-detail-icon"><currentService.icon size={40} /></div>
                <div>
                  <h2>{currentService.title}</h2>
                  <p className="service-tagline">{currentService.shortDesc}</p>
                </div>
              </div>
              <p className="service-description">{currentService.description}</p>
              
              <div className="service-detail-content">
                <div className="service-features">
                  <h3>What We Offer</h3>
                  <ul>
                    {currentService.features.map((feature, index) => (
                      <li key={index}>
                        <span className="check-icon"><Check size={16} /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-technologies">
                  <h3>Technologies</h3>
                  <div className="tech-tags">
                    {currentService.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Get Started with {currentService.title} <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* All Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">All Services</span>
            <h2>Comprehensive <span className="highlight">Solutions</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="service-icon"><service.icon size={32} /></div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <button className="service-link">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>How We <span className="highlight">Work</span></h2>
            <p>A systematic approach to deliver quality solutions</p>
          </div>
          <div className="process-steps">
            <div className="process-step-card">
              <div className="step-num">01</div>
              <h3>Requirement Analysis</h3>
              <p>Understanding your needs, goals, and challenges in detail.</p>
            </div>
            <div className="process-step-card">
              <div className="step-num">02</div>
              <h3>Planning & Design</h3>
              <p>Creating wireframes, prototypes, and project roadmap.</p>
            </div>
            <div className="process-step-card">
              <div className="step-num">03</div>
              <h3>Development</h3>
              <p>Building your solution with clean, efficient code.</p>
            </div>
            <div className="process-step-card">
              <div className="step-num">04</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing to ensure quality and performance.</p>
            </div>
            <div className="process-step-card">
              <div className="step-num">05</div>
              <h3>Deployment</h3>
              <p>Smooth launch and deployment of your product.</p>
            </div>
            <div className="process-step-card">
              <div className="step-num">06</div>
              <h3>Support</h3>
              <p>Ongoing maintenance and technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your <span className="highlight">Project</span>?</h2>
            <p>Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
