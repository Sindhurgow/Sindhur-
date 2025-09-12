import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CircuitMap({ active, setActive, panels }) {
  const nodePositions = {
    hero: { top: 10, left: 50 },
    about: { top: 30, left: 20 },
    skills: { top: 30, left: 80 },
    projects: { top: 55, left: 35 },
    achievements: { top: 55, left: 65 },
    contact: { top: 80, left: 50 },
  };

  const [prevActive, setPrevActive] = useState(active);

  useEffect(() => {
    if (nodePositions[active]) setPrevActive(active);
  }, [active]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
      {/* Animated connecting line */}
      {nodePositions[prevActive] && nodePositions[active] && (
        <motion.svg className="absolute w-full h-full top-0 left-0">
          <motion.line
            x1={`${nodePositions[prevActive].left}%`}
            y1={`${nodePositions[prevActive].top}%`}
            x2={`${nodePositions[active].left}%`}
            y2={`${nodePositions[active].top}%`}
            stroke="#00f5ff"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.svg>
      )}

      {/* Nodes */}
      {Object.entries(panels).map(([key, { label }]) => {
        const pos = nodePositions[key];
        if (!pos) return null;

        const isActive = key === active;

        return (
          <motion.div
            key={key}
            initial={{ scale: 0 }}
            animate={{
              scale: isActive ? 1.4 : 1,
              y: [0, -6, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute px-4 py-2 rounded-full border border-cyan-400/50 text-cyan-100 font-semibold cursor-pointer
              ${isActive ? "bg-cyan-500/40 shadow-[0_0_25px_cyan]" : "bg-black/40 hover:bg-cyan-500/20 hover:shadow-[0_0_12px_cyan]"}`}
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto", // allow clicks
            }}
            onClick={() => setActive(key)}
          >
            {label}
          </motion.div>
        );
      })}
    </div>
  );
}
