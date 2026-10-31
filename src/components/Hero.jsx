import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowDown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiSpringboot, SiPostgresql, SiApachekafka } from "react-icons/si";
import { personal, stats, roles } from "../data/resume";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (!deleting && text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    else if (!deleting && text.length === current.length) t = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    else if (deleting && text.length === 0) { setDeleting(false); setRoleIndex((i) => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-600/30 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl animate-float" />
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-10 text-brand-600/40 text-6xl hidden lg:block"><SiReact /></motion.div>
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-20 text-green-400/30 text-5xl hidden lg:block"><SiSpringboot /></motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-40 right-16 text-blue-300/30 text-5xl hidden lg:block"><SiPostgresql /></motion.div>
      <motion.div animate={{ y: [0, 22, 0], rotate: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 right-20 text-orange-300/20 text-5xl hidden lg:block"><SiApachekafka /></motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 backdrop-blur text-sm text-slate-600 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for opportunities
        </motion.div>
        <motion.h1 variants={item} className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 leading-[1.05]">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-brand-600 via-accent to-pink-400 bg-clip-text text-transparent">
            {personal.shortName}
          </span>
        </motion.h1>
        <motion.div variants={item} className="mt-4 h-10 flex items-center justify-center text-xl md:text-2xl text-slate-600 font-medium">
          <span className="text-slate-500 mr-2">I'm a</span>
          <span className="text-cyan-600 font-semibold">{text}</span>
          <span className="ml-0.5 w-0.5 h-6 bg-accent animate-pulse" />
        </motion.div>
        <motion.p variants={item} className="mt-6 max-w-2xl mx-auto text-slate-500 leading-relaxed text-base md:text-lg">
          {personal.summary}
        </motion.p>
        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200"><FaMapMarkerAlt className="text-brand-600" /> {personal.location}</span>
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-brand-600/40 transition-colors"><FaEnvelope className="text-brand-600" /> {personal.email}</a>
          <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-brand-600/40 transition-colors"><FaPhone className="text-brand-600" /> {personal.phone}</a>
        </motion.div>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-accent text-white font-semibold shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all">
            Get In Touch <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-semibold hover:bg-slate-200 hover:scale-105 transition-all backdrop-blur">
            View Projects
          </a>
          <div className="flex gap-2">
            <a href={personal.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-200 hover:scale-110 transition-all"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-200 hover:scale-110 transition-all"><FaLinkedin /></a>
          </div>
        </motion.div>
        <motion.div variants={item} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s) => (
            <motion.div key={s.label} whileHover={{ y: -8, scale: 1.04 }} className="p-5 rounded-2xl bg-slate-100 border border-slate-200 backdrop-blur hover:border-brand-600/50 transition-colors">
              <div className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                <CountUp value={s.value} />
                <span className="text-brand-600">{s.suffix}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-900">
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
function CountUp({ value }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);
  return <span>{n}</span>;
}

