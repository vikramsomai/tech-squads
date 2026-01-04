import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  Clock, 
  Home, 
  DollarSign, 
  BookOpen, 
  Heart, 
  Palmtree, 
  Laptop, 
  Target, 
  PartyPopper,
  Rocket,
  Users,
  TrendingUp,
  Star
} from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'We are looking for an experienced React developer to join our frontend team and build amazing user interfaces.',
    requirements: ['React.js & Redux', 'TypeScript', 'Next.js', 'Testing (Jest, RTL)', 'Git & CI/CD'],
    color: '#00d4ff'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our team to build end-to-end solutions using modern web technologies and cloud services.',
    requirements: ['Node.js & Express', 'React.js', 'PostgreSQL/MongoDB', 'AWS/GCP', 'Docker'],
    color: '#10b981'
  },
  {
    id: 3,
    title: 'React Native Developer',
    department: 'Mobile',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build cross-platform mobile applications for iOS and Android using React Native.',
    requirements: ['React Native', 'JavaScript/TypeScript', 'Redux/MobX', 'Native Modules', 'App Store Deployment'],
    color: '#8b5cf6'
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
    requirements: ['Figma & Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#f59e0b'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Manage our cloud infrastructure and implement CI/CD pipelines for seamless deployments.',
    requirements: ['AWS/GCP/Azure', 'Kubernetes & Docker', 'Terraform', 'CI/CD Pipelines', 'Monitoring Tools'],
    color: '#06b6d4'
  },
  {
    id: 6,
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Develop and deploy machine learning models to power our AI-driven solutions.',
    requirements: ['Python', 'TensorFlow/PyTorch', 'NLP/Computer Vision', 'MLOps', 'Data Processing'],
    color: '#ec4899'
  }
]

const benefits = [
  { icon: Home, title: 'Remote First', desc: 'Work from anywhere in the world' },
  { icon: DollarSign, title: 'Competitive Pay', desc: 'Industry-leading compensation' },
  { icon: BookOpen, title: 'Learning Budget', desc: 'Annual budget for courses & books' },
  { icon: Heart, title: 'Health Insurance', desc: 'Comprehensive health coverage' },
  { icon: Palmtree, title: 'Flexible PTO', desc: 'Unlimited paid time off policy' },
  { icon: Laptop, title: 'Equipment', desc: 'MacBook Pro & accessories provided' },
  { icon: Target, title: 'Stock Options', desc: 'Equity in our growing company' },
  { icon: PartyPopper, title: 'Team Events', desc: 'Quarterly team meetups & retreats' }
]

const values = [
  { icon: Rocket, title: 'Innovation', desc: 'We embrace new technologies and creative solutions' },
  { icon: Users, title: 'Collaboration', desc: 'We believe great work comes from great teamwork' },
  { icon: TrendingUp, title: 'Growth', desc: 'We invest in your personal and professional development' },
  { icon: Star, title: 'Excellence', desc: 'We strive for quality in everything we do' }
]

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

  const departments = ['all', ...new Set(jobs.map(j => j.department))]
  const filteredJobs = filter === 'all' ? jobs : jobs.filter(j => j.department === filter)
  const openJob = jobs.find(j => j.id === selectedJob)

  return (
    <>
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-bg"></div>
        <div className="container">
          <div className="careers-hero-content">
            <span className="section-tag">Join Our Team</span>
            <h1>Build the Future <span className="highlight">With Us</span></h1>
            <p className="careers-hero-subtitle">
              Join a team of passionate developers, designers, and innovators building cutting-edge 
              technology solutions. We're always looking for talented individuals to grow with us.
            </p>
            <div className="careers-hero-stats">
              <div className="hero-stat">
                <span className="stat-value">{jobs.length}+</span>
                <span className="stat-desc">Open Positions</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">100%</span>
                <span className="stat-desc">Remote Friendly</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">25+</span>
                <span className="stat-desc">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="culture-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Culture</span>
            <h2>What Drives <span className="highlight">Us</span></h2>
          </div>
          <div className="culture-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="culture-card">
                  <div className="culture-icon"><IconComponent size={28} /></div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Perks & Benefits</span>
            <h2>Why You'll <span className="highlight">Love</span> Working Here</h2>
          </div>
          <div className="perks-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="perk-card">
                  <span className="perk-icon"><IconComponent size={24} /></span>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Open Positions</span>
            <h2>Current <span className="highlight">Opportunities</span></h2>
          </div>

          <div className="position-filters">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`filter-btn ${filter === dept ? 'active' : ''}`}
                onClick={() => setFilter(dept)}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          <div className="positions-grid">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="position-card"
                onClick={() => setSelectedJob(job.id)}
                style={{ '--accent': job.color } as React.CSSProperties}
              >
                <div className="position-header">
                  <span className="position-dept" style={{ background: job.color }}>{job.department}</span>
                </div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="position-meta">
                  <span><MapPin size={16} /> {job.location}</span>
                  <span><Clock size={16} /> {job.type}</span>
                  <span><Briefcase size={16} /> {job.experience}</span>
                </div>
                <button className="position-apply-btn">
                  View Details <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && openJob && (
        <div className="job-modal" onClick={() => setSelectedJob(null)}>
          <div className="job-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>×</button>
            <div className="job-modal-header" style={{ background: openJob.color }}>
              <span className="job-dept">{openJob.department}</span>
              <h2>{openJob.title}</h2>
              <div className="job-meta">
                <span><MapPin size={16} /> {openJob.location}</span>
                <span><Clock size={16} /> {openJob.type}</span>
                <span><Briefcase size={16} /> {openJob.experience}</span>
              </div>
            </div>
            <div className="job-modal-body">
              <div className="job-section">
                <h3>About the Role</h3>
                <p>{openJob.description}</p>
              </div>
              <div className="job-section">
                <h3>Requirements</h3>
                <ul className="job-requirements">
                  {openJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="job-actions">
                <Link to="/contact" className="btn btn-primary">
                  Apply Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <div className="careers-cta-content">
            <h2>Don't See the Right Role?</h2>
            <p>We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <Link to="/contact" className="btn btn-primary">
              Send Your Resume <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage
