"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const links = [
  { icon: <Github size={24} />, name: "GitHub", handle: "ShivamVats", href: "https://github.com/ShivamVats00", color: "text-white", glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]" },
  { icon: <Twitter size={24} />, name: "Twitter", handle: "ShivamVats", href: "https://x.com/ShivamVats1108", color: "text-[#1DA1F2]", glow: "hover:shadow-[0_0_20px_rgba(29,161,242,0.8)]" },
  { icon: <Linkedin size={24} />, name: "LinkedIn", handle: "ShivamVats", href: "https://www.linkedin.com/in/shivam-choudhary-ab8b4a230", color: "text-[#0A66C2]", glow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.8)]" },
];

export default function ConnectCard() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md h-full flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 gap-4">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, x: 5 }}
            className={`flex items-center gap-4 p-3 rounded-xl bg-neutral-950 border border-neutral-800 ${link.glow} transition-all group group-hover:bg-neutral-900`}
          >
            <div className={`p-2 rounded-lg bg-neutral-900 group-hover:bg-black transition-colors ${link.color}`}>
              {link.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{link.name}</p>
              <p className="text-neutral-500 text-xs font-mono">{link.handle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
