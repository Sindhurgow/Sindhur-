import { motion as Motion } from "framer-motion";


export default function AchievementsPanel() {
return (
<Motion.div
key="achievements"
initial={{ opacity: 0, x: 40 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 40 }}
className="rounded-2xl p-6 border border-cyan-500/10 bg-black/30 backdrop-blur-sm"
>
<h3 className="text-lg font-semibold text-cyan-200">Achievements</h3>
<p className="mt-3 text-cyan-200/80 text-sm leading-7 tracking-wide">
  Competed at the national level and secured
  {' '}<span className="text-cyan-200 font-semibold">43rd place</span>{' '}
  among{' '}
  <span className="text-cyan-200 font-semibold">1,400+ contenders</span>{' '}
  at the{' '}
  <span className="text-cyan-200 font-semibold">All India Inter‑University Pistol Championship</span>.
  {' '}Also a{' '}
  <span className="text-cyan-200 font-semibold">state‑level Taekwondo silver medalist</span>.
</p>
</Motion.div>
);
}