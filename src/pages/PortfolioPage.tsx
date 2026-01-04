import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Bot, 
  Heart, 
  ShoppingCart, 
  BookOpen, 
  Car, 
  Landmark, 
  UtensilsCrossed, 
  Home, 
  Gamepad2 
} from 'lucide-react'

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  ai: Bot
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A comprehensive e-commerce solution with inventory management, payment processing, and real-time analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: '#00d4ff'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'mobile',
    description: 'Patient management and telemedicine app with appointment scheduling, video consultations, and health tracking.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
    color: '#10b981'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics',
    category: 'ai',
    description: 'Machine learning platform for predictive analytics and business intelligence with automated reporting.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
    color: '#8b5cf6'
  },
  {
    id: 4,
    title: 'Restaurant POS System',
    category: 'web',
    description: 'Complete point-of-sale system with order management, inventory tracking, and staff scheduling.',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#f59e0b'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Comprehensive fitness app with workout plans, nutrition tracking, and social features.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    color: '#ef4444'
  },
  {
    id: 6,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Multi-tenant SaaS platform with subscription management, user analytics, and API integrations.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    color: '#06b6d4'
  },
  {
    id: 7,
    title: 'Logistics Management',
    category: 'web',
    description: 'Fleet management system with real-time tracking, route optimization, and driver management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    color: '#84cc16'
  },
  {
    id: 8,
    title: 'EdTech Platform',
    category: 'mobile',
    description: 'Interactive learning platform with video courses, quizzes, and progress tracking for students.',
    technologies: ['React Native', 'Firebase', 'Stripe', 'AWS'],
    color: '#ec4899'
  },
  {
    id: 9,
    title: 'Chatbot Solution',
    category: 'ai',
    description: 'AI-powered customer service chatbot with natural language processing and CRM integration.',
    technologies: ['Python', 'OpenAI', 'LangChain', 'React', 'FastAPI'],
    color: '#6366f1'
  }
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'AI & ML' }
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const openProject = projects.find(p => p.id === selectedProject)

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Portfolio</span>
          <h1>Explore Our <span className="highlight">Work Expertise</span></h1>
          <p className="page-hero-subtitle">
            We really love what we do! Take a look at our special solutions that focus on customers. These are some of our best projects showcasing our capabilities.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="portfolio-card"
                onClick={() => setSelectedProject(project.id)}
                style={{ '--accent-color': project.color } as React.CSSProperties}
              >
                <div className="portfolio-card-header">
                  <div className="portfolio-icon" style={{ background: project.color }}>
                    {(() => {
                      const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons]
                      return IconComponent ? <IconComponent size={24} /> : null
                    })()}
                  </div>
                  <span className="portfolio-category">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tech">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <button className="portfolio-link">
                  View Details <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && openProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header" style={{ background: openProject.color }}>
              <span className="modal-category">
                {categories.find(c => c.id === openProject.category)?.name}
              </span>
              <h2>{openProject.title}</h2>
            </div>
            <div className="modal-body">
              <p>{openProject.description}</p>
              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {openProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Start a Similar Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries</span>
            <h2>Industries We <span className="highlight">Serve</span></h2>
            <p>We have experience across various industries, delivering tailored solutions for each.</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <span className="industry-icon"><Heart size={28} /></span>
              <h3>Healthcare</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><ShoppingCart size={28} /></span>
              <h3>E-Commerce</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><BookOpen size={28} /></span>
              <h3>Education</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><Car size={28} /></span>
              <h3>Transportation</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><Landmark size={28} /></span>
              <h3>Finance</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><UtensilsCrossed size={28} /></span>
              <h3>Food & Restaurant</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><Home size={28} /></span>
              <h3>Real Estate</h3>
            </div>
            <div className="industry-card">
              <span className="industry-icon"><Gamepad2 size={28} /></span>
              <h3>Entertainment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Discuss Your <span className="highlight">Project</span></h2>
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

export default PortfolioPage
