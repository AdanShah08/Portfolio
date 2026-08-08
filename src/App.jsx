import { useState, useEffect, useRef } from 'react';
import { Icon } from './icons.jsx';
import profileImg from './assets/profile.png';
import cvPdf from './assets/Adan_Shah_CV.pdf';
import mindaiImg from './assets/mindai.jpg';
import ydcImg from './assets/ydc.jpg';
import ecommerceImg from './assets/ecommerce.jpg';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Testimonials', 'Contact'];

const STATS = [
  { icon: Icon.code, value: '10+', label: 'Projects Completed' },
  { icon: Icon.cap, value: '10+', label: 'Technologies Mastered' },
  { icon: Icon.brief, value: '4+', label: 'Internships Experience' },
  { icon: Icon.smile, value: '100%', label: 'Commitment & Dedication' },
];

const SKILL_TABS = {
  Frontend: [
    { name: 'HTML', badge: 'html' },
    { name: 'CSS', badge: 'css' },
    { name: 'JavaScript', badge: 'js' },
    { name: 'Bootstrap', badge: 'bootstrap' },
    { name: 'React', badge: 'react' },
  ],
  Tools: [
    { name: 'VS Code', badge: 'vscode' },
    { name: 'GitHub', badge: 'git' },
  ],
};

const EXPERIENCE = [
  { title: 'Academic Support Intern', place: 'KUST, Kohat', date: 'Oct 2025 – Dec 2025' },
  { title: 'React Frontend Developer Intern', place: 'Inara Technologies, Islamabad', date: 'Aug 2025 – Sep 2025' },
  { title: 'Frontend Developer (6 Months)', place: 'YDC KUST Kohat', date: 'Jan 2025 – Jun 2025' },
  { title: 'NICS Internship (8 Weeks)', place: 'National Expansion Plan of NICS, Kohat', date: 'Jun 2024 – Aug 2024' },
];

const PROJECTS = [
  {
    title: 'MindAI',
    desc: 'AI-powered mental health platform with AI chat, appointments & doctors.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accent: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
    image: mindaiImg,
    liveLink: 'https://mindai-yjfe.onrender.com/',
  },
  {
    title: 'YDC KUST Portal',
    desc: 'Youth Development Center portal with announcement popups, events & workshops.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    accent: 'linear-gradient(135deg,#1f2937,#374151)',
    image: ydcImg,
    liveLink: 'https://adanshah08.github.io/ydc-kust/',
  },
  {
    title: 'Sawara E-Commerce',
    desc: 'Luxury fashion e-commerce store with collections, cart, checkout & responsive layout.',
    tags: ['React', 'CSS', 'JavaScript'],
    accent: 'linear-gradient(135deg,#fef3c7,#fde68a)',
    image: ecommerceImg,
  },
  
];

const SERVICES = [
  { icon: Icon.code, name: 'Frontend Development' },
  { icon: Icon.code, name: 'React Development' },
  { icon: Icon.monitor, name: 'Responsive Web Design' },
  { icon: Icon.plug, name: 'API Integration' },
  { icon: Icon.gauge, name: 'Website Optimization' },
];

const TESTIMONIALS = [
  {
    quote: 'Adan is a hardworking and dedicated developer. He delivers quality work on time and has strong problem-solving skills.',
    name: 'Faizan Ahmad',
    role: 'WEb & App developer, Inara Technologies',
    avatar: 'FA',
  },
  {
    quote: 'Exceptional skill in React and frontend performance. Adan transformed our concepts into slick, responsive web user interfaces.',
    name: 'Gul Nawaz',
    role: 'Data Center Supervisor, KUST Kohat',
    avatar: 'SK',
  },
  {
    quote: 'Working with Adan during his time at NICS Kohat was a great experience. His dedication, technical skills, and innovative approach to web development made a valuable contribution to our team. He was always eager to learn, take on challenges, and deliver quality work.',
    name: 'Muhammad Salman',
    role: 'Manager, NICS Kohat',
    avatar: 'MU',
  },
  
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [darkMode, setDarkMode] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className={`site ${darkMode ? 'dark' : 'light'}`}>
      {toastMessage && (
        <div className="toast-notification animate-pop">
          {toastMessage}
        </div>
      )}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} showToast={showToast} />
      <Hero />
      <About />
      <SkillsExperience activeTab={activeTab} setActiveTab={setActiveTab} />
      <Projects />
      <ServicesTestimonials />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

function Navbar({ darkMode, setDarkMode, showToast }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    showToast("CV Download Started! 📄");
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">ADAN<span className="dot">.</span></div>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => {
            const targetId = link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <div className="navbar-actions">
          <a 
            href={cvPdf} 
            download="Adan_Shah_CV.pdf"
            className="btn btn-primary btn-sm cv-btn-desktop"
            onClick={handleDownloadCV}
          >
            Download CV <Icon.up size={14} style={{ transform: 'rotate(180deg)' }} />
          </a>
          <button 
            className="icon-toggle" 
            onClick={() => setDarkMode(!darkMode)} 
            aria-label="Toggle theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Icon.sun size={16} /> : <Icon.moon size={16} />}
          </button>
          <button 
            className="icon-toggle mobile-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            title="Toggle Menu"
          >
            {menuOpen ? <Icon.x size={18} /> : <Icon.menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link) => {
            const targetId = link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
              >
                {link}
              </a>
            );
          })}
          <a 
            href={cvPdf} 
            download="Adan_Shah_CV.pdf"
            className="btn btn-primary btn-sm mobile-cv-btn"
            onClick={handleDownloadCV}
          >
            Download CV <Icon.up size={14} style={{ transform: 'rotate(180deg)' }} />
          </a>
        </nav>
      </div>
    </header>
  );
}

