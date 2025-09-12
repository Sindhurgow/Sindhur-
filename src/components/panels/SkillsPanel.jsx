import { motion } from "framer-motion";
import resume from "../../data/resume";
import SkillChip from "../SkillChip";


export default function SkillsPanel() {
return (
<motion.div
key="skills"
initial={{ opacity: 0, x: 40 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 40 }}
className="rounded-2xl p-6 border border-cyan-500/10 bg-black/30 backdrop-blur-sm"
>
<h3 className="text-lg font-semibold text-cyan-200">Skills</h3>
<div className="mt-4">
<div className="text-sm text-cyan-300 font-medium">Frontend</div>
<div className="mt-2 grid grid-cols-3 gap-2">
{resume.skills.frontend.map((s) => (
<SkillChip key={s} label={s} />
))}
</div>
<div className="text-sm text-cyan-300 font-medium mt-4">Backend</div>
<div className="mt-2 grid grid-cols-3 gap-2">
{resume.skills.backend.map((s) => (
<SkillChip key={s} label={s} />
))}
</div>
<div className="text-sm text-cyan-300 font-medium mt-4">Database</div>
<div className="mt-2 grid grid-cols-3 gap-2">
{resume.skills.database.map((s) => (
<SkillChip key={s} label={s} />
))}
</div>
<div className="mt-4 text-[11px] text-cyan-200/70 italic">
Dare to hover a sigil — the circuit awakens and reveals its mastery in shimmering percent.
</div>
</div>
</motion.div>
);
}