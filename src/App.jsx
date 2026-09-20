import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Github, Linkedin, Instagram, Youtube,
  Mail, MapPin, Sparkles, Code2, BrainCircuit, ShieldCheck,
  Database, Cloud, ExternalLink
} from "lucide-react";
import { profile, skills, projects, simulations, internships, certifications, achievements } from "./data";

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" }
};

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Journey", "/journey"],
    ["Contact", "/contact"]
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span>MP</span>
          <strong>MANYALA PAVANI</strong>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Let's Connect <ArrowUpRight size={15} />
          </Link>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <div className="brand footer-brand"><span>MP</span><strong>MANYALA PAVANI</strong></div>
          <p>Always exploring. Always building.</p>
        </div>
        <div className="footer-socials">
          <a href={profile.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={profile.social.github} aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.social.instagram} aria-label="Instagram"><Instagram size={18} /></a>
          <a href={profile.social.youtube} aria-label="YouTube"><Youtube size={18} /></a>
        </div>
        <small>© {new Date().getFullYear()} Manyala Pavani</small>
      </footer>
    </div>
  );
}

function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro container">
      <motion.div {...fade}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <motion.div {...fade}>
            <span className="eyebrow">COMPUTER SCIENCE & ENGINEERING</span>
            <h1>Exploring technology.<br /><span>Building what comes next.</span></h1>
            <p className="hero-text">{profile.bio}</p>
            <div className="hero-actions">
              <Link to="/projects" className="button primary">Explore My Work <ArrowUpRight size={17} /></Link>
              <Link to="/contact" className="button ghost">Let's Connect <ArrowUpRight size={17} /></Link>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Visakhapatnam, India</span>
              <span><Sparkles size={15} /> Expected graduation 2028</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="photo-halo" />
          <div className="photo-card">
            <img src="/images/profile.jpg" alt="Manyala Pavani" />
           </div> 
          <div className="floating-chip chip-one"><BrainCircuit size={16} /> AI & GenAI</div>
          <div className="floating-chip chip-two"><Database size={16} /> Data</div>
          <div className="floating-chip chip-three"><ShieldCheck size={16} /> Security</div>
        </motion.div>
      </section>

      <section className="marquee-section">
        <div className="marquee">
          {["AI", "GENERATIVE AI", "DATA", "FULL STACK", "CYBERSECURITY", "CLOUD"].map((x, i) =>
            <span key={i}>{x} <b>✦</b></span>
          )}
        </div>
      </section>

      <section className="section container">
        <motion.div className="split-heading" {...fade}>
          <div><span className="eyebrow">01 · ABOUT</span><h2>A curious mind.<br />A continuous learner.</h2></div>
          <div><p>I’m building my career around curiosity — exploring how technology works, how it evolves, and how it can solve real-world problems.</p><Link className="text-link" to="/about">More about me <ArrowUpRight size={16} /></Link></div>
        </motion.div>
      </section>

      <section className="section container">
        <motion.div className="section-head" {...fade}>
          <div><span className="eyebrow">02 · FEATURED WORK</span><h2>Ideas I'm turning<br />into reality.</h2></div>
          <Link className="text-link" to="/projects">View all projects <ArrowUpRight size={16} /></Link>
        </motion.div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>
      </section>

      <section className="section container">
        <motion.div className="explore-panel" {...fade}>
          <div className="explore-copy">
            <span className="eyebrow">03 · CURRENTLY EXPLORING</span>
            <h2>Technology doesn't stand still.<br /><span>Neither do I.</span></h2>
            <p>This space is designed to evolve with me as I learn new tools, concepts and technologies.</p>
          </div>
          <div className="explore-orbit">
            {["AI", "ML", "DATA", "WEB", "SECURITY", "CLOUD"].map((x, i) =>
              <span key={x} className={`orbit-tag orbit-${i + 1}`}>{x}</span>
            )}
            <div className="orbit-core">MP</div>
          </div>
        </motion.div>
      </section>

      <section className="section container">
        <motion.div className="section-head" {...fade}>
          <div><span className="eyebrow">04 · JOURNEY</span><h2>Learning beyond<br />the classroom.</h2></div>
          <Link className="text-link" to="/journey">Explore my journey <ArrowUpRight size={16} /></Link>
        </motion.div>
        <div className="journey-preview">
          {[
            ["01", "Education", "B.Tech CSE", "Expected 2028"],
            ["02", "Internships", "EduSkills virtual internships", "Data · AI · Security"],
            ["03", "Simulations", "Deloitte · Tata · British Airways", "Industry exposure"],
            ["04", "Achievements", "SIH 2025 · E-Cell IIT Bombay", "Building beyond academics"]
          ].map(([n, t, d, s]) =>
            <div className="journey-card" key={n}><span>{n}</span><div><b>{t}</b><h3>{d}</h3><p>{s}</p></div></div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card project-${index + 1}`} {...fade}>
      <div className="project-top"><span>0{index + 1}</span><span className="status"><i /></span></div>
      <div className="project-icon"><Code2 size={20} /></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="project-footer"><span>Project</span><ExternalLink size={16} /></div>
    </motion.article>
  );
}

function About() {
  return <>
    <PageIntro eyebrow="ABOUT ME" title={<>More than a résumé.<br /><span>A work in progress.</span></>} text="A little about the person behind the projects, interests and constant learning." />
    <section className="section container two-col">
      <motion.div {...fade} className="glass-card large-copy">
        <span className="eyebrow">WHO I AM</span>
        <h2>Curious by nature.<br />Driven to build.</h2>
        <p>I’m Manyala Pavani, a Computer Science & Engineering student at Lendi Institute of Engineering and Technology.</p>
        <p>My interests span AI, Generative AI, Data Science, Full-Stack Development, Cybersecurity and emerging technologies. I enjoy moving from an idea to an experiment, then learning from what I build.</p>
        <p>I don’t want my portfolio to be a static snapshot. It is meant to grow as my skills, projects and interests grow.</p>
      </motion.div>
      <motion.div {...fade} className="interest-stack">
        {[
          [BrainCircuit, "AI & Generative AI", "Exploring intelligent systems and new ways of building with AI."],
          [Database, "Data & ML", "Turning data into insights and experimenting with predictive systems."],
          [Code2, "Full-Stack", "Building responsive, useful web experiences."],
          [ShieldCheck, "Cybersecurity", "Learning how systems can be protected and analyzed."]
        ].map(([Icon, t, d]) => <div className="interest-card" key={t}><Icon /><div><h3>{t}</h3><p>{d}</p></div></div>)}
      </motion.div>
    </section>
  </>;
}

function Skills() {
  return <>
    <PageIntro eyebrow="SKILLS & TECHNOLOGIES" title={<>A toolkit that<br /><span>keeps evolving.</span></>} text="No artificial percentages. Just the areas I’m learning, using and exploring." />
    <section className="section container skill-grid">
      {skills.map(({ group, items }, i) => (
        <motion.div className="skill-card" {...fade} key={group}>
          <span className="skill-number">0{i + 1}</span><h3>{group}</h3>
          <div className="skill-pills">{items.map(x => <span key={x}>{x}</span>)}</div>
        </motion.div>
      ))}
    </section>
  </>;
}

function Projects() {
  return <>
    <PageIntro eyebrow="PROJECTS" title={<>Ideas, experiments<br /><span>and things I'm building.</span></>} text="Projects are where curiosity becomes something tangible. Some are still in progress — and that's part of the journey." />
    <section className="section container project-grid all-projects">
      {projects.map((project, i) => <ProjectCard project={project} index={i} key={project.title} />)}
    </section>
  </>;
}

function Journey() {
  return <>
    <PageIntro eyebrow="JOURNEY" title={<>Learning beyond<br /><span>the classroom.</span></>} text="Education, internships, simulations, certifications and experiences that are shaping my technology journey." />
    <section className="section container timeline">
      <Timeline title="Education" eyebrow="01" items={[
        ["B.Tech — Computer Science & Engineering", "Lendi Institute of Engineering and Technology", "Expected 2028"]
      ]} />
      <Timeline title="Virtual Internships" eyebrow="02" items={internships.map(x => ["EduSkills Virtual Internship", x, "Virtual experience"])} />
      <Timeline title="Job Simulations" eyebrow="03" items={simulations.map(([org, title]) => [title, org, "Job simulation"])} />
      <Timeline title="Certifications" eyebrow="04" items={certifications.map(([org, title]) => [title, org, "Certification"])} />
      <Timeline title="Achievements & Leadership" eyebrow="05" items={achievements.map(([title, desc]) => [title, desc, "Achievement / leadership"])} />
    </section>
  </>;
}

function Timeline({ title, eyebrow, items }) {
  return <motion.section className="timeline-block" {...fade}>
    <div className="timeline-title"><span>{eyebrow}</span><h2>{title}</h2></div>
    <div className="timeline-items">
      {items.map(([a,b,c], i) => <article className="timeline-item" key={i}><div className="timeline-dot" /><div><span>{b}</span><h3>{a}</h3><p>{c}</p></div></article>)}
    </div>
  </motion.section>;
}

function Contact() {
  return <>
    <PageIntro eyebrow="CONTACT" title={<>Let's build something<br /><span>interesting.</span></>} text="Whether it’s a project, collaboration, technology conversation or simply a hello — I’d love to connect." />
    <section className="section container contact-layout">
      <motion.div className="contact-card" {...fade}>
        <span className="eyebrow">SAY HELLO</span>
        <h2>Have an idea?<br /><span>Let's talk.</span></h2>
        <p>I’m always open to connecting about projects, collaborations, technology and creative ideas.</p>
        <a
  className="button primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pavanitechie18@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Email Me <Mail size={17} />
</a>
      </motion.div>
      <motion.div className="social-panel" {...fade}>
        {[["LinkedIn", Linkedin, profile.social.linkedin], ["GitHub", Github, profile.social.github], ["Instagram", Instagram, profile.social.instagram], ["YouTube", Youtube, profile.social.youtube]].map(([n,I,h]) =>
          <a href={h} key={n}><I size={20}/><span>{n}</span><ArrowUpRight size={16}/></a>
        )}
        <div className="location-card"><MapPin size={18}/><div><small>BASED IN</small><strong>Visakhapatnam, India</strong></div></div>
      </motion.div>
    </section>
  </>;
}

function CTA() {
  return <section className="section container"><motion.div className="cta" {...fade}><span className="eyebrow">LET'S CONNECT</span><h2>Curiosity starts<br /><span>conversations.</span></h2><Link className="button primary" to="/contact">Get in touch <ArrowUpRight size={17} /></Link></motion.div></section>;
}

export default function App() {
  return <Layout><AnimatePresence mode="wait"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} /><Route path="/journey" element={<Journey />} /><Route path="/contact" element={<Contact />} /></Routes></AnimatePresence></Layout>;
}