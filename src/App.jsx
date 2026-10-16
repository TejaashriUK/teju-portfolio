import { useEffect } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    category: 'AI / MACHINE LEARNING',
    name: 'AirCast',
    subtitle: 'AQI Forecasting System',
    description:
      'AirCast explores data-driven Air Quality Index (AQI) forecasting to make environmental information easier to interpret. The project focuses on using data analysis and machine learning concepts to support more informed awareness of air quality.',
    highlights: [
      'AQI Forecasting',
      'Data Analysis',
      'Environmental Monitoring',
    ],
    visual: 'aircast',
    symbol: 'A',
    repo: 'https://github.com/TejaashriUK/AirCast-AQI-Forecasting-System',
  },
  {
    number: '02',
    category: 'AI / SOCIAL IMPACT',
    name: 'Smart Policing',
    subtitle: 'Missing Person Assistance System',
    description:
      'Smart Policing explores how a technology-assisted workflow can support missing-person searches and public safety. It focuses on organizing relevant information to help make the search process more structured and easier to follow.',
    highlights: [
      'Public Safety',
      'Missing-Person Assistance',
      'Social Impact',
    ],
    visual: 'policing',
    symbol: '⌖',
    repo: 'https://github.com/TejaashriUK/Smart-Policing-Missing-Person-Assistance-System-',
  },
]

const skillGroups = [
  {
    number: '01',
    title: 'DATA SCIENCE & ANALYTICS',
    description: 'Working with data, analysis, and machine learning.',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SQL',
      'MS Excel',
      'Tableau',
    ],
  },
  {
    number: '02',
    title: 'DEVELOPMENT & APIs',
    description: 'Building applications and connecting services.',
    skills: ['Python', 'FastAPI', 'React.js', 'REST APIs'],
  },
  {
    number: '03',
    title: 'CLOUD & DEVOPS',
    description:
      'Cloud fundamentals, containerization, and automation workflows.',
    skills: [
      'AWS',
      'Docker',
      'Jenkins',
      'Git',
      'GitHub',
      'GitHub Actions',
      'DevOps',
    ],
  },
  {
    number: '04',
    title: 'TOOLS & PLATFORMS',
    description: 'Tools I use for coding, analysis, and development.',
    skills: ['VS Code', 'Google Colab'],
  },
  {
    number: '05',
    title: 'CORE STRENGTHS',
    description: 'Skills I bring to projects and collaborative work.',
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Python & ML',
      'Presentation Skills',
      'Team Collaboration',
      'Communication',
    ],
  },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Tejaashri K home">
          TEJAASHRI K
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s connect ↗
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            AI & DATA SCIENCE UNDERGRADUATE
          </p>

          <h1>
            Building intelligent
            <br />
            solutions for <span>real life.</span>
          </h1>

          <p className="intro">
            I&apos;m Tejaashri, an AI & Data Science undergraduate exploring
            the intersection of software engineering, machine learning,
            and meaningful real-world impact.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work ↗
            </a>
            <a className="button-secondary" href="#about">
              More about me
            </a>
          </div>

          <p className="hero-note">LEARN. BUILD. EXPLORE. IMPROVE.</p>
        </div>

        <div
          className="hero-art"
          aria-label="Abstract AI-inspired illustration"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="core">
            <span>AI</span>
          </div>
          <span className="orbit-label label-one">BUILD</span>
          <span className="orbit-label label-two">LEARN</span>
          <span className="orbit-label label-three">CREATE</span>
          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">✦</span>
        </div>
      </section>

      <div className="ticker">
        <span>ARTIFICIAL INTELLIGENCE</span>
        <b>✳</b>
        <span>SOFTWARE ENGINEERING</span>
        <b>✳</b>
        <span>DATA SCIENCE</span>
        <b>✳</b>
        <span>CLOUD AND DEVOPS</span>
      </div>

      <section className="section about-section" id="about">
        <div className="reveal section-intro-centered">
          <p className="section-label">01 / ABOUT ME</p>

          <h2>
            My journey in AI and
            <br />
            <span>software engineering.</span>
          </h2>

          <p className="section-description">
            I&apos;m pursuing a B.Tech in Artificial Intelligence and Data Science.
            I enjoy turning ideas into practical projects, strengthening my
            problem-solving skills, and learning how reliable software is built.
            My goal is to create technology that is useful, thoughtful, and scalable.
          </p>
        </div>

        <div className="value-grid">
          <article className="value-card reveal">
            <span className="card-number">01 / THINK</span>
            <h3>Think deeply</h3>
            <p>Break complex problems into smaller, understandable steps.</p>
          </article>

          <article className="value-card reveal">
            <span className="card-number">02 / BUILD</span>
            <h3>Build practically</h3>
            <p>Learn by creating projects and improving them through feedback.</p>
          </article>

          <article className="value-card reveal">
            <span className="card-number">03 / GROW</span>
            <h3>Keep improving</h3>
            <p>Grow through experimentation, collaboration, and consistency.</p>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="reveal">
          <p className="section-label">02 / SELECTED WORK</p>

          <div className="section-heading-row">
            <h2>
              Ideas into <span>action.</span>
            </h2>
            <p>
              Projects exploring AI, software, and practical problem solving.
            </p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className={`project-visual visual-${project.visual}`}>
                <span className="visual-tag">{project.category}</span>
                <div className="project-symbol">{project.symbol}</div>
                <div className="visual-orbit visual-orbit-one" />
                <div className="visual-orbit visual-orbit-two" />
                <span className="visual-caption">
                  PROJECT / {project.number}
                </span>
              </div>

              <div className="project-info">
                <p className="project-type">
                  PROJECT {project.number} — {project.category}
                </p>

                <h3>{project.name}</h3>
                <h4>{project.subtitle}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span>↗</span> {highlight}
                    </li>
                  ))}
                </ul>

                <a
                  className="text-link"
                  aria-label={`Explore the ${project.name} GitHub repository`}
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore repository ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="honesty-note reveal">
          Visit the repositories for source code, implementation details,
          and project updates.
        </p>
      </section>

      <section className="section skills-section" id="skills">
        <div className="reveal section-intro-centered">
          <p className="section-label">03 / SKILLS & STRENGTHS</p>

          <h2>
            My technical <span>toolkit.</span>
          </h2>

          <p className="section-description">
            Technologies and skills I&apos;m learning and applying through
            coursework, practice, and projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.number}>
              <span className="skill-index">{group.number}</span>
              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>

              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="reveal contact-content-centered">
          <p className="section-label">04 / GET IN TOUCH</p>

          <h2>
            The next great idea
            <br />
            <span>could start here.</span>
          </h2>

          <p className="contact-intro">
            Open to building, collaborating, and exploring ideas that make a difference.
          </p>

          <div className="contact-actions">
            <a
              className="button-primary"
              href="mailto:tejaashriuk.16@gmail.com"
            >
              Discuss an opportunity ↗
            </a>
            <a className="button-secondary" href="tel:+919843643664">
              Connect with me
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:tejaashriuk.16@gmail.com">
              <span className="contact-label">EMAIL</span>
              tejaashriuk.16@gmail.com
            </a>

            <a href="tel:+919843643664">
              <span className="contact-label">PHONE</span>
              +91 98436 43664
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/TejaashriUK"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/tejaashri-k-0610a9315/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-name">TEJAASHRI K</p>
        <p>Building with curiosity. Learning through practice.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App

