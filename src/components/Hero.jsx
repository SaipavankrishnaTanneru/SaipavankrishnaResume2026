import { motion } from "framer-motion";
import { FaArrowDown, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiReact, SiSpringboot, SiPostgresql } from "react-icons/si";
import { personal, stats } from "../data/resume";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-600/30 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl animate-float" />
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-10 text-brand-400/40 text-6xl hidden lg:block"><SiReact /></motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-20 text-green-400/30 text-5xl hidden lg:block"><SiSpringboot /></motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 right-16 text-blue-300/30 text-5xl hidden lg:block"><SiPostgresql /></motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-sm text-slate-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for opportunities
        </motion.div>
        <motion.h1 variants={item} className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-brand-400 via-accent to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">{personal.shortName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-xl md:text-2xl text-slate-300 font-medium">
          {personal.title} <span className="text-slate-500">|</span> <span className="text-accent">{personal.subtitle}</span>
        </motion.p>
        <motion.p variants={item} className="mt-6 max-w-2xl mx-auto text-slate-400 leading-relaxed">{personal.summary.slice(0, 150)}…</motion.p>
        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-400" /> {personal.location}</span>
          <span className="flex items-center gap-2"><FaEnvelope className="text-brand-400" /> {personal.email}</span>
          <span className="flex items-center gap-2"><FaPhone className="text-brand-400" /> {personal.phone}</span>
        </motion.div>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent text-white font-semibold shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all">
            Get In Touch <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#experience" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all backdrop-blur">
            View Resume
          </a>
        </motion.div>
        <motion.div variants={item} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s) => (
            <motion.div key={s.label} whileHover={{ y: -6, scale: 1.03 }} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-brand-400/40 transition-colors">
              <div className="font-display text-3xl font-bold text-white">{s.value}<span className="text-brand-400">{s.suffix}</span></div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white">
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
