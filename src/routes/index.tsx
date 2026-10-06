import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import workspace from '@/assets/workspace.jpg';
import community from '@/assets/community.jpg';
import events from '@/assets/events.jpg';
import records from '@/assets/records.jpg';
import cv from '@/assets/cv.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Sinalo Mvo | Communications & Administration' },
    { name: 'description', content: 'Meet Sinalo Mvo, an aspiring communications practitioner in Johannesburg. Explore her experience, skills, education and community-focused case studies.' },
    { property: 'og:title', content: 'Sinalo Mvo | Communications & Administration' },
    { property: 'og:description', content: 'Communications, coordination and a people-first approach. Explore Sinalo’s professional portfolio and download her CV.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const sections = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
const projects = [
  { title: 'Digital Community Engagement', image: community, alt: 'Illustrative social media planning workspace', description: 'Managed Instagram, Facebook and LinkedIn communication at Phakamani Young Minds Academy, supporting audience engagement and the sharing of project activities.', tools: 'Instagram · Facebook · LinkedIn' },
  { title: 'Events & Campaign Coordination', image: events, alt: 'Illustrative event planning clipboard', description: 'Supported the planning of events and campaigns, collaborated across departments, and developed reports, presentations and communication materials for project activities.', tools: 'Microsoft Office · Salesforce · Project reporting' },
  { title: 'Learner Records & Support', image: records, alt: 'Illustrative administrative records workspace', description: 'Captured learner information, maintained academic records and provided classroom and administrative support at Freedom Primary School.', tools: 'Data capturing · Document preparation · Record management' },
];
function CVButton() { return <Button asChild variant="portfolio-outline"><a href={cv.url} download="Sinalo-Mvo-CV.pdf" target="_blank" rel="noopener noreferrer"><Download aria-hidden="true" />Download CV</a></Button>; }
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -60% 0px' });
    sections.forEach((name) => { const el = document.getElementById(name.toLowerCase()); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const links = sections.map(name => <Button key={name} asChild variant="portfolio-nav"><a data-active={active === name.toLowerCase()} href={`#${name.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{name}</a></Button>);
  return <div className="portfolio-shell" id="home">
    <header className="portfolio-header"><div className="portfolio-container">
      <div className="portfolio-nav">
        <a href="#home" className="portfolio-brand" aria-label="Sinalo Mvo home">Sinalo Mvo</a>
        <nav className="portfolio-links" aria-label="Main navigation">{links}</nav>
        <Button variant="ghost" size="icon" className="portfolio-menu" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</Button>
        <Button asChild variant="portfolio" className="portfolio-email-small"><a href="mailto:mvosinalo@gmail.com">Email <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="portfolio-mobile-nav" aria-label="Mobile navigation">{links}</nav>}
    </div></header>
    <main className="portfolio-container">
      <section className="portfolio-hero" aria-label="Introduction">
        <div className="portfolio-rise">
          <p className="portfolio-kicker">JOHANNESBURG · COMMUNICATIONS & ADMINISTRATION</p>
          <h1 className="portfolio-title"><span>Sinalo Mvo</span><span className="portfolio-title-accent">Communications</span><span>Science</span></h1>
          <p className="portfolio-intro">I bring people, projects and ideas together — supporting events, digital communication and the details that keep everything moving.</p>
          <div className="portfolio-actions"><Button asChild variant="portfolio"><a href="mailto:mvosinalo@gmail.com">Email me <ArrowUpRight aria-hidden="true" /></a></Button><CVButton /></div>
        </div>
        <img className="portfolio-hero-image portfolio-rise" src={workspace} width={1024} height={1280} alt="A bright communications workspace with a notebook, social media planning and coffee" fetchPriority="high" />
      </section>
      <section id="about" className="portfolio-section"><div className="portfolio-about">
        <h2 className="portfolio-heading">About me</h2>
        <p>I’m an aspiring communications practitioner studying towards a Bachelor of Arts in Communication Science at the University of South Africa. From supporting learners to coordinating community projects and managing social channels, I’ve built my experience around clear communication, thoughtful organisation and people. I bring adaptability, a strong work ethic and a collaborative approach to every team.</p>
      </div></section>
      <section id="skills" className="portfolio-section portfolio-two-column" aria-label="Technical and soft skills">
        <div><h2 className="portfolio-section-label">Tools & technical skills</h2><ul className="portfolio-skills">
          <li><span>Microsoft Office</span><span>Word · Excel · PowerPoint</span></li>
          <li><span>Salesforce</span><span>Project data & records</span></li>
          <li><span>Mailchimp</span><span>Email communication</span></li>
          <li><span>Social media management</span><span>Instagram · Facebook · LinkedIn</span></li>
          <li><span>Administration</span><span>Data capturing · Record management</span></li>
        </ul></div>
        <div><h2 className="portfolio-section-label">Soft skills</h2><div className="portfolio-tags">{['Written & oral communication', 'Teamwork', 'Adaptability', 'Problem-solving', 'Event coordination', 'Relationship-building', 'Learning agility', 'Resilience'].map(skill => <span className="portfolio-tag" key={skill}>{skill}</span>)}</div></div>
      </section>
      <section id="projects" className="portfolio-section">
        <div className="portfolio-section-top"><h2 className="portfolio-heading">Selected projects</h2><span className="portfolio-detail">Experience-based case studies · 03</span></div>
        <div className="portfolio-projects">{projects.map(project => <article className="portfolio-project" key={project.title}>
          <img src={project.image} alt={project.alt} width={944} height={704} loading="lazy" />
          <div className="portfolio-project-copy"><h3>{project.title}</h3><p>{project.description}</p><p className="portfolio-project-tools">{project.tools}</p></div>
        </article>)}</div>
      </section>
      <div className="portfolio-section portfolio-two-column">
        <section id="experience" className="portfolio-history"><h2 className="portfolio-section-label">Work experience</h2>
          <article className="portfolio-entry"><div className="portfolio-entry-title"><h3>Special Projects Intern</h3><span className="portfolio-detail">Jul 2025 – Feb 2026</span></div><p>Phakamani Young Minds Academy (NGO)</p><p>Event and campaign coordination, communication materials, Salesforce project records and social media engagement.</p></article>
          <article className="portfolio-entry"><div className="portfolio-entry-title"><h3>Education Assistant</h3><span className="portfolio-detail">May 2023 – Jul 2024</span></div><p>Freedom Primary School</p><p>Lesson and classroom support, learner assistance, academic records and administrative document preparation.</p></article>
        </section>
        <section id="education" className="portfolio-history"><h2 className="portfolio-section-label">Education & certifications</h2>
          <article className="portfolio-entry"><div className="portfolio-entry-title"><h3>BA Communication Science</h3><span className="portfolio-detail portfolio-in-progress">In progress</span></div><p>University of South Africa (UNISA)</p></article>
          <article className="portfolio-entry"><div className="portfolio-entry-title"><h3>National Senior Certificate</h3><span className="portfolio-detail">2019</span></div><p>Freedom Park Secondary School</p></article>
          <div id="certifications" className="portfolio-certifications"><h3>Certifications</h3><p>No additional certifications listed at present.</p></div>
        </section>
      </div>
      <section id="contact" className="portfolio-section"><div className="portfolio-contact">
        <div><h2 className="portfolio-heading">Let’s work together.</h2><p>Open to internships and entry-level communications roles.</p><span className="portfolio-github"><Github size={16} aria-hidden="true" /> GitHub · Profile not provided yet</span></div>
        <div className="portfolio-actions"><Button asChild variant="portfolio"><a href="mailto:mvosinalo@gmail.com">mvosinalo@gmail.com <ArrowUpRight aria-hidden="true" /></a></Button><CVButton /></div>
      </div></section>
    </main>
    <footer className="portfolio-container"><div className="portfolio-footer"><span>© 2026 Sinalo Mvo · Johannesburg</span><span className="portfolio-detail">Communications & Administration</span></div></footer>
  </div>;
}
