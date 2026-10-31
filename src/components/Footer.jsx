import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { personal } from "../data/resume";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div>© {new Date().getFullYear()} {personal.shortName}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=SaipavankrishnaTanneru.SaipavankrishnaResume2026"
            alt="visitor count"
            className="h-5"
          />
          <span className="flex items-center gap-1.5">
            Built with <FaHeart className="text-pink-500" /> using React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
