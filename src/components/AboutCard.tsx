"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md h-full flex flex-col justify-center"
    >
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-emerald glow-emerald"></span>
        ABOUT
      </h2>
      <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
        Actively building scalable full-stack applications and expanding into Web3 architecture.
      </p>
      <div>
        <h3 className="text-white text-sm font-semibold mb-1">Currently Learning:</h3>
        <p className="text-neutral-400 text-sm">
          Deep diving into <span className="text-neon-cyan">Solana</span>, <span className="text-orange-500">Rust</span>, and advanced containerization.
        </p>
      </div>
    </motion.section>
  );
}
