import React from "react";
import { motion } from "framer-motion";

export default function CircuitBackground({ pathD }) {
  // Electron moving along path
  const electronMotion = {
    animate: {
      pathLength: [0, 1],
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9b00ff" stopOpacity="0.08" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Circuit trace gradient */}
        <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        {/* Subtle grid pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00f5ff" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Background gradient */}
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
          <stop offset="35%" stopColor="#22d3ee" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#020617" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGlow)" />

      {/* Soft glows */}
      <g opacity="0.35" filter="url(#glow)">
        <circle cx="20%" cy="25%" r="120" fill="#00f5ff" />
        <circle cx="80%" cy="30%" r="100" fill="#7c3aed" />
        <circle cx="50%" cy="75%" r="140" fill="#22d3ee" />
      </g>

      {/* Moving grid overlay */}
      <g opacity="0.5">
        <g>
          <rect width="200%" height="200%" fill="url(#grid)" transform="translate(-50,-50)">
            <animateTransform attributeName="transform" type="translate" from="-50,-50" to="-10,-50" dur="20s" repeatCount="indefinite" />
          </rect>
        </g>
      </g>

      {/* Floating particles */}
      <g opacity="0.7">
        {[{x:10,y:70,r:1.8,d:8},{x:30,y:20,r:2.2,d:10},{x:60,y:40,r:1.6,d:9},{x:85,y:65,r:2.0,d:11},{x:45,y:15,r:1.4,d:7}].map((p, i) => (
          <motion.circle
            key={i}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.r}
            fill="#7afcff"
            initial={{ opacity: 0.4, y: 0 }}
            animate={{ opacity: [0.25, 0.6, 0.25], y: [-6, 6, -6] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            filter="url(#glow)"
          />
        ))}
      </g>

      {/* Circuit traces */}
      <g opacity="0.6" stroke="url(#trace)" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
        {[
          // left cluster
          "M 5% 35% H 18% V 20% H 30%",
          "M 12% 70% H 25% V 45% H 38%",
          // center hub
          "M 30% 50% H 50% V 35% H 65%",
          "M 50% 70% V 50% H 75%",
          // right cluster
          "M 80% 25% V 45% H 65%",
          "M 88% 60% H 70% V 80%",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            strokeWidth={1.6}
            strokeDasharray="6 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="6s" repeatCount="indefinite" />
          </motion.path>
        ))}

        {/* Nodes */}
        {[{x:30,y:50},{x:50,y:35},{x:65,y:45},{x:25,y:45},{x:70,y:80}].map((n, i) => (
          <circle key={`n-${i}`} cx={`${n.x}%`} cy={`${n.y}%`} r="3" fill="#00f5ff" />
        ))}
      </g>

      {/* Dynamic Electron Path */}
      {pathD && (
        <>
          <path d={pathD} stroke="#00f5ff" strokeWidth="2" fill="none" filter="url(#glow)" />
          <motion.circle
            r="3"
            fill="#00f5ff"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#dynamicPath" />
            </animateMotion>
          </motion.circle>
        </>
      )}
    </svg>
  );
}
