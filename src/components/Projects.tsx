'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Route, Sparkles, ShoppingCart, CheckCircle, RefreshCw, GitBranch, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'Super Fitness & AI Coach App',
    description: 'A revolutionary wellness application powered by a smart personal trainer. It enables users to stream real-time workout recommendations and track nutrition logs offline.',
    tech: ['Flutter', 'Gemini AI', 'BLoC', 'Hive CE', 'Dart'],
    highlight: 'Agentic AI Smart Coach, Gemini API streaming, RAG context, and offline Hive caching.',
    video: '/portfolio/images/project_fitness.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Fitness',
    preview: 'https://github.com/Flutter-Elevate-Team2/Fitness',
    icon: Sparkles,
    glow: 'rgba(6, 182, 212, 0.12)',
    bentoClass: 'md:col-span-2 min-h-[480px]',
    reverseLayout: false,
  },
  {
    title: 'Flowery (E-Commerce App)',
    description: 'A premium flower delivery e-commerce application offering an immersive shopping catalog, instant cart state syncing, and detailed order maps.',
    tech: ['Flutter', 'BLoC', 'Clean Architecture', 'Mapbox SDK', 'Firestore'],
    highlight: 'Global cart state, Mapbox SDK, live Firestore streams, and smooth 60 FPS rendering.',
    video: '/portfolio/images/project_flowery.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Flowers-App',
    preview: 'https://github.com/Flutter-Elevate-Team2/Flowers-App',
    icon: ShoppingCart,
    glow: 'rgba(217, 70, 239, 0.12)',
    bentoClass: 'md:col-span-1 min-h-[480px]',
    reverseLayout: false,
  },
  {
    title: 'Flowery (Driver App)',
    description: 'A high-performance logistics companion app designed for delivery drivers, providing coordinate synchronization and route directions.',
    tech: ['Flutter', 'BLoC', 'Mapbox SDK', 'Firebase', 'Dio'],
    highlight: 'Persistent foreground service for live coordinate syncing, route caching, and Dio interceptors.',
    video: '/portfolio/images/project_driver.mp4',
    github: 'https://github.com/Flutter-Elevate-Team2/Tracking-App',
    preview: 'https://github.com/Flutter-Elevate-Team2/Tracking-App',
    icon: Route,
    glow: 'rgba(16, 185, 129, 0.12)',
    bentoClass: 'md:col-span-1 min-h-[480px]',
    reverseLayout: false,
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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-flutter-cyan/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-flutter/5 blur-[120px] pointer-events-none" />

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
            Featured <span className="text-gradient-flutter font-black">PROJECTS</span>
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
            Explore interactive mobile applications built with clean principles, solid architecture, and cutting-edge tech.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
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
                className={`glass-card rounded-3xl border border-slate-900/60 overflow-hidden flex flex-col sm:flex-row group hover:border-flutter/35 transition-all duration-300 relative p-6 gap-6 ${proj.bentoClass}`}
                style={{
                  boxShadow: isHovered ? `0 20px 40px -15px ${proj.glow}` : 'none',
                  background: 'rgba(7, 8, 15, 0.65)',
                }}
              >
                {/* Left Side: Content Wrapper */}
                <div className="flex-1 flex flex-col justify-between z-10 relative order-2 sm:order-1 h-full min-h-[220px] sm:min-h-auto">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                        <Icon className="w-4 h-4 text-flutter-cyan" />
                      </div>
                      <h3 className="text-xl font-black text-white group-hover:text-flutter-cyan transition-colors leading-snug">
                        {proj.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 text-xs leading-relaxed font-sans line-clamp-3 md:line-clamp-none">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-900 text-[9px] text-slate-300 font-bold uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights & Actions (Static / Always clear layout structure) */}
                  <div className="space-y-3 mt-4 border-t border-slate-900 pt-4">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-900/80 flex items-start gap-2">
                      <Cpu className="w-3.5 h-3.5 text-flutter-cyan shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-300 leading-normal font-sans">
                        <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider block mb-0.5">Architecture</span>
                        {proj.highlight}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
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
                        className="inline-flex items-center gap-1 text-xs font-bold text-flutter-cyan hover:text-white transition-colors"
                      >
                        <span>Watch Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side: High-Fidelity Smartphone Mockup Frame */}
                <div className="flex-1 flex items-center justify-center z-10 order-1 sm:order-2 shrink-0">
                  <div className="relative w-[155px] h-[310px] sm:w-[170px] sm:h-[340px] rounded-[36px] p-2 bg-slate-900 border-[5px] border-slate-800 shadow-2xl overflow-hidden group-hover:border-flutter/40 transition-colors">
                    {/* Speaker/Camera Dynamic Island Accent */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-3.5 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900/60 ml-auto mr-2" />
                    </div>
                    {/* Inner Screen */}
                    <div className="w-full h-full rounded-[28px] overflow-hidden relative bg-black border border-slate-950">
                      <video
                        src={proj.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-100 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}

          {/* Custom Bento Card: DevOps Dashboard Metric */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-3xl border border-slate-900 p-8 flex flex-col md:col-span-2 min-h-[450px] md:h-auto relative overflow-hidden group hover:border-flutter/25 transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(245,158,11,0.06)] bg-[#07080f]/65"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-flutter/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-slate-900 pb-4 relative z-10 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800/80">
                  <GitBranch className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">DevOps & Pipeline Integrations</h3>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">GitHub Actions CI/CD Setup</span>
                </div>
              </div>
              <div className="inline-flex self-start sm:self-auto items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                <span>All Pipelines Passing</span>
              </div>
            </div>

            {/* Pipeline Visual representation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-grow items-center relative z-10">
              {[
                { label: 'Code Quality', desc: 'Lints & Formatting', status: 'Passing', time: '12s' },
                { label: 'Static Analysis', desc: 'Mock Tests (92%)', status: '92% cov', time: '48s' },
                { label: 'Platform Build', desc: 'Gradle & Xcode Bundler', status: 'Succeeded', time: '2m 15s' },
                { label: 'Distribution', desc: 'Firebase Tester App', status: 'Delivered', time: '45s' },
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-900 rounded-2xl p-4 flex flex-col justify-between h-40 shadow-md group-hover:border-slate-800/50 transition-colors">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase">Stage 0{idx + 1}</span>
                    <h4 className="text-xs font-bold text-white">{step.label}</h4>
                    <p className="text-[10px] text-slate-400 leading-normal">{step.desc}</p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-slate-900 pt-3 mt-2">
                    <span className="text-[10px] font-semibold text-slate-500">{step.time}</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 uppercase">
                      <CheckCircle className="w-3 h-3 shrink-0" />
                      <span>{step.status}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Metrics footer */}
            <div className="flex flex-wrap gap-6 items-center border-t border-slate-900 pt-6 mt-6 relative z-10 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-flutter-cyan" />
                <span>Coverage Target: <strong className="text-slate-300">90%+ Goal Met</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Continuous Deployments: <strong className="text-slate-300">Fastlane & Firebase</strong></span>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
