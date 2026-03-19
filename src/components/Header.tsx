"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md"
    >
      <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          SHIVAM VATS
        </h1>
        <p className="text-sm font-mono text-neon-cyan glow-cyan inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-neon-cyan/30">
          FULL-STACK & WEB3 DEVELOPER | MERN | RUST | SOLANA
        </p>
      </div>

      <nav className="flex items-center gap-6 text-sm font-semibold text-neutral-400 mb-6 md:mb-0">
        <a href="#projects" className="hover:text-neon-emerald transition-colors">PROJECTS</a>
        <a href="#tech" className="hover:text-neon-cyan transition-colors">TECH STACK</a>
        <a href="#about" className="hover:text-neon-purple transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
      </nav>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 font-bold text-black bg-neon-emerald rounded-xl glow-emerald transition-shadow shadow-[0_0_20px_rgba(0,255,102,0.6)] hover:shadow-[0_0_30px_rgba(0,255,102,0.8)]"
      >
        HIRE ME (INTERNSHIP)
      </motion.button>
    </motion.header>
  );
}