const HERO_TITLES = ['Adan Shah'];

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  const currentText = words[index].substring(0, subIndex);
  const parts = currentText.split(' ');
  const firstWord = parts[0] || '';
  const restWords = parts.slice(1).join(' ');

  return (
    <span className="typewriter-text">
      {firstWord}{restWords ? ' ' : ''}
      {restWords ? <span className="accent">{restWords}</span> : ''}
      <span className="typing-cursor">|</span>
    </span>
  );
}

function Hero() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="hero-name">
            <TypewriterText words={HERO_TITLES} />
          </h1>
          <p className="hero-role">Frontend Developer | React Developer</p>
          <p className="hero-desc">
            I build modern, responsive, and user-friendly web applications with clean
            code as a passionate Frontend Developer, crafting intuitive solutions that solve real-world problems.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Hire Me <Icon.plus size={14} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
              View Projects <Icon.arrowRight size={14} />
            </button>
          </div>
          <div className="social-row">
            <a className="social-btn" href="https://github.com/AdanShah08" aria-label="GitHub"><Icon.github /></a>
            <a className="social-btn" href="https://www.linkedin.com/in/adan-shah-94104630a/" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a className="social-btn" href="mailto:shahadan496@gamil.com" aria-label="Email"><Icon.mail /></a>
            <a className="social-btn" href="#" aria-label="X"><Icon.x /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-photo" style={{ overflow: 'hidden', padding: 0 }}>
            <img src={profileImg} alt="Adan Shah" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <span className="float-badge badge-react" style={{ top: '6%', left: '4%' }}>⚛️</span>
          <span className="float-badge badge-js" style={{ bottom: '14%', right: '2%' }}>JS</span>
          <span className="float-badge badge-tw" style={{ bottom: '10%', left: '2%' }}>〰</span>
          <span className="diamond d1" />
          <span className="diamond d2" />
          <span className="diamond d3" />
        </div>
      </div>
    </section>
  );
}

function AnimatedNumberCounter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * targetNum));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNum);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNum, duration, hasAnimated]);

  return (
    <div ref={ref} className="stat-value">
      {count}{suffix}
    </div>
  );
}

