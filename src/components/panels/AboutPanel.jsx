import { motion as Motion } from "framer-motion";
import resume from "../../data/resume";


export default function AboutPanel() {
  return (
    <Motion.div
      key="about"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="rounded-2xl p-6 border border-cyan-500/10 bg-black/30 backdrop-blur-sm"
    >
      <h3 className="text-lg font-semibold text-cyan-200">About</h3>

      <div className="mt-4 flex items-start gap-5">
        <img
          src="https://ibb.co/WWkzJmHK"
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full object-cover border border-cyan-400/30 shadow-[0_0_18px_rgba(0,245,255,0.35)] scale-[1.08] transition-transform"
        />
        <div>
          <p className="text-sm text-cyan-200/80">
            I'm Sindhur — a full‑stack developer crafting responsive interfaces and reliable
            backends. Beyond code, I'm a sportsman who thrives on discipline and teamwork,
            and a theater artist who brings storytelling, expression, and stagecraft to
            everything I build.
          </p>
          <p className="mt-2 text-sm text-cyan-200/70">
            I enjoy turning ideas into polished experiences with React, Node.js and Python,
            while keeping performance, accessibility, and clean architecture in focus.
          </p>
          <p className="mt-2 text-sm text-cyan-200/75">
            As a theater artist, I think in arcs and scenes: I storyboard flows, direct
            interactions, and pace the experience so each click lands like a beat. My goal
            is simple — code that reads like poetry and products that feel effortless.
          </p>
          <div className="mt-3 text-[12px] text-cyan-200/70 italic">
            "Discipline from sport. Imagination from art. Reliability from engineering."
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-full border border-cyan-400/20 text-[11px] text-cyan-200/80 bg-black/20">Full‑stack Developer</span>
            <span className="px-2 py-1 rounded-full border border-cyan-400/20 text-[11px] text-cyan-200/80 bg-black/20">Sportsman</span>
            <span className="px-2 py-1 rounded-full border border-cyan-400/20 text-[11px] text-cyan-200/80 bg-black/20">Theater Artist</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-cyan-400/10">
          <div className="text-xs text-cyan-300 font-medium">Education</div>
          <div className="text-xs text-cyan-200/80 mt-2">
            B.E. in Electronics & Telecommunication, Sri Siddhartha Institute of Technology
            — Tumkur, Karnataka
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/30 bg-black/20 text-cyan-100 hover:bg-cyan-500/20 hover:shadow-[0_0_18px_cyan] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.18h.07C13.6 8.72 15.3 8 17.24 8 22.1 8 23 11.06 23 15.26V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24H8z"/>
          </svg>
        </a>
        <a
          href="https://github.com/Sindhurgow"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/30 bg-black/20 text-cyan-100 hover:bg-cyan-500/20 hover:shadow-[0_0_18px_cyan] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.61-1.23-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.58 1.19 3.21.91.1-.71.39-1.19.71-1.46-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.12.88-.25 1.83-.38 2.77-.38.94 0 1.89.13 2.77.38 2.12-1.42 3.05-1.12 3.05-1.12.6 1.54.22 2.68.11 2.96.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.14-5.02 5.41.4.34.76 1.01.76 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.51-5.56 7.51-10.41C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd"/>
          </svg>
        </a>
        <a
          href={`mailto:${resume.email}`}
          aria-label="Email"
          title="Email"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/30 bg-black/20 text-cyan-100 hover:bg-cyan-500/20 hover:shadow-[0_0_18px_cyan] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
    </Motion.div>
  );
}