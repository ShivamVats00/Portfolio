"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md"
    >
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-emerald glow-emerald"></span>
        ABOUT
      </h2>
      <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
        Crafting performant systems &amp; decentralized futures. Exploring <span className="text-neon-cyan">Rust/Solana</span>, containerization, and integrating <span className="text-neon-purple">AI</span> into daily workflows. Currently in training cohort.
      </p>
    </motion.section>
  );
}
