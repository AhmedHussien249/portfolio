'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Route, Sparkles, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'Super Fitness & AI Coach App',
    description: 'A revolutionary wellness application powered by a smart personal trainer. It enables users to stream real-time workout recommendations and track nutrition logs offline.',
    tech: ['Flutter', 'Gemini AI', 'BLoC', 'Hive CE', 'Dart'],
    highlight: 'Agentic AI Smart Coach, Gemini API streaming, RAG context, and offline Hive caching.',
    video: '/portfolio/images/project_fitness.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Fitness',
    icon: Sparkles,
  },
  {
    title: 'Flowery (E-Commerce App)',
    description: 'A premium flower delivery e-commerce application offering an immersive shopping catalog, instant cart state syncing, and detailed order maps.',
    tech: ['Flutter', 'BLoC', 'Clean Architecture', 'Mapbox SDK', 'Firestore'],
    highlight: 'Global cart state, Mapbox SDK, live Firestore streams, and smooth 60 FPS rendering.',
    video: '/portfolio/images/project_flowery.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Flowers-App',
    icon: ShoppingCart,
  },
  {
    title: 'Flowery (Driver App)',
    description: 'A high-performance logistics companion app designed for delivery drivers, providing coordinate synchronization and route directions.',
    tech: ['Flutter', 'BLoC', 'Mapbox SDK', 'Firebase', 'Dio'],
    highlight: 'Persistent foreground service for live coordinate syncing, route caching, and Dio interceptors.',
    video: '/portfolio/images/project_driver.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Tracking-App',
    icon: Route,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 90, damping: 16 },
  },
};

export default function Projects() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Featured <span className="text-gradient-flutter font-black">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-px w-16 bg-slate-700 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 mt-4 text-base sm:text-lg"
          >
            Production-ready mobile applications built with clean architecture and modern tooling.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            const isHovered = hoveredCardIdx === idx;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                className="card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
                style={{
                  boxShadow: isHovered ? '0 8px 30px -12px rgba(0, 0, 0, 0.4)' : 'none',
                }}
              >
                {/* Phone Mockup */}
                <div className="flex items-center justify-center pt-6 pb-2 px-6">
                  <div className="relative w-[150px] h-[300px] sm:w-[160px] sm:h-[320px] rounded-[32px] p-1.5 bg-slate-800 border-[4px] border-slate-700/80 overflow-hidden group-hover:border-slate-600/80 transition-colors">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800/60 ml-auto mr-1.5" />
                    </div>
                    {/* Screen */}
                    <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-black">
                      <video
                        src={proj.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 pt-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-flutter-cyan" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {proj.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-800/60 text-[10px] text-slate-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight & Actions */}
                  <div className="space-y-3 mt-4 border-t border-slate-800/50 pt-4">
                    <div className="flex items-start gap-2">
                      <Cpu className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {proj.highlight}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        <span>Repository</span>
                      </a>
                      <a
                        href={proj.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-flutter-cyan hover:text-white transition-colors"
                      >
                        <span>Watch Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
