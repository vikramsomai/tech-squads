import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Smartphone, 
  Globe, 
  Server, 
  Palette, 
  Cloud, 
  Bot, 
  RefreshCw, 
  Code 
} from 'lucide-react'

const services = [
  { slug: 'mobile-app-development', name: 'Mobile App Development', icon: Smartphone },
  { slug: 'web-development', name: 'Web Development', icon: Globe },
  { slug: 'backend-development', name: 'Backend Development', icon: Server },
  { slug: 'ui-ux-design', name: 'UI/UX Design', icon: Palette },
  { slug: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud },
  { slug: 'ai-ml-solutions', name: 'AI & ML Solutions', icon: Bot },
  { slug: 'devops', name: 'DevOps & CI/CD', icon: RefreshCw },
  { slug: 'hire-developers', name: 'Hire Developers', icon: Code },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  const isActive = (path: string) => location.pathname === path
  const isServiceActive = () => location.pathname.startsWith('/services')

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-tech">Tech</span>
            <span className="logo-squad">Squad</span>
            <span className="logo-solutions">Solutions</span>
          </Link>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
            <li 
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services" 
                className={`dropdown-trigger ${isServiceActive() ? 'active' : ''}`}
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className={`dropdown-menu ${servicesOpen ? 'open' : ''}`}>
                <div className="dropdown-grid">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <Link 
                        key={service.slug} 
                        to={`/services/${service.slug}`}
                        className="dropdown-item"
                      >
                        <span className="dropdown-icon"><IconComponent size={18} /></span>
                        <span>{service.name}</span>
                      </Link>
                    )
                  })}
                </div>
                <div className="dropdown-footer">
                  <Link to="/services" className="view-all-link">
                    View All Services →
                  </Link>
                </div>
              </div>
            </li>
            <li><Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link></li>
            <li><Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta">Get Quote</Link>
          
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
