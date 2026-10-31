import { motion } from "framer-motion";
import {
  SiReact, SiSpringboot, SiPostgresql, SiApachekafka, SiNginx,
} from "react-icons/si";
import { FaCogs, FaGitAlt, FaCode } from "react-icons/fa";
import { skills } from "../data/resume";

const iconMap = {
  SiReact, SiSpringboot, SiPostgresql, SiApachekafka, SiNginx, FaCogs, FaGitAlt,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase">Tech Stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((g, gi) => {
            const Icon = iconMap[g.icon] || FaCode;
            return (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent/20 flex items-center justify-center text-brand-400 text-2xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="font-display font-semibold text-white text-lg">{g.group}</h3>
                  </div>
                  <span className="text-sm font-bold text-brand-400">{g.level}%</span>
                </div>

                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: gi * 0.08 + 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-500 to-accent rounded-full"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.items.map((it, i) => (
                    <motion.span
                      key={it}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.08 + i * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:border-brand-400/60 hover:text-white transition-colors"
                    >
                      {it}
                    </motion.span>
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

