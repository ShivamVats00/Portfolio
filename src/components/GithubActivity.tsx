"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const explicitTheme = {
    light: ['#ebedf0', '#e0f2fe', '#bae6fd', '#38bdf8', '#00f3ff'],
    dark: ['#171717', '#083344', '#0e7490', '#06b6d4', '#00f3ff'],
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md flex flex-col justify-between"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan glow-cyan"></span>
          GITHUB ACTIVITY
        </h2>
      </div>

      <div className="bg-neutral-950 p-4 md:p-6 rounded-xl border border-neutral-800 flex justify-center overflow-x-auto min-w-full">
        <div className="flex min-w-max min-h-[150px] items-center justify-center">
          {mounted ? (
            <GitHubCalendar
              username="shivamvats"
              colorScheme="dark"
              theme={explicitTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          ) : (
            <div className="w-full text-center text-neutral-500 font-mono text-sm py-10">
              Loading calendar...
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
