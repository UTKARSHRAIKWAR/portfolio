import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "AI Interview Platform",
    desc: "AI-powered mock interview system with GPT-based evaluation and feedback.",
    tags: ["React", "LangChain", "Node.js", "MongoDB"],
    link: "https://github.com/UTKARSHRAIKWAR/Project-Ai-interview-Platform.git",
  },
  {
    title: "Job Portal",
    desc: "Interactive job and internship platform for students and recruiters.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    link: "https://github.com/UTKARSHRAIKWAR/Job-Portal.git",
  },
  {
    title: "Real-Time Chat Application",
    desc: "Scalable WebSocket chat with React frontend, Node/Express backend, and MongoDB persistence.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    link: "https://github.com/UTKARSHRAIKWAR/CHAT-APP.git",
  },
  {
    title: "Short URL Service",
    desc: "URL shortener with analytics, Redis caching and secure API endpoints.",
    tags: ["Node.js", "Redis", "TypeScript"],
    link: "https://urlshortmini.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Utkarsh Raikwar</h1>
          <p className="text-sm text-slate-400">
            Full-Stack Web Developer — AI & Cloud enthusiast
          </p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-slate-200">
            Projects
          </a>
          <a href="#skills" className="text-sm hover:text-slate-200">
            Skills
          </a>
          <a href="#contact" className="text-sm hover:text-slate-200">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-4 inline-flex items-center rounded-md border border-slate-700 px-3 py-1 text-sm shadow-sm hover:shadow-md"
          >
            Resume
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              I build thoughtful web apps and AI integrations.
            </h2>
            <p className="mt-4 text-slate-400">
              I design and develop full-stack applications — from real-time
              systems and APIs to AI-driven tools. Currently exploring
              LangChain, GPT-based workflows, and scalable cloud deployments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-block rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-block rounded-lg border border-slate-700 px-4 py-2 text-sm"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-slate-400">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Mail size={16} /> utkarshraikwar555@gmail.com
              </a>
              <a
                href="https://github.com/UTKARSHRAIKWAR"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Github size={16} /> github.com/UTKARSHRAIKWAR
              </a>
              <a
                href="https://linkedin.com/in/utkarsh-raikwar"
                className="inline-flex items-center gap-2 hover:text-slate-200"
              >
                <Linkedin size={16} /> linkedin.com/in/utkarsh-raikwar
              </a>
            </div>
          </motion.div>

          <motion.div
            className="order-first md:order-last flex justify-center md:justify-end"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              {/* Replace with your photo */}
              <div className="text-center p-6">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-sm">
                  Your Photo
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Full-stack, AI, Cloud
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-bold text-white">Selected Projects</h3>
          <p className="text-slate-400 mt-2">
            A small selection of recent work — click to explore code and live
            demos. hell ya
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={p.title}
                initial={{ y: 8, opacity: 0 }}
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

        <section id="skills" className="mt-16">
          <h3 className="text-2xl font-bold text-white">Skills & Tools</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h4 className="font-semibold text-white">
                Languages & Frameworks
              </h4>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-400">
                <li>JavaScript / TypeScript</li>
                <li>React</li>
                <li>Node.js / Express</li>
                <li>Python</li>
                <li>Java / C++</li>
                <li>MongoDB / SQL</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <h4 className="font-semibold text-white">DevOps & AI</h4>
              <ul className="mt-3 text-sm text-slate-400">
                <li>Docker, AWS (EC2, S3), Vite, CI/CD</li>
                <li>LangChain, GPT integrations</li>
                <li>WebSockets, real-time systems</li>
                <li>Testing & Observability</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-bold text-white">Contact</h3>
          <p className="text-slate-400 mt-2">
            Open to internships, freelancing and full-time roles.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h4 className="font-semibold text-white">Say hi</h4>
              <p className="mt-2 text-sm text-slate-400">
                Prefer email? Send a message — I usually reply within a day.
              </p>

              <a
                href="mailto:youremail@example.com"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm"
              >
                {" "}
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

        <footer className="mt-20 mb-12 text-center text-sm text-slate-500">
          <p>Made with care • © {new Date().getFullYear()} Utkarsh Raikwar</p>
        </footer>
      </main>
    </div>
  );
}
