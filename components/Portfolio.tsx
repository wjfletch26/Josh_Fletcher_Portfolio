"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";

const sections = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "work", label: "Work", icon: "briefcase" },
  { id: "capabilities", label: "Capabilities", icon: "layers" },
  { id: "approach", label: "Approach", icon: "route" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

const projects = [
  {
    number: "01",
    type: "Multi-client platform",
    title: "Outreach infrastructure that survives real operations",
    description:
      "A centralized email automation platform for Deaton Engineering and SMOD, with client-specific providers, research and approval workflows, production safeguards, and a controlled path from Google Sheets to MongoDB.",
    impact: [
      "One codebase, isolated client configuration",
      "Human review, audit trails, and fail-closed controls",
      "Shadow-mode data migration with reconciliation gates",
    ],
    tags: ["TypeScript", "Node.js", "MongoDB", "Google Sheets", "SendGrid", "Microsoft 365"],
    accent: "lime",
  },
  {
    number: "02",
    type: "Governed AI development",
    title: "OpenBrain Vault",
    description:
      "A repository-native operating system for AI-assisted software work. It connects plans, tasks, runs, evidence, reviews, and human approvals so an agent can move quickly without quietly stepping outside its authority.",
    impact: [
      "Approval-bound proposals with drift detection",
      "Detached worktrees and allowlisted validation",
      "Traceable evidence from intent through execution",
    ],
    tags: ["AI agents", "Git", "Governance", "Automation", "System design"],
    accent: "violet",
  },
  {
    number: "03",
    type: "AI product venture",
    title: "iON personalized children’s books",
    description:
      "A story platform designed around purposeful technology: personalized books that help children explore interests, learning goals, behavior, and emotions without turning childhood into another feed.",
    impact: [
      "Parent-led personalization and story creation",
      "Full-stack product and content workflows",
      "A roadmap from families to classroom use",
    ],
    tags: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "AI generation"],
    accent: "blue",
  },
];

const capabilityGroups = [
  {
    title: "Product engineering",
    copy: "I move from an unclear need to a usable product, keeping business logic, interface design, and implementation connected.",
    items: ["Next.js & React", "TypeScript", "Node & Express", "Responsive UI", "Product discovery"],
  },
  {
    title: "Systems & integration",
    copy: "I connect services, data, and workflows into systems people can actually operate and troubleshoot.",
    items: ["REST APIs", "MongoDB", "Google Workspace", "AWS S3 & CloudFront", "Stripe & provider APIs"],
  },
  {
    title: "AI-enabled operations",
    copy: "I use AI where it creates leverage, then add the review, evidence, and failure boundaries required for production work.",
    items: ["Agent workflows", "Prompt systems", "Automation", "Human-in-the-loop review", "Governance controls"],
  },
];

const process = [
  ["01", "Find the real constraint", "Separate the visible request from the operational problem underneath it."],
  ["02", "Map the system", "Trace people, data, decisions, dependencies, and failure paths before adding machinery."],
  ["03", "Build the smallest complete loop", "Ship an end-to-end slice that can be used, observed, and improved."],
  ["04", "Add evidence and guardrails", "Make the system explain what happened and stop safely when certainty runs out."],
  ["05", "Operate what ships", "Validate in the real environment, learn from friction, and keep the product maintainable."],
];

