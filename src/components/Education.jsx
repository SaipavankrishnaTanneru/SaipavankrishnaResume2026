import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";
import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Education
          </h2>
        </motion.div>

        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-brand-900/20 border border-slate-800 hover:border-brand-500/40 transition-colors overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white text-3xl shadow-lg shadow-brand-500/30 shrink-0">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white">{e.degree}</h3>
                <p className="text-accent font-medium mt-1">{e.institute}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-3">
                  <span className="flex items-center gap-1.5"><FaCalendarAlt /> {e.period}</span>
                  <span className="flex items-center gap-1.5"><FaAward /> {e.score}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
