import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { personal } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase">Let's talk</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have an opportunity or a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[
              { icon: FaEnvelope, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: FaPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
              { icon: FaMapMarkerAlt, label: "Location", value: personal.location, href: null },
            ].map((c) => (
              <motion.a
                key={c.label}
                href={c.href || "#"}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-400 text-xl">
                  <c.icon />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{c.label}</div>
                  <div className="text-white font-medium">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="flex gap-4 pt-2">
              {[
                { icon: FaGithub, href: personal.github, label: "GitHub" },
                { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${personal.email}`, label: "Email" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-500/40 transition-colors text-xl"
                  aria-label={s.label}
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4"
          >
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                placeholder="Say hello..."
                className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent text-white font-semibold shadow-lg shadow-brand-500/30"
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
