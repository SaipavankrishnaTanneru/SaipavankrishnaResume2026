import { motion } from "framer-motion";
import { FaRocket, FaDatabase, FaUsers, FaCode } from "react-icons/fa";
import { projects } from "../data/resume";

const iconMap = { FaRocket, FaDatabase, FaUsers, FaCode };

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] || FaCode;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 hover:border-brand-500/50 transition-colors overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-2xl shadow-lg mb-4`}>
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="text-accent text-sm font-medium mt-1">{p.subtitle}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-800/80 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
