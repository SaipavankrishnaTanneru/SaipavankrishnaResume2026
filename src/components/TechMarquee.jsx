import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiSpringboot, SiPostgresql, SiApachekafka, SiNginx } from "react-icons/si";
import { FaJava, FaGitAlt } from "react-icons/fa";

const items = [
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaJava, name: "Java" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiNginx, name: "Nginx" },
  { icon: FaGitAlt, name: "Git" },
];

export default function TechMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-8 bg-slate-100 border-y border-slate-200 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {doubled.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex items-center gap-3 text-slate-600">
              <Icon className="text-3xl text-brand-600" />
              <span className="font-display font-semibold text-lg">{it.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
