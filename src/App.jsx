import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Menu } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AI Interview Platform",
    desc: "AI-powered mock interview system with GPT-based evaluation, feedback, and performance analysis.",
    tags: ["React", "LangChain", "Node.js", "MongoDB"],
    link: "https://github.com/UTKARSHRAIKWAR/Project-Ai-interview-Platform.git",
  },
  {
    title: "Real-Time Chat Application",
    desc: "Scalable real-time chat application using WebSockets with secure authentication and message persistence.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    link: "https://github.com/UTKARSHRAIKWAR/CHAT-APP.git",
  },
  {
    title: "File Storage Service",
    desc: "Secure cloud-based file storage system with authentication, role-based access control, and file versioning.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
    link: "https://github.com/UTKARSHRAIKWAR/File-Storage-Service.git", // add link when ready
  },
  {
    title: "Civic Reporting App",
    desc: "Location-based civic issue reporting platform with real-time tracking and admin dashboards.",
    tags: ["React", "Express.js", "MongoDB", "Leaflet.js", "Tailwind CSS"],
    link: "https://github.com/UTKARSHRAIKWAR/civic-issue-reporting.git", // add link when ready
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Utkarsh Raikwar</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Full-Stack Web Developer — AI & Cloud enthusiast
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-slate-200">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-200">
            Skills
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-2 inline-flex items-center rounded-md border border-slate-700 px-3 py-1 shadow-sm hover:shadow-md"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-3 space-y-3 text-sm">
          <a href="#projects" className="block hover:text-slate-200">
            Projects
          </a>
          <a href="#skills" className="block hover:text-slate-200">
            Skills
          </a>
          <a href="#contact" className="block hover:text-slate-200">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="block rounded-md border border-slate-700 px-3 py-2 text-center"
          >
            Resume
          </a>
        </nav>
      )}

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              I build thoughtful web apps and AI integrations.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              I design and develop full-stack applications — from real-time
              systems and APIs to AI-driven tools. Currently exploring
              LangChain, GPT-based workflows, and scalable cloud deployments.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-slate-400 text-sm">
              <a
                href="mailto:utkarshraikwar555@gmail.com"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/UTKARSHRAIKWAR"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/utkarsh-raikwar"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            className="order-first md:order-last flex justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-700">
                  <img
                    src="/profile.jpg"
                    alt="Utkarsh Raikwar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400">
                  Full-stack • AI • Cloud
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Selected Projects
          </h3>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            A small selection of recent work — click to explore code and live
            demos.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p, idx) => (
              <motion.article
                key={p.title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * idx }}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-sm hover:shadow-md"
              >
                <h4 className="font-semibold text-lg text-white">{p.title}</h4>
                <p className="mt-2 text-slate-400 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-slate-700 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-400 hover:underline"
                  >
                    Live / Code →
                  </a>
                  <span className="text-xs text-slate-500">2–8 weeks</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Skills & Tools
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h4 className="font-semibold text-white">
                Languages & Frameworks
              </h4>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-400">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js / Express</li>
                <li>Python</li>
                <li>Java </li>
                <li>MongoDB / Postgres</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h4 className="font-semibold text-white">DevOps & AI</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>Docker, AWS (EC2, S3), Vite, CI/CD</li>
                <li>LangChain, GPT integrations</li>
                <li>WebSockets, real-time systems</li>
                <li>Testing & Observability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Contact</h3>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Open to internships, freelancing and full-time roles.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h4 className="font-semibold text-white">Say hi</h4>
              <p className="mt-2 text-sm text-slate-400">
                Prefer email? Send a message — I usually reply within a day.
              </p>

              <a
                href="mailto:utkarshraikwar555@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm"
              >
                <Mail size={16} /> Email me
              </a>

              <div className="mt-6 text-sm text-slate-400">
                <p>Also available on:</p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href="https://github.com/UTKARSHRAIKWAR"
                    className="inline-flex items-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/utkarsh-raikwar"
                    className="inline-flex items-center gap-2"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <form className="rounded-xl border border-slate-700 bg-slate-800 p-6 space-y-3">
              <label className="block text-xs text-slate-400">Your name</label>
              <input
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                placeholder="Jane Doe"
              />
              <label className="block text-xs text-slate-400">Email</label>
              <input
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                placeholder="you@company.com"
              />
              <label className="block text-xs text-slate-400">Message</label>
              <textarea
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                rows={4}
                placeholder="Short message..."
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 mb-10 text-center text-xs sm:text-sm text-slate-500">
          <p>Made with care • © {new Date().getFullYear()} Utkarsh Raikwar</p>
        </footer>
      </main>
    </div>
  );
}
