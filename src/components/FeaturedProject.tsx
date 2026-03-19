"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function FeaturedProject() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="md:col-span-2 flex flex-col p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md hover:border-neon-cyan/30 transition-colors group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl -z-10 group-hover:bg-neon-cyan/10 transition-colors"></div>
      
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-cyan glow-cyan"></span>
        FEATURED PROJECT: JOURNAL AI APP
      </h2>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 mb-6">

        <div className="flex-1 relative rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center p-4">
          <div className="w-full max-w-sm aspect-video bg-neutral-800 rounded shadow-2xl border border-neutral-700 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/50 to-neutral-900/50 flex items-center justify-center text-neutral-500 font-mono text-xs">DESKTOP MOCKUP</div>
          </div>
          <div className="absolute bottom-4 right-4 w-16 aspect-[9/16] bg-neutral-800 rounded-md shadow-xl border border-neutral-700 flex items-center justify-center text-neutral-500 font-mono text-[8px] text-center p-1">
            MOBILE MOCKUP
          </div>
        </div>


        <div className="flex-1 flex flex-col justify-center">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Built with <span className="text-white font-semibold">Next.js, MongoDB, Docker, OpenAI API</span>. A full-stack solution with automated entry summarization.
          </p>
          <div className="flex gap-4 mt-auto">
            <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors font-medium text-sm">
              <ExternalLink size={16} /> LIVE DEMO
            </a>
            <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition-colors font-medium text-sm">
              <Github size={16} /> VIEW REPO
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
