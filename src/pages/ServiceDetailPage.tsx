import { useParams, Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Check, 
  Smartphone, 
  Globe, 
  Server, 
  Palette, 
  Cloud, 
  Bot, 
  RefreshCw, 
  Code
} from 'lucide-react'

const serviceIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'mobile-app-development': Smartphone,
  'web-development': Globe,
  'backend-development': Server,
  'ui-ux-design': Palette,
  'cloud-solutions': Cloud,
  'ai-ml-solutions': Bot,
  'devops': RefreshCw,
  'hire-developers': Code
}

const servicesData: Record<string, {
  title: string
  subtitle: string
  description: string
  color: string
  features: string[]
  technologies: string[]
  process: string[]
  benefits: { title: string; desc: string }[]
  useCases: string[]
}> = {
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Excellence',
    description: 'We build high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our expert team crafts scalable, secure, and feature-rich apps that drive business growth.',
    color: '#c8ff00',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform with React Native & Flutter',
      'Custom UI/UX Design for Mobile',
      'API Integration & Backend Services',
      'Real-time Features & Push Notifications',
      'App Store Optimization (ASO)',
      'Performance Optimization',
      'Ongoing Maintenance & Support'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'REST APIs'],
    process: ['Discovery & Planning', 'UI/UX Design', 'Development Sprints', 'Testing & QA', 'Deployment', 'Post-Launch Support'],
    benefits: [
      { title: 'Faster Time-to-Market', desc: 'Agile development approach for quick releases' },
      { title: 'Cost Effective', desc: 'Cross-platform solutions reduce development costs' },
      { title: 'Scalable Architecture', desc: 'Built to handle millions of users' },
      { title: '24/7 Support', desc: 'Dedicated team for ongoing maintenance' }
    ],
    useCases: ['E-Commerce Apps', 'Healthcare & Fitness', 'Food Delivery', 'Social Networking', 'Enterprise Solutions', 'EdTech Platforms']
  },
  'web-development': {
    title: 'Web Application Development',
    subtitle: 'Modern Web Solutions That Scale',
    description: 'Transform your business with cutting-edge web applications. We specialize in building responsive, fast, and secure web solutions using the latest technologies and best practices.',
    color: '#10b981',
    features: [
      'Custom Web Application Development',
      'Progressive Web Apps (PWA)',
      'E-Commerce Solutions',
      'Content Management Systems',
      'Single Page Applications (SPA)',
      'Enterprise Web Portals',
      'Third-party Integrations',
      'Performance & SEO Optimization'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    process: ['Requirements Analysis', 'Architecture Design', 'Frontend Development', 'Backend Development', 'Testing', 'Deployment & Monitoring'],
    benefits: [
      { title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
      { title: 'SEO Friendly', desc: 'Built with search engines in mind' },
      { title: 'Responsive Design', desc: 'Perfect on all devices and screens' },
      { title: 'Secure & Reliable', desc: 'Enterprise-grade security standards' }
    ],
    useCases: ['SaaS Platforms', 'E-Commerce Stores', 'Corporate Websites', 'Booking Systems', 'Dashboard & Analytics', 'Community Portals']
  },
  'backend-development': {
    title: 'Backend Development',
    subtitle: 'Robust & Scalable Server Solutions',
    description: 'Power your applications with rock-solid backend infrastructure. We design and develop scalable APIs, microservices, and database architectures that handle complex business logic efficiently.',
    color: '#8b5cf6',
    features: [
      'RESTful & GraphQL API Development',
      'Microservices Architecture',
      'Database Design & Optimization',
      'Real-time Data Processing',
      'Authentication & Authorization',
      'Third-party API Integrations',
      'Message Queues & Event Systems',
      'Caching & Performance Tuning'
    ],
    technologies: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Docker'],
    process: ['System Design', 'API Specification', 'Development', 'Unit Testing', 'Integration Testing', 'Performance Testing'],
    benefits: [
      { title: 'High Performance', desc: 'Optimized for handling heavy loads' },
      { title: 'Scalable Design', desc: 'Grows with your business needs' },
      { title: 'Clean Architecture', desc: 'Maintainable and extensible code' },
      { title: 'API Documentation', desc: 'Comprehensive API docs included' }
    ],
    useCases: ['API Development', 'Data Pipelines', 'Payment Processing', 'User Management', 'Analytics Systems', 'IoT Backends']
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Design That Delights Users',
    description: 'Create memorable digital experiences with our human-centered design approach. We combine aesthetics with functionality to deliver interfaces that users love.',
    color: '#f59e0b',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Interaction Design',
      'Usability Testing',
      'Design System Creation',
      'Responsive Design',
      'Accessibility Compliance (WCAG)'
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'Framer', 'InVision', 'Principle', 'Zeplin', 'Storybook'],
    process: ['User Research', 'Information Architecture', 'Wireframes', 'Visual Design', 'Prototyping', 'User Testing'],
    benefits: [
      { title: 'User-Centered', desc: 'Designs based on real user insights' },
      { title: 'Consistent Branding', desc: 'Cohesive design language throughout' },
      { title: 'Higher Conversions', desc: 'Optimized for user engagement' },
      { title: 'Developer Handoff', desc: 'Smooth transition to development' }
    ],
    useCases: ['Mobile App Design', 'Web App Design', 'Dashboard Design', 'Brand Identity', 'Design Systems', 'Product Redesign']
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Scale Without Limits',
    description: 'Harness the power of cloud computing to build scalable, reliable, and cost-effective solutions. We help you migrate, optimize, and manage your cloud infrastructure.',
    color: '#06b6d4',
    features: [
      'Cloud Migration Strategy',
      'Serverless Architecture',
      'Container Orchestration',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Cost Optimization',
      'Disaster Recovery',
      '24/7 Monitoring & Alerting'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation', 'Serverless'],
    process: ['Assessment', 'Strategy Planning', 'Architecture Design', 'Migration', 'Optimization', 'Monitoring'],
    benefits: [
      { title: 'Infinite Scale', desc: 'Handle any amount of traffic' },
      { title: 'Cost Efficient', desc: 'Pay only for what you use' },
      { title: 'High Availability', desc: '99.99% uptime guaranteed' },
      { title: 'Global Reach', desc: 'Deploy across multiple regions' }
    ],
    useCases: ['Cloud Migration', 'Serverless Apps', 'Container Deployment', 'Auto-Scaling Systems', 'Multi-Region Setup', 'Backup & Recovery']
  },
  'ai-ml-solutions': {
    title: 'AI & ML Solutions',
    subtitle: 'Intelligence That Transforms',
    description: 'Unlock the potential of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications that learn and adapt.',
    color: '#ec4899',
    features: [
      'Custom ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'Recommendation Systems',
      'Data Analysis & Visualization',
      'Model Training & Deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Scikit-learn', 'Hugging Face', 'MLflow'],
    process: ['Problem Definition', 'Data Collection', 'Model Development', 'Training & Testing', 'Deployment', 'Continuous Learning'],
    benefits: [
      { title: 'Automation', desc: 'Reduce manual work significantly' },
      { title: 'Smart Insights', desc: 'Data-driven decision making' },
      { title: 'Personalization', desc: 'Tailored user experiences' },
      { title: 'Innovation', desc: 'Stay ahead with cutting-edge tech' }
    ],
    useCases: ['Customer Support Bots', 'Fraud Detection', 'Image Recognition', 'Sentiment Analysis', 'Demand Forecasting', 'Content Generation']
  },
  'devops': {
    title: 'DevOps & CI/CD',
    subtitle: 'Faster Delivery, Better Quality',
    description: 'Streamline your software delivery with modern DevOps practices. We implement automated pipelines, infrastructure automation, and monitoring solutions for continuous improvement.',
    color: '#84cc16',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure Automation',
      'Container Management',
      'Configuration Management',
      'Monitoring & Logging',
      'Security Automation (DevSecOps)',
      'Release Management',
      'Performance Monitoring'
    ],
    technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus'],
    process: ['Assessment', 'Pipeline Design', 'Automation Setup', 'Testing Integration', 'Monitoring Setup', 'Optimization'],
    benefits: [
      { title: 'Faster Releases', desc: 'Deploy multiple times per day' },
      { title: 'Reduced Errors', desc: 'Automated testing catches bugs early' },
      { title: 'Better Visibility', desc: 'Full observability of your systems' },
      { title: 'Team Efficiency', desc: 'Developers focus on code, not ops' }
    ],
    useCases: ['Automated Deployments', 'Infrastructure as Code', 'Container Orchestration', 'Log Aggregation', 'Performance Monitoring', 'Security Scanning']
  },
  'hire-developers': {
    title: 'Hire Developers',
    subtitle: 'Extend Your Team Seamlessly',
    description: 'Access top-tier development talent on-demand. Our skilled developers integrate seamlessly with your team to accelerate your projects without the overhead of traditional hiring.',
    color: '#6366f1',
    features: [
      'Dedicated Developer Teams',
      'Flexible Engagement Models',
      'Full-Stack Developers',
      'Specialized Tech Experts',
      'Quick Onboarding',
      'Direct Communication',
      'Time Zone Aligned',
      'NDA & IP Protection'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'Go', 'Flutter', 'AWS', 'DevOps'],
    process: ['Requirement Discussion', 'Talent Matching', 'Technical Interview', 'Onboarding', 'Sprint Planning', 'Ongoing Support'],
    benefits: [
      { title: 'Cost Savings', desc: 'Save up to 60% on development costs' },
      { title: 'Flexibility', desc: 'Scale team up or down as needed' },
      { title: 'Quality Talent', desc: 'Pre-vetted senior developers' },
      { title: 'Zero Risk', desc: '2-week trial with replacement guarantee' }
    ],
    useCases: ['Team Augmentation', 'Project-Based Work', 'Long-Term Engagement', 'Specialized Skills', 'Technical Leadership', 'MVP Development']
  }
}

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? servicesData[slug] : null
  const IconComponent = slug ? serviceIcons[slug] : null

  if (!service || !IconComponent) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1>Service Not Found</h1>
          <p className="page-hero-subtitle">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            View All Services
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="service-hero" style={{ '--accent': service.color } as React.CSSProperties}>
        <div className="service-hero-bg"></div>
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-hero-icon"><IconComponent size={48} /></span>
              <h1>{service.title}</h1>
              <p className="service-hero-subtitle">{service.subtitle}</p>
              <p className="service-hero-desc">{service.description}</p>
              <div className="service-hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="service-hero-visual">
              <div className="service-visual-card">
                <div className="visual-icon"><IconComponent size={64} /></div>
                <div className="visual-lines">
                  <div className="visual-line"></div>
                  <div className="visual-line"></div>
                  <div className="visual-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2>Key <span className="highlight">Features</span></h2>
          </div>
          <div className="service-features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="service-feature-card">
                <div className="feature-check-icon" style={{ background: service.color }}>
                  <Check size={16} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-tech-section">
        <div className="container">
          <div className="tech-content-grid">
            <div className="tech-text">
              <span className="section-tag">Tech Stack</span>
              <h2>Technologies We <span className="highlight">Use</span></h2>
              <p>We leverage industry-leading technologies to deliver robust and scalable solutions.</p>
            </div>
            <div className="tech-badges-grid">
              {service.technologies.map((tech, index) => (
                <div key={index} className="tech-badge-large" style={{ borderColor: service.color }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2>Development <span className="highlight">Process</span></h2>
          </div>
          <div className="service-process-timeline">
            {service.process.map((step, index) => (
              <div key={index} className="process-step-card">
                <div className="process-step-num" style={{ background: service.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Key <span className="highlight">Benefits</span></h2>
          </div>
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ '--accent': service.color } as React.CSSProperties}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="service-usecases-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Applications</span>
            <h2>Use <span className="highlight">Cases</span></h2>
          </div>
          <div className="usecases-grid">
            {service.useCases.map((useCase, index) => (
              <div key={index} className="usecase-card">
                <span className="usecase-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="usecase-text">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" style={{ borderColor: service.color }}>
            <h2>Ready to Start Your <span className="highlight">Project?</span></h2>
            <p>Get a free consultation and let's discuss how we can help bring your ideas to life.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore More Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
