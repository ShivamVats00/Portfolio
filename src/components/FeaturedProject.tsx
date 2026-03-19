"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "JOURNAL AI APP",
    tech: "Next.js, MongoDB, Docker, OpenAI",
    description: "A full-stack solution with automated entry summarization.",
    dotColor: "bg-neon-cyan",
    glowColor: "glow-cyan",
    bgGlow: "bg-neon-cyan/5 group-hover:bg-neon-cyan/10",
    btnColor: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/20"
  },
  {
    title: "NOX",
    tech: "Vite, React, Node.js",
    description: "Notion page to PDF converter web app.",
    dotColor: "bg-neon-purple",
    glowColor: "glow-purple",
    bgGlow: "bg-neon-purple/5 group-hover:bg-neon-purple/10",
    btnColor: "bg-neon-purple/10 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/20"
  },
  {
    title: "DRAW",
    tech: "React, Node.js, WebSockets",
    description: "Collaborative whiteboarding application.",
    dotColor: "bg-neon-emerald",
    glowColor: "glow-emerald",
    bgGlow: "bg-neon-emerald/5 group-hover:bg-neon-emerald/10",
    btnColor: "bg-neon-emerald/10 text-neon-emerald border-neon-emerald/30 hover:bg-neon-emerald/20"
  }
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="flex flex-col gap-6 w-full">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md hover:border-neutral-700 transition-colors group relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10 transition-colors ${project.bgGlow}`}></div>
          
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${project.dotColor} ${project.glowColor}`}></span>
            {project.title}
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
                Built with <span className="text-white font-semibold">{project.tech}</span>. {project.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="#" className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors font-medium text-sm ${project.btnColor}`}>
                  <ExternalLink size={16} /> LIVE DEMO
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition-colors font-medium text-sm">
                  <Github size={16} /> VIEW REPO
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
