// Example: ProjectsPanel.jsx
import { motion } from "framer-motion";
import resume from "../../data/resume";

export default function ProjectsPanel() {
  return (
    <motion.div
      key="projects"
      className="rounded-2xl p-6 border border-cyan-500/10 bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
    >
      <h3 className="text-lg font-semibold text-cyan-200">Projects</h3>
      <div className="mt-4 grid gap-3">
        {resume.projects.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="block p-4 rounded-lg border border-cyan-400/10 bg-black/20 backdrop-blur-sm hover:scale-105 transition-transform"
          >
            <div className="text-sm font-medium text-cyan-100">{p.title}</div>
            <div className="text-xs text-cyan-200/80">{p.subtitle}</div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
