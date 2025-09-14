import { motion } from "framer-motion";
import resume from "../data/resume";

export default function SkillChip({ label }) {
  const percent = resume.skillLevels?.[label];
  return (
    <motion.div
      whileHover={{ scale: 1.07, boxShadow: "0 0 12px #00f5ff99" }}
      className="skill-chip relative px-3 py-2 rounded-lg border border-cyan-400/40 text-sm overflow-hidden cursor-pointer"
    >
      <span className={`${percent != null ? "opacity-100" : ""} text-xs sm:text-sm`}>{label}</span>
      {percent != null && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-cyan-950/90 text-cyan-100 text-xs"
        >
          {percent}%
        </motion.div>
      )}
    </motion.div>
  );
}
