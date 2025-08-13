import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* Theme Toggle (CSS-only) */}
      <input type="checkbox" id="themeToggle" className="visually-hidden" />
      <label
        htmlFor="themeToggle"
        className="theme-switch"
        title="Toggle theme"
        aria-label="Toggle theme"
      ></label>

      {/* Sidebar Toggle (CSS-only) */}
      <input type="checkbox" id="navToggle" className="visually-hidden" />
      <header className="site-header">
        <label
          htmlFor="navToggle"
          className="hamburger"
          aria-label="Toggle navigation"
          title="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
        <a className="brand" href="#">
          <strong>LearnCraft</strong>
        </a>
        <form className="search" role="search" aria-label="Site search">
          <input
            type="search"
            placeholder="Search tutorials, e.g. ‘Flexbox’"
          />
          <button type="submit" aria-label="Search">
            🔎
          </button>
        </form>
      </header>

      <aside className="sidebar">
        <nav className="side-nav" aria-label="Primary">
          <h3>Get Started</h3>
          <a href="#html">HTML Basics</a>
          <a href="#css">CSS Essentials</a>
          <a href="#js">JavaScript Intro</a>
          <a href="#python">Python for Beginners</a>
          <a href="#git">Git & GitHub</a>
          <a href="#uiux">UI/UX Foundations</a>

          <h3>Reference</h3>
          <a href="#reference-html">HTML Tags</a>
          <a href="#reference-css">CSS Properties</a>
          <a href="#snippets">Code Snippets</a>
        </nav>
      </aside>

      <main className="content">
        <section className="hero">
          <div className="hero-text">
            <h1>Learn by Building</h1>
            <p>
              Short, practical tutorials with copy-ready snippets. No fluff, just
              skills.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#tracks">
                Browse Tracks
              </a>
              <a className="btn ghost" href="#html">
                Start with HTML
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Today’s Quick Win</h3>
            <p>Create a responsive, centered card in under a minute.</p>
            <pre className="code">
              <code>{`.card {
  max-width: 480px;
  margin: clamp(16px, 5vw, 48px) auto;
  padding: 1.25rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px hsl(var(--shadow)/.12);
}`}</code>
            </pre>
            <a className="btn slim" href="#snippets">
              More snippets →
            </a>
          </div>
        </section>

        <section id="tracks" className="grid">
          <h2>Learning Tracks</h2>
          <div className="cards">
            {[
              {
                title: "HTML Basics",
                desc: "Semantic tags, structure, accessibility, forms.",
                link: "#html",
              },
              {
                title: "CSS Essentials",
                desc: "Layouts, Flexbox, Grid, variables, responsive design.",
                link: "#css",
              },
              {
                title: "JavaScript Intro",
                desc: "Syntax, DOM, events, fetch, modules.",
                link: "#js",
              },
              {
                title: "Python Starter",
                desc: "Types, control flow, functions, files, venv.",
                link: "#python",
              },
              {
                title: "Git & GitHub",
                desc: "Init, commit, branch, merge, pull requests.",
                link: "#git",
              },
              {
                title: "UI/UX Foundations",
                desc: "Color, type, spacing, components, design systems.",
                link: "#uiux",
              },
            ].map((item, idx) => (
              <article className="card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a className="btn tiny" href={item.link}>
                  Explore
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="html" className="lesson">
          <h2>HTML Basics</h2>
          <p>HTML structures your content using semantic elements.</p>
          <div className="two-col">
            <div>
              <h4>Core Structure</h4>
              <pre className="code">
                <code>{`<!doctype html>
<html lang="en">
  <head>...</head>
  <body>Your content</body>
</html>`}</code>
              </pre>
            </div>
            <div className="tip">
              <strong>Tip:</strong> Use <code>&lt;main&gt;</code>,{" "}
              <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and{" "}
              <code>&lt;footer&gt;</code> for better accessibility.
            </div>
          </div>
          <a className="btn slim" href="#reference-html">
            HTML Tag Reference →
          </a>
        </section>

        <section id="css" className="lesson">
          <h2>CSS Essentials</h2>
          <p>CSS styles your page using selectors, properties, and values.</p>
          <div className="two-col">
            <div>
              <h4>Flexbox Centering</h4>
              <pre className="code">
                <code>{`.center {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`}</code>
              </pre>
            </div>
            <div className="note">
              <strong>Note:</strong> Prefer modern layout tools like Flexbox and
              Grid over floats.
            </div>
          </div>
          <a className="btn slim" href="#reference-css">
            CSS Property Reference →
          </a>
        </section>

        <section id="js" className="lesson">
          <h2>JavaScript Intro</h2>
          <p>JS adds behavior: interactivity, data fetching, and logic.</p>
          <div className="two-col">
            <div>
              <h4>Query &amp; Click</h4>
              <pre className="code">
                <code>{`document.querySelector(".btn")
  .addEventListener("click", () => alert("Hi!"));`}</code>
              </pre>
            </div>
            <div className="tip">
              <strong>Tip:</strong> Keep JS in separate files and defer script
              loading.
            </div>
          </div>
        </section>

        <section id="python" className="lesson">
          <h2>Python for Beginners</h2>
          <p>Readable syntax, huge ecosystem, great for automation &amp; ML.</p>
          <pre className="code">
            <code>{`def greet(name):
  print(f"Hello, {name}!")`}</code>
          </pre>
        </section>

        <section id="git" className="lesson">
          <h2>Git &amp; GitHub</h2>
          <pre className="code">
            <code>{`git init
git add .
git commit -m "first commit"
git remote add origin <url>
git push -u origin main`}</code>
          </pre>
        </section>

        <section id="uiux" className="lesson">
          <h2>UI/UX Foundations</h2>
          <ul className="bullets">
            <li>Use 8px spacing scale</li>
            <li>Limit to 2–3 fonts</li>
            <li>High contrast + accessible colors</li>
          </ul>
        </section>

        <section id="reference-html" className="reference">
          <h2>HTML Tag Reference (Quick Picks)</h2>
          <div className="ref-grid">
            <div>
              <code>&lt;header&gt;</code> Page header
            </div>
            <div>
              <code>&lt;nav&gt;</code> Navigation
            </div>
            <div>
              <code>&lt;main&gt;</code> Primary content
            </div>
            <div>
              <code>&lt;section&gt;</code> Thematic grouping
            </div>
            <div>
              <code>&lt;article&gt;</code> Self-contained content
            </div>
            <div>
              <code>&lt;footer&gt;</code> Page footer
            </div>
          </div>
        </section>

        <section id="reference-css" className="reference">
          <h2>CSS Property Reference (Quick Picks)</h2>
          <div className="ref-grid">
            <div>
              <code>display</code> layout mode
            </div>
            <div>
              <code>gap</code> spacing between items
            </div>
            <div>
              <code>place-items</code> align + justify
            </div>
            <div>
              <code>box-shadow</code> drop shadow
            </div>
            <div>
              <code>border-radius</code> rounded corners
            </div>
            <div>
              <code>@media</code> responsive rules
            </div>
          </div>
        </section>

        <section id="snippets" className="lesson">
          <h2>Copy-Ready Snippets</h2>
          <details className="snippet">
            <summary>Responsive 2-Column Grid</summary>
            <pre className="code">
              <code>{`.grid2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}`}</code>
            </pre>
          </details>
          <details className="snippet">
            <summary>Card Hover Lift</summary>
            <pre className="code">
              <code>{`.card { transition: transform .2s, box-shadow .2s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px hsl(var(--shadow)/.18); }`}</code>
            </pre>
          </details>
        </section>

        <footer className="site-footer">
          <p>
            © <span id="year">2025</span> LearnCraft. Built for learners, by
            learners.
          </p>
          <nav className="foot-nav">
            <a href="#">About</a>
            <a href="#">Contribute</a>
            <a href="#">Contact</a>
          </nav>
        </footer>
      </main>
    </>
    



  );
}    

export default App;
