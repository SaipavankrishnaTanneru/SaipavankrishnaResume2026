import { motion } from "framer-motion";
import { FaRocket, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { personal } from "../data/resume";

const cards = [
  { icon: FaCode, title: "Frontend", desc: "React JS SPAs with responsive, animated UIs" },
  { icon: FaServer, title: "Backend", desc: "Java Spring Boot microservices & REST APIs" },
  { icon: FaDatabase, title: "Data", desc: "PostgreSQL / MySQL schema design & migration" },
  { icon: FaRocket, title: "Distributed", desc: "Saga, Kafka, SeaweedFS, Nginx" },
];

const strengths = [
  "End-to-end module ownership",
  "Legacy system re-engineering",
  "Distributed transaction patterns",
  "Cross-database data migration",
  "Event-driven microservices",
  "Performance & scalability focus",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Turning legacy into <span className="text-accent">modern systems</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-slate-300 leading-relaxed"
          >
            <p>{personal.summary}</p>
            <p>
              I progressed from Trainee to Junior Developer in just 5 months, and now independently own the Employee
              module end-to-end — from design and development to delivery. I enjoy researching and adopting new
              technologies (Saga pattern, Kafka, SeaweedFS) and turning them into production-grade solutions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["React JS", "Spring Boot", "PostgreSQL", "Kafka", "Saga", "SeaweedFS"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {strengths.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 hover:border-brand-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 text-2xl mb-3">
                  <c.icon />
                </div>
                <h3 className="font-display font-semibold text-white">{c.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