function About() {
  const scrollToAboutMore = () => {
    const elem = document.getElementById('skills');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Turning <span className="accent">Ideas</span> Into<br />Real-World Solutions</h2>
          <p className="section-desc">
            I'm a Computer Science graduate passionate about Frontend Development and AI
            Automation. I love building beautiful interfaces and smart workflows that
            make life easier.
          </p>
          <button className="btn btn-outline" onClick={scrollToAboutMore}>
            More About Me <Icon.arrowRight size={14} />
          </button>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-icon"><s.icon size={22} /></div>
              <AnimatedNumberCounter value={s.value} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsExperience({ activeTab, setActiveTab }) {
  return (
    <section className="skills" id="skills">
      <div className="container skills-inner">
        <div className="skills-col">
          <p className="eyebrow">Skills &amp; Technologies</p>
          <div className="tabs">
            {Object.keys(SKILL_TABS).map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="skills-grid" key={activeTab}>
            {SKILL_TABS[activeTab].map((skill) => (
              <div className="skill-card animate-pop" key={skill.name}>
                <div className={`skill-badge badge-${skill.badge}`}>{skill.name.slice(0, 2).toUpperCase()}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-col" id="experience">
          <p className="eyebrow">Experience</p>
          <ul className="timeline">
            {EXPERIENCE.map((e) => (
              <li key={e.title} className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{e.title}</h4>
                  <p>{e.place}</p>
                </div>
                <span className="timeline-date">{e.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Featured Projects</p>
          <a className="link-arrow" href="#projects">View All Projects <Icon.arrowRight size={14} /></a>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <div 
                className="project-thumb" 
                style={{ 
                  background: p.image ? `url(${p.image}) center/cover no-repeat` : p.accent 
                }} 
              />
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.liveLink || '#'} target={p.liveLink ? '_blank' : '_self'} rel="noreferrer">
                    <Icon.external size={13} /> Live Demo
                  </a>
                  <a href={p.githubLink || '#'} target={p.githubLink ? '_blank' : '_self'} rel="noreferrer">
                    <Icon.github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="services-testimonials" id="services">
      <div className="container split-inner">
        <div className="services-col">
          <p className="eyebrow">Services</p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <div className="service-icon"><s.icon size={22} /></div>
                <p>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonials-col" id="testimonials">
          <p className="eyebrow">Testimonials</p>
          <div className="testimonial-card">
            <Icon.quote size={26} />
            <div className="testimonial-slide" key={active}>
              <p className="testimonial-text">{TESTIMONIALS[active].quote}</p>
              <div className="testimonial-author">
                <div className="avatar">{TESTIMONIALS[active].avatar}</div>
                <div>
                  <h4>{TESTIMONIALS[active].name}</h4>
                  <span>{TESTIMONIALS[active].role}</span>
                </div>
              </div>
            </div>
            <div className="dots">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  title={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-left">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
          <ul className="contact-list">
            <li><Icon.mail size={16} /> shahadan496@gamil.com</li>
            <li><Icon.pin size={16} /> Kohat, Pakistan</li>
          </ul>
          <div className="social-row">
            <a className="social-btn" href="https://github.com/AdanShah08" aria-label="GitHub"><Icon.github /></a>
            <a className="social-btn" href="https://www.linkedin.com/in/adan-shah-94104630a/" aria-label="LinkedIn"><Icon.linkedin /></a>
            <a className="social-btn" href="mailto:mdashah13@gamil.com" aria-label="Email"><Icon.mail /></a>
            
          </div>
        </div>
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea rows={5} placeholder="Message" />
            <button className="btn btn-primary" type="submit">Send Message <Icon.send size={14} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <div className="logo">ADAN<span className="dot">.</span></div>
          <p>Frontend Developer | React Developer</p>
          <p>Building modern, responsive web solutions for a better digital experience.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home" onClick={(e) => scrollTo(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>Experience</a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Frontend Development</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>React Development</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Responsive Web Design</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>API Integration</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Website Optimization</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/AdanShah08">GitHub</a><a href="https://www.linkedin.com/in/adan-shah-94104630a/">LinkedIn</a><a href="mailto:shahadan496@gamil.com">Email</a><a href="#">WhatsApp</a>
        </div>
        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on new projects and articles.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Adan Shah. All Rights Reserved.</p>
        <p>Designed &amp; Developed by Adan Shah 💙</p>
      </div>
    </footer>
  );
}

function ScrollTop() {
  return (
    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <Icon.up size={18} />
    </button>
  );
}
