import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Wrench,
  ChevronRight,
  Github,
  Linkedin,
  Menu,
  X,
  Briefcase,
  User,
  Layers,
  Send
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATION } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Education', href: '#education', icon: Layout },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-tighter text-slate-900"
            >
              SS<span className="text-blue-600">.</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 text-slate-600 font-medium"
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Available for new opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                Building robust <br />
                <span className="text-blue-600">.NET Solutions</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-slate-900">{PERSONAL_INFO.name}</span>. 
                A Senior .NET Developer with 5+ years of experience crafting scalable web applications 
                that drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-lg shadow-slate-200">
                  <span>Get in Touch</span>
                  <ChevronRight size={18} />
                </a>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </button>
              </div>
              
              <div className="mt-12 flex items-center space-x-6 text-slate-400">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors"><Github size={24} /></a>
                <div className="h-6 w-px bg-slate-200"></div>
                <div className="flex items-center space-x-2 text-sm font-medium text-slate-500">
                  <MapPin size={16} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-2xl relative">
                <img 
                  src={`https://picsum.photos/seed/shubham-dev/800/800`} 
                  alt="Shubham Sharma" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="section-title">Professional Summary</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {PERSONAL_INFO.summary}
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <span>Email</span>
                </h3>
                <p className="text-slate-600">{PERSONAL_INFO.email}</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span>Phone</span>
                </h3>
                <p className="text-slate-600">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
                  {idx === 0 && <Code2 size={24} />}
                  {idx === 1 && <Layout size={24} />}
                  {idx === 2 && <Database size={24} />}
                  {idx === 3 && <Wrench size={24} />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-100"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-start space-x-3">
                      <ChevronRight size={16} className="mt-1 text-slate-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-title mb-2">Featured Projects</h2>
              <p className="text-slate-500">A selection of enterprise-grade applications I've delivered.</p>
            </div>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="mt-4 md:mt-0 text-blue-600 font-bold flex items-center space-x-2 hover:underline">
              <span>View GitHub Repositories</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${encodeURIComponent(project.title)}/600/400`} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="text-sm font-bold text-slate-900 flex items-center space-x-2 group-hover:text-blue-600 transition-colors">
                    <span>Case Study</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Education</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50"
              >
                <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">{edu.year}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-slate-500">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Let's build something <br />
                <span className="text-blue-400">extraordinary together.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Email me at</div>
                    <div className="text-xl font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Call me at</div>
                    <div className="text-xl font-semibold">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold tracking-tighter text-slate-900 mb-6">
            SS<span className="text-blue-600">.</span>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
