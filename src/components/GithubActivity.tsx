"use client";

import { motion } from "framer-motion";

export default function GithubActivity() {
  // Generate mock contribution data
  const generateMockData = () => {
    const weeks = [];
    for (let w = 0; w < 12; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {

        const intensity = Math.floor(Math.random() * 5);
        days.push(intensity);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 0: return "bg-neutral-800";
      case 1: return "bg-cyan-900/50";
      case 2: return "bg-cyan-700/60";
      case 3: return "bg-neon-cyan/70 glow-cyan";
      case 4: return "bg-white glow-cyan";
      default: return "bg-neutral-800";
    }
  };

  const mockData = generateMockData();

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="md:col-span-2 p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md flex flex-col justify-between"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan glow-cyan"></span>
          GITHUB ACTIVITY
        </h2>
        <div className="text-right">
          <p className="text-sm font-mono text-neon-cyan">500+ COMMITS</p>
          <p className="text-xs font-mono text-neutral-400">10+ REPOS</p>
        </div>
      </div>

      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex justify-center overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {mockData.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1">
              {week.map((day, dIndex) => (
                <div 
                  key={`${wIndex}-${dIndex}`} 
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${getIntensityColor(day)} transition-colors duration-300`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
