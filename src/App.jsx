import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import CircuitBackground from "./components/CircuitBackground";
import CircuitMap from "./components/CircuitMap";
import GlowButton from "./components/GlowButton";

// Panels
import AboutPanel from "./components/panels/AboutPanel";
import SkillsPanel from "./components/panels/SkillsPanel";
import ProjectsPanel from "./components/panels/ProjectsPanel";
import AchievementsPanel from "./components/panels/AchievementsPanel";
import ContactPanel from "./components/panels/ContactPanel";

function HeroPanel() {
  return (
    <Motion.div
      className="panel"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
    >
      <h3>
        <span className="mr-2 wave-hand">👋</span>
        Welcome to Circuit Land — Board of Sindhur
      </h3>
      <p className="panel-content">Explore the circuit-map by switching panels.</p>
      <p className="mt-3 text-sm text-cyan-200/80">
        Step into Circuit Land — a playful, neon interface where each node reveals
        a slice of my work, skills, achievements, and ways to connect. Click the
        glowing nodes or use the buttons to navigate.
      </p>
    </Motion.div>
  );
}

export default function App() {
  const [active, setActive] = useState("hero");

  const panelConfig = {
    hero: { label: "Home", component: <HeroPanel /> },
    about: { label: "About", component: <AboutPanel /> },
    skills: { label: "Skills", component: <SkillsPanel /> },
    projects: { label: "Projects", component: <ProjectsPanel /> },
    achievements: { label: "Achievements", component: <AchievementsPanel /> },
    contact: { label: "Contact", component: <ContactPanel /> },
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-cyan-100 bg-gradient-to-br from-[#020617] to-[#0d0f1b]">
      
      {/* Background */}
      <CircuitBackground />

      {/* Circuit Map */}
      <CircuitMap active={active} setActive={setActive} panels={panelConfig} />

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Sidebar Navigation for large screens */}
        <div className="hidden lg:flex z-40">
          <div className="w-60 rounded-2xl p-4 border border-cyan-500/10 bg-black/30 backdrop-blur-sm shadow-[0_6px_40px_rgba(0,245,255,0.06)] flex flex-col gap-3">
            <div className="px-1">
              <div className="text-xs tracking-widest text-cyan-300/80">PANEL MAP</div>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-cyan-500/30 via-cyan-400/10 to-transparent" />
            </div>
            {Object.entries(panelConfig).map(([key, { label }]) => (
              <GlowButton
                key={key}
                onClick={() => setActive(key)}
                className={`${active === key ? "shadow-[0_0_22px_rgba(0,245,255,0.8)] bg-cyan-500/20" : "bg-black/20"} w-full flex items-center gap-3 justify-start px-3`}
              >
                <span
                  className={`${active === key ? "bg-cyan-400 shadow-[0_0_10px_rgba(0,245,255,0.9)]" : "bg-cyan-400/40"} w-2 h-2 rounded-full`}
                />
                <span className="text-sm">{label}</span>
              </GlowButton>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons - moved to top */}
        <div className="flex lg:hidden items-center justify-center gap-2.5 mb-4 z-40 flex-wrap">
          {Object.entries(panelConfig).map(([key, { label }]) => (
            <GlowButton
              key={key}
              onClick={() => setActive(key)}
              className={`text-xs px-2 py-1 whitespace-nowrap ${active === key ? "scale-105 shadow-[0_0_25px_cyan]" : ""}`}
            >
              {label}
            </GlowButton>
          ))}
        </div>

        {/* Panels */}
        <div className="flex-1 z-40">
          <AnimatePresence mode="wait">
            <Motion.div
              key={active}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {panelConfig[active].component}
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom System Text */}
      <div className="absolute bottom-4 left-6 text-xs text-cyan-300/70 tracking-widest z-40">
        <span className="inline-block animate-pulse">SYSTEM ACTIVE</span>
      </div>
    </div>
  );
}