type SectionId = (typeof sections)[number]["id"];

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const nodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id as SectionId);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="topbar">
        <button className="wordmark" onClick={() => jumpTo("home")} aria-label="Back to top">
          JF<span>.</span>
        </button>
        <div className="topbar-role">Product-minded engineer <span>/</span> Austin, Texas</div>
        <a className="availability" href="mailto:wm.jfletcher@gmail.com">
          <span aria-hidden="true" /> Open to the right opportunity
        </a>
      </header>

      <nav className="side-nav" aria-label="Page sections">
        {sections.map(({ id, label, icon }) => (
          <button
            className={activeSection === id ? "side-nav-item active" : "side-nav-item"}
            key={id}
            onClick={() => jumpTo(id)}
            aria-current={activeSection === id ? "location" : undefined}
            aria-label={`Go to ${label}`}
            type="button"
          >
            <span className="side-nav-label">{label}</span>
            <span className="side-nav-icon"><Icon name={icon} size={18} /></span>
          </button>
        ))}
      </nav>

      <nav className="mobile-bottom-nav" aria-label="Mobile page sections">
        {sections.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => jumpTo(id)}
            className={activeSection === id ? "active" : ""}
            aria-current={activeSection === id ? "location" : undefined}
            aria-label={`Go to ${label}`}
          >
            <Icon name={icon} size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <main id="main-content">
        <section id="home" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><span>Forward-deployed engineering</span> / Product systems / AI workflows</p>
            <h1 id="hero-title">I turn complicated problems into <em>working systems.</em></h1>
            <p className="hero-lead">
              I’m Josh Fletcher, a full-stack product builder working at the intersection of software, operations, and AI. I design the path, build the product, and stay close enough to production to know whether it actually works.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => jumpTo("work")}>
                Explore selected work <Icon name="arrow" />
              </button>
              <a className="button quiet" href="https://github.com/wjfletch26" target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>
          <div className="hero-portrait" aria-label="Portrait of Josh Fletcher">
            <div className="portrait-frame">
              <Image src="/josh.jpg" alt="Josh Fletcher" fill priority sizes="(max-width: 760px) 80vw, 35vw" />
            </div>
            <div className="portrait-note">Builder <span>+</span> operator</div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span /> Scroll to inspect</div>
        </section>

        <section id="about" className="section-shell section-content" aria-labelledby="about-title">
          <SectionHeading index="01" kicker="The short version" title="More than a developer. Less interested in theater." id="about-title" />
          <div className="about-layout">
            <div className="about-statement">
              <p>I work best where the problem is real, the path is unclear, and somebody has to connect strategy to implementation.</p>
              <p className="muted">That has led me from economics and consultative sales into full-stack development, product ownership, automation, AI systems, and the unglamorous production work that makes all of it reliable.</p>
            </div>
            <div className="direction-card">
              <p className="card-kicker">Where I’m heading</p>
              <h3>Forward-deployed engineering, solutions architecture, and technical product leadership.</h3>
              <p>I’m pursuing roles where understanding the customer, designing the system, and shipping the solution are part of the same job.</p>
              <div className="direction-list">
                <span>01 / Understand the operation</span>
                <span>02 / Design across boundaries</span>
                <span>03 / Ship into the real environment</span>
              </div>
            </div>
          </div>
          <div className="principles-row" aria-label="Working principles">
            <div><strong>Business fluent</strong><span>I can translate between users, operators, and engineers.</span></div>
            <div><strong>Systems minded</strong><span>I look for handoffs, state, failure modes, and hidden dependencies.</span></div>
            <div><strong>Delivery oriented</strong><span>A clever design that never reaches production is just expensive fan fiction.</span></div>
          </div>
        </section>

        <section id="work" className="section-shell section-content" aria-labelledby="work-title">
          <SectionHeading index="02" kicker="Selected systems" title="Work with operational weight." id="work-title" />
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-index">{project.number}</div>
                <div className="project-main">
                  <p className="card-kicker">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.impact.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="project-stack">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">Earlier interface experiments and learning projects remain available on <a href="https://github.com/wjfletch26" target="_blank" rel="noreferrer">GitHub</a>. The work above better represents the problems I solve now.</p>
        </section>

        <section id="capabilities" className="section-shell section-content" aria-labelledby="capabilities-title">
          <SectionHeading index="03" kicker="Capabilities" title="Depth where the pieces meet." id="capabilities-title" />
          <div className="capability-intro">
            <p>My advantage is not pretending to be the world’s deepest specialist in every layer.</p>
            <p>It is being dangerous enough across the stack to see the whole system, communicate with specialists, and get a complete solution over the line.</p>
          </div>
          <div className="capability-grid">
            {capabilityGroups.map((group, index) => (
              <article key={group.title}>
                <span className="capability-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
                <div className="tag-cloud">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="stack-line">
            <span>Current working stack</span>
            <p>TypeScript · Next.js · React · Node.js · Express · MongoDB · AWS · Docker · GitHub Actions · Make · n8n</p>
          </div>
        </section>

        <section id="approach" className="section-shell section-content" aria-labelledby="approach-title">
          <SectionHeading index="04" kicker="How I work" title="Clarity first. Then velocity." id="approach-title" />
          <div className="process-layout">
            <div className="process-intro">
              <p>I do not start by spraying code at the first visible symptom.</p>
              <p className="muted">I reduce uncertainty, define what “working” means, and create a path that stays verifiable as the system grows.</p>
              <blockquote>“The job is not to make software look finished. The job is to make the operation work better.”</blockquote>
            </div>
            <ol className="process-list">
              {process.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="eyebrow">Have a difficult system to untangle?</p>
            <h2 id="contact-title">Let’s build something that holds up <em>after the demo.</em></h2>
            <p>I’m open to forward-deployed, full-stack, solutions architecture, and technical product opportunities, along with focused partnerships where I can own the path from problem to production.</p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:wm.jfletcher@gmail.com">Start a conversation <Icon name="mail" /></a>
              <a className="social-link" href="https://www.linkedin.com/in/wmjfletch/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              <a className="social-link" href="https://github.com/wjfletch26" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
            </div>
          </div>
          <footer>
            <span>Josh Fletcher</span>
            <span>Austin, Texas · {new Date().getFullYear()}</span>
            <button onClick={() => jumpTo("home")}>Back to top ↑</button>
          </footer>
        </section>
      </main>
    </>
  );
}

function SectionHeading({ index, kicker, title, id }: { index: string; kicker: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <div className="section-meta"><span>{index}</span><p>{kicker}</p></div>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
