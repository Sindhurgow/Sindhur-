import { motion } from "framer-motion";

export default function GlowButton({ children, onClick, className }) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-100 font-semibold shadow-md transition-all cursor-pointer
                  bg-black/20 hover:bg-cyan-500/30 hover:shadow-[0_0_25px_cyan] ${className || ""}`}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
