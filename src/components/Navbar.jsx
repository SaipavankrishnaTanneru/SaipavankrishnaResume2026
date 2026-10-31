import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { personal } from "../data/resume";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl text-white flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
            SP
          </span>
          <span className="hidden sm:inline">{personal.shortName}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium relative group transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-400 to-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-600 to-accent text-white text-sm font-medium shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-white block py-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
