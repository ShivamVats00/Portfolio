"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRust, FaDocker, FaAws, FaLinux } from "react-icons/fa";
import { SiSolana, SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const techStack = [
  { name: "React", icon: FaReact, color: "text-blue-400", border: "border-blue-400/30", glow: "hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", border: "border-green-500/30", glow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" },
  { name: "Rust", icon: FaRust, color: "text-orange-500", border: "border-orange-500/30", glow: "hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]" },
  { name: "Solana", icon: SiSolana, color: "text-purple-400", border: "border-purple-400/30", glow: "hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]" },
  { name: "MongoDB", icon: DiMongodb, color: "text-emerald-500", border: "border-emerald-500/30", glow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500", border: "border-blue-500/30", glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
  { name: "AWS", icon: FaAws, color: "text-yellow-500", border: "border-yellow-500/30", glow: "hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]" },
  { name: "Linux", icon: FaLinux, color: "text-white", border: "border-neutral-500/30", glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", border: "border-neutral-500/30", glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
];

export default function TechStack() {
  return (
    <motion.section 
      id="tech"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="md:col-span-1 p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md flex flex-col"
    >
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-purple glow-purple"></span>
        TECH STACK
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-2 rounded-xl bg-neutral-950 border ${tech.border} ${tech.glow} transition-all cursor-crosshair group`}
            >
              <div className={`w-10 h-10 rounded-md mb-2 bg-neutral-800 flex items-center justify-center ${tech.color} font-bold text-xs group-hover:bg-neutral-800/50 transition-colors`}>
                 <Icon size={24} />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
