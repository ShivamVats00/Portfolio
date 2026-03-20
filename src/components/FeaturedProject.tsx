"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NOX",
    tech: "React, TypeScript, Vite, Node.js, Vercel Serverless",
    description: "A full-stack web application that allows users to securely connect their Notion workspaces and seamlessly generate custom PDF exports of their pages. It handles complete OAuth 2.0 authentication and dynamic document rendering.",
    features: [
      "Seamless Notion Integration: Securely authenticates users and mirrors live Notion workspace architecture directly in the browser.",
      "Streamlined PDF Generation: Bypasses default export limitations by providing a dedicated, one-click conversion tool.",
      "Optimized User Experience: Asynchronous custom hooks to manage generation and download states."
    ],
    liveUrl: "https://nox.shivamvats.xyz",
    repoUrl: "https://github.com/ShivamVats00/NotionPDF",
    dotColor: "bg-neon-purple",
    glowColor: "glow-purple",
    bgGlow: "bg-neon-purple/5 group-hover:bg-neon-purple/10",
    btnColor: "bg-neon-purple/10 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/20",
    desktopMockup: "",
    mobileMockup: ""
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
              
              <div className="w-full max-w-sm aspect-video bg-neutral-800 rounded shadow-2xl border border-neutral-700 relative overflow-hidden flex items-center justify-center">
                {project.desktopMockup ? (
                  <img src={project.desktopMockup} alt={`${project.title} Desktop`} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/50 to-neutral-900/50 flex items-center justify-center text-neutral-500 font-mono text-xs">DESKTOP MOCKUP</div>
                )}
              </div>

              
              <div className="absolute bottom-4 right-4 w-16 aspect-[9/16] bg-neutral-800 rounded-md shadow-xl border border-neutral-700 flex items-center justify-center overflow-hidden">
                {project.mobileMockup ? (
                  <img src={project.mobileMockup} alt={`${project.title} Mobile`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-neutral-500 font-mono text-[8px] text-center p-1 bg-gradient-to-br from-neutral-700/50 to-neutral-900/50 absolute inset-0 flex items-center justify-center w-full h-full">MOBILE MOCKUP</div>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-neutral-300 leading-relaxed mb-4">
                Built with <span className="text-white font-semibold">{project.tech}</span>. {project.description}
              </p>

              
              {project.features && (
                <ul className="text-neutral-400 text-sm list-disc pl-5 mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              <div className="flex gap-4 mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors font-medium text-sm ${project.btnColor}`}>
                  <ExternalLink size={16} /> LIVE DEMO
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition-colors font-medium text-sm">
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
