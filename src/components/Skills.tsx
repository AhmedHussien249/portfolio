'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Database, Brain, Rocket, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    iconColor: 'text-blue-400',
    skills: ['Dart', 'Flutter (Android & iOS)', 'Java', 'Kotlin (Basic)'],
  },
  {
    title: 'Architecture & Patterns',
    icon: Layers,
    iconColor: 'text-indigo-400',
    skills: ['Clean Architecture', 'SOLID Principles', 'Repository Pattern', 'Dependency Injection', 'GetIt', 'Injectable'],
  },
  {
    title: 'State Management',
    icon: Cpu,
    iconColor: 'text-cyan-400',
    skills: ['BLoC Pattern', 'Cubit', 'Stateful/Stateless Lifecycle'],
  },
  {
    title: 'Networking & Storage',
    icon: Database,
    iconColor: 'text-emerald-400',
    skills: ['RESTful APIs', 'Dio Client', 'Retrofit', 'Hive CE', 'SecureStorage'],
  },
  {
    title: 'AI, Maps & Cloud Services',
    icon: Brain,
    iconColor: 'text-purple-400',
    skills: ['Google Gemini 2.5 Flash', 'Firestore Live Streams', 'FCM v1 (Push Notifications)', 'Mapbox SDK'],
  },
  {
    title: 'DevOps & Testing',
    icon: Rocket,
    iconColor: 'text-amber-400',
    skills: ['GitHub Actions (CI/CD)', 'Firebase App Distribution', 'Unit Testing', 'Widget Testing', 'BLoC Testing', 'Mockito'],
  },
  {
    title: 'Methodologies & Tools',
    icon: Award,
    iconColor: 'text-rose-400',
    skills: ['Agile Methodology', 'SCRUM framework', 'Jira', 'Git / GitHub', 'Code PR Reviews'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function Skills() {
  // Local state to track which category card is currently hovered
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-1/10 w-[300px] h-[300px] rounded-full bg-flutter-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/10 w-[350px] h-[350px] rounded-full bg-flutter/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Technical <span className="text-gradient-flutter font-black">SKILLS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-20 bg-flutter mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 mt-4 text-base sm:text-lg"
          >
            A comprehensive overview of my coding weapons, frameworks, and architecture expertise.
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{
                  opacity: !isAnyHovered || isHovered ? 1 : 0.4,
                  scale: isHovered ? 1.02 : 1,
                  borderColor: isHovered ? 'rgba(2, 86, 155, 0.35)' : 'rgba(255, 255, 255, 0.03)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card rounded-3xl border p-6 flex flex-col transition-shadow duration-300 group cursor-default"
                style={{
                  boxShadow: isHovered ? '0 15px 30px -15px rgba(2, 86, 155, 0.15)' : 'none',
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5 border-b border-slate-900/60 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950/80 flex items-center justify-center border border-slate-900 group-hover:border-flutter/30 transition-colors">
                    <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Chips Container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-950/70 border border-slate-900 hover:border-flutter/30 hover:bg-slate-950 text-xs text-slate-300 hover:text-white font-semibold cursor-default transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
