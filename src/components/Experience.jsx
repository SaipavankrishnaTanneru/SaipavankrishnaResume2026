import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-600 font-semibold tracking-widest text-sm uppercase">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-2">
            Professional <span className="text-cyan-600">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-accent/40 to-transparent md:-translate-x-1/2" />

          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.period}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative mb-12 md:mb-16 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto"
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-accent ring-4 ring-white ${
                  i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"
                }`}
              />
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-brand-500/40 transition-colors shadow-xl"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                      <FaBriefcase className="text-brand-600 text-sm" /> {job.role}
                    </h3>
                    <p className="text-cyan-600 font-medium mt-1">{job.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-500/15 text-brand-600 border border-brand-500/30">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3">
                  <span className="flex items-center gap-1.5"><FaCalendarAlt /> {job.period}</span>
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt /> {job.location}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h, hi) => (
                    <motion.li
                      key={hi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + hi * 0.06 }}
                      className="flex gap-2 text-slate-600 text-sm leading-relaxed"
                    >
                      <span className="text-brand-600 mt-1.5">▹</span>
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
